/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};


//for this project, we only handle keys of type string
function Node(key, value, nextNode) {
    return {
        keyName: key,
        value: value,
        nextNode: nextNode
    }
};

function hashMap() {
    return {
        table: {},
        capacity: 16, //total number of buckets
        loadFactor: 0.75, //determines when to grow number of buckets
        size: 0,
        //takes a key and produces a hash code with it
        hash: function(key) {
            let hashCode = 0;
               
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
              hashCode = primeNumber * hashCode + key.charCodeAt(i);
              hashCode %= this.capacity;
            }
         
            return hashCode;
        },
        //If a key already exists, then the old value is overwritten
        set: function(key,value) {

            //we should get the hashedKey from hash function\
            //hashKey represents the index of the table, in which the created
            //element will go
            let hashedKey = this.hash(key);

            //we create our element, giving it a key, a value and the next node
            //placeholder which will resolve collision if collision happens
            let element = Node(key, value, null);

            //if theres and element at this index, check if the keys match
            if (this.table[hashedKey]) {
                //if the existing key doesn't match with the current one, 
                //link the current element to the existing elements nextNode
                if (this.table[hashedKey].keyName !== key) {
                    let tempNode = this.table[hashedKey];
                    while (tempNode.nextNode !== null) {
                        tempNode = tempNode.nextNode;
                    }
                    tempNode.nextNode = element;

                //else if the existing key matches with the current one,
                //replace the existing value with the current value
                } else this.table[hashedKey].value = value;

            //if there isn't an element at this index,create it
            } else {
                this.table[hashedKey] = element;
                this.size++;
                console.log(this.size)
            } 

            //check capacity
            if (this.size > this.capacity * this.loadFactor) {
                this.resize(this.capacity * 2);
            }
        },
        resize: function(newCapacity) {
            let oldTable = this.table;
            this.capacity = newCapacity;
            this.table = {};
            this.size = 0;
        
            for (let key in oldTable) {
                let currentNode = oldTable[key];
                while (currentNode) {
                    this.set(currentNode.keyName, currentNode.value); // Rehash elements into new table
                    currentNode = currentNode.nextNode;
                }
            }
        },
        get: function(key){
            //takes one argument as a key and returns the value that
            //is assigned to this key. If a key is not found, return null.
            
            let hashedKey = this.hash(key);
            let currentElement = this.table[hashedKey];
            while (currentElement != null) {
                if (currentElement.keyName === key) return currentElement.value;
                else currentElement = currentElement.nextNode;
            }
            return null;
        },
        has: function(key){
            //takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

            let hashedKey = this.hash(key);
            let currentElement = this.table[hashedKey];
            while (currentElement != null) {
                if (currentElement.keyName === key) return true;
                else currentElement = currentElement.nextNode;
            }
            return false;
        },
        remove: function(key) {
            // takes a key as an argument. If the given key is in the hash map, it should
            // remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

            let hashedKey = this.hash(key);
            let currentElement = this.table[hashedKey];
            let nextNode = null;

            //checks if the key to be removed is the first in the list (if its a head)
            if (currentElement.keyName === key) {
                //if it is a head, it gets the next node and sets the head to that node
                nextNode = currentElement.nextNode;
                this.table[hashedKey] = nextNode;
                return true;
            };

            //else if the key to be removed is not the first in the list,
            //it finds it and replaces it with its nextNode
            while (currentElement != null) {
                if (currentElement.nextNode.keyName === key) {
                    nextNode = currentElement.nextNode.nextNode;
                    currentElement.nextNode = nextNode;
                    return true;
                } else currentElement = currentElement.nextNode;
            };

            //if its not found, returns false
            return false;
        },
        length: function(){ //returns the number of stored keys in the hash map.
            let list = this.table;
            let totalKeys = 0;

            //we loop through every bucket in the list
            for (let element in list) {

                //we're checking if the bucket isn't empty, then
                //increasing the total number of keys
                if (list[element].keyName != null) totalKeys++;

                //we get the next node and while it isn't null,
                //we increase the total number of keys and get the next nodes next node
                let nextNode = list[element].nextNode;
                while (nextNode != null) {
                    totalKeys++;
                    nextNode = nextNode.nextNode;
                }
              }
              return totalKeys;
        },
        clear: function() { //removes all entries in the hash map.
            this.table = {};
        },
        keys: function() { //returns an array containing all the keys inside the hash map.
            //similar to length function
            let list = this.table;
            let keysArr = [];

            for (let element in list) {
                keysArr.push(list[element].keyName);

                let nextNode = list[element].nextNode;
                while (nextNode != null) {
                    keysArr.push(nextNode.keyName);
                    nextNode = nextNode.nextNode;
                }
              }
              return keysArr;
        },
        values: function(){//returns an array containing all the values.
            let list = this.table;
            let valuesArr = [];

            for (let element in list) {
                valuesArr.push(list[element].value);

                let nextNode = list[element].nextNode;
                while (nextNode != null) {
                    valuesArr.push(nextNode.value);
                    nextNode = nextNode.nextNode;
                }
              }
              return valuesArr;
        },
        entries: function(){//returns an array that contains each key, value pair
            let list = this.table;
            let entriesArr = [];

            for (let element in list) {

                //for every bucket creates a pair array
                let pairArr = [];
                
                //pushes the heads keyName and value into that array,
                //creating a pair which is added to the main arr
                pairArr.push(list[element].keyName);
                pairArr.push(list[element].value);
                entriesArr.push(pairArr);

                let nextNode = list[element].nextNode;
                while (nextNode != null) {
                    //we reset the pair array, since we already pushed our last pair to the main array
                    pairArr = [];
                    pairArr.push(nextNode.keyName);
                    pairArr.push(nextNode.value);
                    entriesArr.push(pairArr);
                    nextNode = nextNode.nextNode;
                }
            }

            return entriesArr;
        }
    }
}

let nameList = hashMap();
nameList.set('Carlos', 1)
nameList.set('Miro', 2)
nameList.set('Milos', 3)
nameList.set('Carla', 4)
nameList.set('laCaraabde', 9)
nameList.set('UgaBuga', 5)
nameList.set('losmi', 29)
console.log(nameList.table)
 console.log(nameList.length())
 console.log(nameList.keys())
 console.log(nameList.values())
 console.log(nameList.entries())
 nameList.set('Paskas', 29)
 console.log(nameList.table)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vL2ZvciB0aGlzIHByb2plY3QsIHdlIG9ubHkgaGFuZGxlIGtleXMgb2YgdHlwZSBzdHJpbmdcclxuZnVuY3Rpb24gTm9kZShrZXksIHZhbHVlLCBuZXh0Tm9kZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXlOYW1lOiBrZXksXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIG5leHROb2RlOiBuZXh0Tm9kZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFzaE1hcCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFibGU6IHt9LFxyXG4gICAgICAgIGNhcGFjaXR5OiAxNiwgLy90b3RhbCBudW1iZXIgb2YgYnVja2V0c1xyXG4gICAgICAgIGxvYWRGYWN0b3I6IDAuNzUsIC8vZGV0ZXJtaW5lcyB3aGVuIHRvIGdyb3cgbnVtYmVyIG9mIGJ1Y2tldHNcclxuICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgIC8vdGFrZXMgYSBrZXkgYW5kIHByb2R1Y2VzIGEgaGFzaCBjb2RlIHdpdGggaXRcclxuICAgICAgICBoYXNoOiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IGhhc2hDb2RlID0gMDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgaGFzaENvZGUgJT0gdGhpcy5jYXBhY2l0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hDb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9JZiBhIGtleSBhbHJlYWR5IGV4aXN0cywgdGhlbiB0aGUgb2xkIHZhbHVlIGlzIG92ZXJ3cml0dGVuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihrZXksdmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vd2Ugc2hvdWxkIGdldCB0aGUgaGFzaGVkS2V5IGZyb20gaGFzaCBmdW5jdGlvblxcXHJcbiAgICAgICAgICAgIC8vaGFzaEtleSByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgdGFibGUsIGluIHdoaWNoIHRoZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIC8vZWxlbWVudCB3aWxsIGdvXHJcbiAgICAgICAgICAgIGxldCBoYXNoZWRLZXkgPSB0aGlzLmhhc2goa2V5KTtcclxuXHJcbiAgICAgICAgICAgIC8vd2UgY3JlYXRlIG91ciBlbGVtZW50LCBnaXZpbmcgaXQgYSBrZXksIGEgdmFsdWUgYW5kIHRoZSBuZXh0IG5vZGVcclxuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciB3aGljaCB3aWxsIHJlc29sdmUgY29sbGlzaW9uIGlmIGNvbGxpc2lvbiBoYXBwZW5zXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gTm9kZShrZXksIHZhbHVlLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlcmVzIGFuZCBlbGVtZW50IGF0IHRoaXMgaW5kZXgsIGNoZWNrIGlmIHRoZSBrZXlzIG1hdGNoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlW2hhc2hlZEtleV0pIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGV4aXN0aW5nIGtleSBkb2Vzbid0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgb25lLCBcclxuICAgICAgICAgICAgICAgIC8vbGluayB0aGUgY3VycmVudCBlbGVtZW50IHRvIHRoZSBleGlzdGluZyBlbGVtZW50cyBuZXh0Tm9kZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVbaGFzaGVkS2V5XS5rZXlOYW1lICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBOb2RlLm5leHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlID0gdGVtcE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlLm5leHROb2RlID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGV4aXN0aW5nIGtleSBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgb25lLFxyXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIHRoZSBleGlzdGluZyB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy50YWJsZVtoYXNoZWRLZXldLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGFuIGVsZW1lbnQgYXQgdGhpcyBpbmRleCxjcmVhdGUgaXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUrKztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2l6ZSlcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgY2FwYWNpdHlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA+IHRoaXMuY2FwYWNpdHkgKiB0aGlzLmxvYWRGYWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKHRoaXMuY2FwYWNpdHkgKiAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbihuZXdDYXBhY2l0eSkge1xyXG4gICAgICAgICAgICBsZXQgb2xkVGFibGUgPSB0aGlzLnRhYmxlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcGFjaXR5ID0gbmV3Q2FwYWNpdHk7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9sZFRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBvbGRUYWJsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoY3VycmVudE5vZGUua2V5TmFtZSwgY3VycmVudE5vZGUudmFsdWUpOyAvLyBSZWhhc2ggZWxlbWVudHMgaW50byBuZXcgdGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIC8vdGFrZXMgb25lIGFyZ3VtZW50IGFzIGEga2V5IGFuZCByZXR1cm5zIHRoZSB2YWx1ZSB0aGF0XHJcbiAgICAgICAgICAgIC8vaXMgYXNzaWduZWQgdG8gdGhpcyBrZXkuIElmIGEga2V5IGlzIG5vdCBmb3VuZCwgcmV0dXJuIG51bGwuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5rZXlOYW1lID09PSBrZXkpIHJldHVybiBjdXJyZW50RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgLy90YWtlcyBhIGtleSBhcyBhbiBhcmd1bWVudCBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBrZXkgaXMgaW4gdGhlIGhhc2ggbWFwLlxyXG5cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQua2V5TmFtZSA9PT0ga2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAvLyB0YWtlcyBhIGtleSBhcyBhbiBhcmd1bWVudC4gSWYgdGhlIGdpdmVuIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZFxyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVudHJ5IHdpdGggdGhhdCBrZXkgYW5kIHJldHVybiB0cnVlLiBJZiB0aGUga2V5IGlzbuKAmXQgaW4gdGhlIGhhc2ggbWFwLCBpdCBzaG91bGQgcmV0dXJuIGZhbHNlLlxyXG5cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgIGxldCBuZXh0Tm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB0aGUga2V5IHRvIGJlIHJlbW92ZWQgaXMgdGhlIGZpcnN0IGluIHRoZSBsaXN0IChpZiBpdHMgYSBoZWFkKVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQua2V5TmFtZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGlzIGEgaGVhZCwgaXQgZ2V0cyB0aGUgbmV4dCBub2RlIGFuZCBzZXRzIHRoZSBoZWFkIHRvIHRoYXQgbm9kZVxyXG4gICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IG5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGtleSB0byBiZSByZW1vdmVkIGlzIG5vdCB0aGUgZmlyc3QgaW4gdGhlIGxpc3QsXHJcbiAgICAgICAgICAgIC8vaXQgZmluZHMgaXQgYW5kIHJlcGxhY2VzIGl0IHdpdGggaXRzIG5leHROb2RlXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQubmV4dE5vZGUua2V5TmFtZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZSA9IG5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dE5vZGU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0cyBub3QgZm91bmQsIHJldHVybnMgZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbigpeyAvL3JldHVybnMgdGhlIG51bWJlciBvZiBzdG9yZWQga2V5cyBpbiB0aGUgaGFzaCBtYXAuXHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy50YWJsZTtcclxuICAgICAgICAgICAgbGV0IHRvdGFsS2V5cyA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL3dlIGxvb3AgdGhyb3VnaCBldmVyeSBidWNrZXQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBpbiBsaXN0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy93ZSdyZSBjaGVja2luZyBpZiB0aGUgYnVja2V0IGlzbid0IGVtcHR5LCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvL2luY3JlYXNpbmcgdGhlIHRvdGFsIG51bWJlciBvZiBrZXlzXHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtlbGVtZW50XS5rZXlOYW1lICE9IG51bGwpIHRvdGFsS2V5cysrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2UgZ2V0IHRoZSBuZXh0IG5vZGUgYW5kIHdoaWxlIGl0IGlzbid0IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvL3dlIGluY3JlYXNlIHRoZSB0b3RhbCBudW1iZXIgb2Yga2V5cyBhbmQgZ2V0IHRoZSBuZXh0IG5vZGVzIG5leHQgbm9kZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbGlzdFtlbGVtZW50XS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxLZXlzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsS2V5cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbigpIHsgLy9yZW1vdmVzIGFsbCBlbnRyaWVzIGluIHRoZSBoYXNoIG1hcC5cclxuICAgICAgICAgICAgdGhpcy50YWJsZSA9IHt9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5czogZnVuY3Rpb24oKSB7IC8vcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUga2V5cyBpbnNpZGUgdGhlIGhhc2ggbWFwLlxyXG4gICAgICAgICAgICAvL3NpbWlsYXIgdG8gbGVuZ3RoIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy50YWJsZTtcclxuICAgICAgICAgICAgbGV0IGtleXNBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgaW4gbGlzdCkge1xyXG4gICAgICAgICAgICAgICAga2V5c0Fyci5wdXNoKGxpc3RbZWxlbWVudF0ua2V5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbGlzdFtlbGVtZW50XS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5c0Fyci5wdXNoKG5leHROb2RlLmtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBrZXlzQXJyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVzOiBmdW5jdGlvbigpey8vcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgdmFsdWVzLlxyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMudGFibGU7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXNBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgaW4gbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzQXJyLnB1c2gobGlzdFtlbGVtZW50XS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbGlzdFtlbGVtZW50XS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzQXJyLnB1c2gobmV4dE5vZGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNBcnI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnRyaWVzOiBmdW5jdGlvbigpey8vcmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGVhY2gga2V5LCB2YWx1ZSBwYWlyXHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy50YWJsZTtcclxuICAgICAgICAgICAgbGV0IGVudHJpZXNBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgaW4gbGlzdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9yIGV2ZXJ5IGJ1Y2tldCBjcmVhdGVzIGEgcGFpciBhcnJheVxyXG4gICAgICAgICAgICAgICAgbGV0IHBhaXJBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9wdXNoZXMgdGhlIGhlYWRzIGtleU5hbWUgYW5kIHZhbHVlIGludG8gdGhhdCBhcnJheSxcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgYSBwYWlyIHdoaWNoIGlzIGFkZGVkIHRvIHRoZSBtYWluIGFyclxyXG4gICAgICAgICAgICAgICAgcGFpckFyci5wdXNoKGxpc3RbZWxlbWVudF0ua2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBwYWlyQXJyLnB1c2gobGlzdFtlbGVtZW50XS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzQXJyLnB1c2gocGFpckFycik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbGlzdFtlbGVtZW50XS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93ZSByZXNldCB0aGUgcGFpciBhcnJheSwgc2luY2Ugd2UgYWxyZWFkeSBwdXNoZWQgb3VyIGxhc3QgcGFpciB0byB0aGUgbWFpbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHBhaXJBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBwYWlyQXJyLnB1c2gobmV4dE5vZGUua2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpckFyci5wdXNoKG5leHROb2RlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzQXJyLnB1c2gocGFpckFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNBcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbmFtZUxpc3QgPSBoYXNoTWFwKCk7XHJcbm5hbWVMaXN0LnNldCgnQ2FybG9zJywgMSlcclxubmFtZUxpc3Quc2V0KCdNaXJvJywgMilcclxubmFtZUxpc3Quc2V0KCdNaWxvcycsIDMpXHJcbm5hbWVMaXN0LnNldCgnQ2FybGEnLCA0KVxyXG5uYW1lTGlzdC5zZXQoJ2xhQ2FyYWFiZGUnLCA5KVxyXG5uYW1lTGlzdC5zZXQoJ1VnYUJ1Z2EnLCA1KVxyXG5uYW1lTGlzdC5zZXQoJ2xvc21pJywgMjkpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnRhYmxlKVxyXG4gY29uc29sZS5sb2cobmFtZUxpc3QubGVuZ3RoKCkpXHJcbiBjb25zb2xlLmxvZyhuYW1lTGlzdC5rZXlzKCkpXHJcbiBjb25zb2xlLmxvZyhuYW1lTGlzdC52YWx1ZXMoKSlcclxuIGNvbnNvbGUubG9nKG5hbWVMaXN0LmVudHJpZXMoKSlcclxuIG5hbWVMaXN0LnNldCgnUGFza2FzJywgMjkpXHJcbiBjb25zb2xlLmxvZyhuYW1lTGlzdC50YWJsZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
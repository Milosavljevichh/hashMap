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
        //takes a key and produces a hash code with it
        hash: function(key) {
            let hashCode = 0;
               
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
              hashCode = primeNumber * hashCode + key.charCodeAt(i);
              hashCode %= 16;
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
            } else this.table[hashedKey] = element;
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
        length: function(){
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIHRoaXMgcHJvamVjdCwgd2Ugb25seSBoYW5kbGUga2V5cyBvZiB0eXBlIHN0cmluZ1xyXG5mdW5jdGlvbiBOb2RlKGtleSwgdmFsdWUsIG5leHROb2RlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleU5hbWU6IGtleSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgbmV4dE5vZGU6IG5leHROb2RlXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYXNoTWFwKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJsZToge30sXHJcbiAgICAgICAgLy90YWtlcyBhIGtleSBhbmQgcHJvZHVjZXMgYSBoYXNoIGNvZGUgd2l0aCBpdFxyXG4gICAgICAgIGhhc2g6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcHJpbWVOdW1iZXIgPSAzMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICBoYXNoQ29kZSAlPSAxNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hDb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9JZiBhIGtleSBhbHJlYWR5IGV4aXN0cywgdGhlbiB0aGUgb2xkIHZhbHVlIGlzIG92ZXJ3cml0dGVuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihrZXksdmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vd2Ugc2hvdWxkIGdldCB0aGUgaGFzaGVkS2V5IGZyb20gaGFzaCBmdW5jdGlvblxcXHJcbiAgICAgICAgICAgIC8vaGFzaEtleSByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgdGFibGUsIGluIHdoaWNoIHRoZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIC8vZWxlbWVudCB3aWxsIGdvXHJcbiAgICAgICAgICAgIGxldCBoYXNoZWRLZXkgPSB0aGlzLmhhc2goa2V5KTtcclxuXHJcbiAgICAgICAgICAgIC8vd2UgY3JlYXRlIG91ciBlbGVtZW50LCBnaXZpbmcgaXQgYSBrZXksIGEgdmFsdWUgYW5kIHRoZSBuZXh0IG5vZGVcclxuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciB3aGljaCB3aWxsIHJlc29sdmUgY29sbGlzaW9uIGlmIGNvbGxpc2lvbiBoYXBwZW5zXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gTm9kZShrZXksIHZhbHVlLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlcmVzIGFuZCBlbGVtZW50IGF0IHRoaXMgaW5kZXgsIGNoZWNrIGlmIHRoZSBrZXlzIG1hdGNoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlW2hhc2hlZEtleV0pIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGV4aXN0aW5nIGtleSBkb2Vzbid0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgb25lLCBcclxuICAgICAgICAgICAgICAgIC8vbGluayB0aGUgY3VycmVudCBlbGVtZW50IHRvIHRoZSBleGlzdGluZyBlbGVtZW50cyBuZXh0Tm9kZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVbaGFzaGVkS2V5XS5rZXlOYW1lICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBOb2RlLm5leHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlID0gdGVtcE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlLm5leHROb2RlID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGV4aXN0aW5nIGtleSBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgb25lLFxyXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIHRoZSBleGlzdGluZyB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy50YWJsZVtoYXNoZWRLZXldLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGFuIGVsZW1lbnQgYXQgdGhpcyBpbmRleCxjcmVhdGUgaXRcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIC8vdGFrZXMgb25lIGFyZ3VtZW50IGFzIGEga2V5IGFuZCByZXR1cm5zIHRoZSB2YWx1ZSB0aGF0XHJcbiAgICAgICAgICAgIC8vaXMgYXNzaWduZWQgdG8gdGhpcyBrZXkuIElmIGEga2V5IGlzIG5vdCBmb3VuZCwgcmV0dXJuIG51bGwuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5rZXlOYW1lID09PSBrZXkpIHJldHVybiBjdXJyZW50RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgLy90YWtlcyBhIGtleSBhcyBhbiBhcmd1bWVudCBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBrZXkgaXMgaW4gdGhlIGhhc2ggbWFwLlxyXG5cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQua2V5TmFtZSA9PT0ga2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAvLyB0YWtlcyBhIGtleSBhcyBhbiBhcmd1bWVudC4gSWYgdGhlIGdpdmVuIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZFxyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVudHJ5IHdpdGggdGhhdCBrZXkgYW5kIHJldHVybiB0cnVlLiBJZiB0aGUga2V5IGlzbuKAmXQgaW4gdGhlIGhhc2ggbWFwLCBpdCBzaG91bGQgcmV0dXJuIGZhbHNlLlxyXG5cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgIGxldCBuZXh0Tm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB0aGUga2V5IHRvIGJlIHJlbW92ZWQgaXMgdGhlIGZpcnN0IGluIHRoZSBsaXN0IChpZiBpdHMgYSBoZWFkKVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQua2V5TmFtZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGlzIGEgaGVhZCwgaXQgZ2V0cyB0aGUgbmV4dCBub2RlIGFuZCBzZXRzIHRoZSBoZWFkIHRvIHRoYXQgbm9kZVxyXG4gICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IG5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGtleSB0byBiZSByZW1vdmVkIGlzIG5vdCB0aGUgZmlyc3QgaW4gdGhlIGxpc3QsXHJcbiAgICAgICAgICAgIC8vaXQgZmluZHMgaXQgYW5kIHJlcGxhY2VzIGl0IHdpdGggaXRzIG5leHROb2RlXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQubmV4dE5vZGUua2V5TmFtZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZSA9IG5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dE5vZGU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0cyBub3QgZm91bmQsIHJldHVybnMgZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMudGFibGU7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEtleXMgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy93ZSBsb29wIHRocm91Z2ggZXZlcnkgYnVja2V0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgaW4gbGlzdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2UncmUgY2hlY2tpbmcgaWYgdGhlIGJ1Y2tldCBpc24ndCBlbXB0eSwgdGhlblxyXG4gICAgICAgICAgICAgICAgLy9pbmNyZWFzaW5nIHRoZSB0b3RhbCBudW1iZXIgb2Yga2V5c1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbZWxlbWVudF0ua2V5TmFtZSAhPSBudWxsKSB0b3RhbEtleXMrKztcclxuXHJcbiAgICAgICAgICAgICAgICAvL3dlIGdldCB0aGUgbmV4dCBub2RlIGFuZCB3aGlsZSBpdCBpc24ndCBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy93ZSBpbmNyZWFzZSB0aGUgdG90YWwgbnVtYmVyIG9mIGtleXMgYW5kIGdldCB0aGUgbmV4dCBub2RlcyBuZXh0IG5vZGVcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0Tm9kZSA9IGxpc3RbZWxlbWVudF0ubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV4dE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsS2V5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiB0b3RhbEtleXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbmFtZUxpc3QgPSBoYXNoTWFwKCk7XHJcbm5hbWVMaXN0LnNldCgnQ2FybG9zJywgMSlcclxubmFtZUxpc3Quc2V0KCdNaXJvJywgMilcclxubmFtZUxpc3Quc2V0KCdNaWxvcycsIDMpXHJcbm5hbWVMaXN0LnNldCgnQ2FybGEnLCA0KVxyXG5uYW1lTGlzdC5zZXQoJ2xhQ2FyYWFiZGUnLCA5KVxyXG5uYW1lTGlzdC5zZXQoJ1VnYUJ1Z2EnLCA1KVxyXG5uYW1lTGlzdC5zZXQoJ2xvc21pJywgMjkpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnRhYmxlKVxyXG4gY29uc29sZS5sb2cobmFtZUxpc3QubGVuZ3RoKCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
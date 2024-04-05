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
console.log(nameList.get('losmi'))
console.log(nameList.get('UgaBuga'))
console.log(nameList.get('MalaMaca'))
// console.log(nameList.has('losmi'))
// console.log(nameList.has('Miro'))
console.log(nameList.remove('Miro'))
console.log(nameList.table)
console.log(nameList.remove('losmi'))
console.log(nameList.table)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9mb3IgdGhpcyBwcm9qZWN0LCB3ZSBvbmx5IGhhbmRsZSBrZXlzIG9mIHR5cGUgc3RyaW5nXHJcbmZ1bmN0aW9uIE5vZGUoa2V5LCB2YWx1ZSwgbmV4dE5vZGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5TmFtZToga2V5LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBuZXh0Tm9kZTogbmV4dE5vZGVcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhc2hNYXAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhYmxlOiB7fSxcclxuICAgICAgICAvL3Rha2VzIGEga2V5IGFuZCBwcm9kdWNlcyBhIGhhc2ggY29kZSB3aXRoIGl0XHJcbiAgICAgICAgaGFzaDogZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwcmltZU51bWJlciA9IDMxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW1iZXIgKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgIGhhc2hDb2RlICU9IDE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gaGFzaENvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL0lmIGEga2V5IGFscmVhZHkgZXhpc3RzLCB0aGVuIHRoZSBvbGQgdmFsdWUgaXMgb3ZlcndyaXR0ZW5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGtleSx2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgLy93ZSBzaG91bGQgZ2V0IHRoZSBoYXNoZWRLZXkgZnJvbSBoYXNoIGZ1bmN0aW9uXFxcclxuICAgICAgICAgICAgLy9oYXNoS2V5IHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIHRoZSB0YWJsZSwgaW4gd2hpY2ggdGhlIGNyZWF0ZWRcclxuICAgICAgICAgICAgLy9lbGVtZW50IHdpbGwgZ29cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG5cclxuICAgICAgICAgICAgLy93ZSBjcmVhdGUgb3VyIGVsZW1lbnQsIGdpdmluZyBpdCBhIGtleSwgYSB2YWx1ZSBhbmQgdGhlIG5leHQgbm9kZVxyXG4gICAgICAgICAgICAvL3BsYWNlaG9sZGVyIHdoaWNoIHdpbGwgcmVzb2x2ZSBjb2xsaXNpb24gaWYgY29sbGlzaW9uIGhhcHBlbnNcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBOb2RlKGtleSwgdmFsdWUsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB0aGVyZXMgYW5kIGVsZW1lbnQgYXQgdGhpcyBpbmRleCwgY2hlY2sgaWYgdGhlIGtleXMgbWF0Y2hcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVbaGFzaGVkS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgZXhpc3Rpbmcga2V5IGRvZXNuJ3QgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBvbmUsIFxyXG4gICAgICAgICAgICAgICAgLy9saW5rIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gdGhlIGV4aXN0aW5nIGVsZW1lbnRzIG5leHROb2RlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZVtoYXNoZWRLZXldLmtleU5hbWUgIT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGVtcE5vZGUubmV4dE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5vZGUgPSB0ZW1wTm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcE5vZGUubmV4dE5vZGUgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZWxzZSBpZiB0aGUgZXhpc3Rpbmcga2V5IG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCBvbmUsXHJcbiAgICAgICAgICAgICAgICAvL3JlcGxhY2UgdGhlIGV4aXN0aW5nIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnRhYmxlW2hhc2hlZEtleV0udmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgaXNuJ3QgYW4gZWxlbWVudCBhdCB0aGlzIGluZGV4LGNyZWF0ZSBpdFxyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy50YWJsZVtoYXNoZWRLZXldID0gZWxlbWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgLy90YWtlcyBvbmUgYXJndW1lbnQgYXMgYSBrZXkgYW5kIHJldHVybnMgdGhlIHZhbHVlIHRoYXRcclxuICAgICAgICAgICAgLy9pcyBhc3NpZ25lZCB0byB0aGlzIGtleS4gSWYgYSBrZXkgaXMgbm90IGZvdW5kLCByZXR1cm4gbnVsbC5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoYXNoZWRLZXkgPSB0aGlzLmhhc2goa2V5KTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gdGhpcy50YWJsZVtoYXNoZWRLZXldO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmtleU5hbWUgPT09IGtleSkgcmV0dXJuIGN1cnJlbnRFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICAvL3Rha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2UgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhlIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAuXHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5rZXlOYW1lID09PSBrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIC8vIHRha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50LiBJZiB0aGUgZ2l2ZW4ga2V5IGlzIGluIHRoZSBoYXNoIG1hcCwgaXQgc2hvdWxkXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50cnkgd2l0aCB0aGF0IGtleSBhbmQgcmV0dXJuIHRydWUuIElmIHRoZSBrZXkgaXNu4oCZdCBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCByZXR1cm4gZmFsc2UuXHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgbGV0IG5leHROb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2tzIGlmIHRoZSBrZXkgdG8gYmUgcmVtb3ZlZCBpcyB0aGUgZmlyc3QgaW4gdGhlIGxpc3QgKGlmIGl0cyBhIGhlYWQpXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5rZXlOYW1lID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgaXQgaXMgYSBoZWFkLCBpdCBnZXRzIHRoZSBuZXh0IG5vZGUgYW5kIHNldHMgdGhlIGhlYWQgdG8gdGhhdCBub2RlXHJcbiAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IGN1cnJlbnRFbGVtZW50Lm5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVtoYXNoZWRLZXldID0gbmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vZWxzZSBpZiB0aGUga2V5IHRvIGJlIHJlbW92ZWQgaXMgbm90IHRoZSBmaXJzdCBpbiB0aGUgbGlzdCxcclxuICAgICAgICAgICAgLy9pdCBmaW5kcyBpdCBhbmQgcmVwbGFjZXMgaXQgd2l0aCBpdHMgbmV4dE5vZGVcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5uZXh0Tm9kZS5rZXlOYW1lID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IGN1cnJlbnRFbGVtZW50Lm5leHROb2RlLm5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50Lm5leHROb2RlID0gbmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgaXRzIG5vdCBmb3VuZCwgcmV0dXJucyBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbmFtZUxpc3QgPSBoYXNoTWFwKCk7XHJcbm5hbWVMaXN0LnNldCgnQ2FybG9zJywgMSlcclxubmFtZUxpc3Quc2V0KCdNaXJvJywgMilcclxubmFtZUxpc3Quc2V0KCdNaWxvcycsIDMpXHJcbm5hbWVMaXN0LnNldCgnQ2FybGEnLCA0KVxyXG5uYW1lTGlzdC5zZXQoJ2xhQ2FyYWFiZGUnLCA5KVxyXG5uYW1lTGlzdC5zZXQoJ1VnYUJ1Z2EnLCA1KVxyXG5uYW1lTGlzdC5zZXQoJ2xvc21pJywgMjkpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnRhYmxlKVxyXG5jb25zb2xlLmxvZyhuYW1lTGlzdC5nZXQoJ2xvc21pJykpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LmdldCgnVWdhQnVnYScpKVxyXG5jb25zb2xlLmxvZyhuYW1lTGlzdC5nZXQoJ01hbGFNYWNhJykpXHJcbi8vIGNvbnNvbGUubG9nKG5hbWVMaXN0LmhhcygnbG9zbWknKSlcclxuLy8gY29uc29sZS5sb2cobmFtZUxpc3QuaGFzKCdNaXJvJykpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnJlbW92ZSgnTWlybycpKVxyXG5jb25zb2xlLmxvZyhuYW1lTGlzdC50YWJsZSlcclxuY29uc29sZS5sb2cobmFtZUxpc3QucmVtb3ZlKCdsb3NtaScpKVxyXG5jb25zb2xlLmxvZyhuYW1lTGlzdC50YWJsZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIHRoaXMgcHJvamVjdCwgd2Ugb25seSBoYW5kbGUga2V5cyBvZiB0eXBlIHN0cmluZ1xyXG5mdW5jdGlvbiBOb2RlKGtleSwgdmFsdWUsIG5leHROb2RlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleU5hbWU6IGtleSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgbmV4dE5vZGU6IG5leHROb2RlXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYXNoTWFwKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJsZToge30sXHJcbiAgICAgICAgLy90YWtlcyBhIGtleSBhbmQgcHJvZHVjZXMgYSBoYXNoIGNvZGUgd2l0aCBpdFxyXG4gICAgICAgIGhhc2g6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcHJpbWVOdW1iZXIgPSAzMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICBoYXNoQ29kZSAlPSAxNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hDb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9JZiBhIGtleSBhbHJlYWR5IGV4aXN0cywgdGhlbiB0aGUgb2xkIHZhbHVlIGlzIG92ZXJ3cml0dGVuXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihrZXksdmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vd2Ugc2hvdWxkIGdldCB0aGUgaGFzaGVkS2V5IGZyb20gaGFzaCBmdW5jdGlvblxcXHJcbiAgICAgICAgICAgIC8vaGFzaEtleSByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgdGFibGUsIGluIHdoaWNoIHRoZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIC8vZWxlbWVudCB3aWxsIGdvXHJcbiAgICAgICAgICAgIGxldCBoYXNoZWRLZXkgPSB0aGlzLmhhc2goa2V5KTtcclxuXHJcbiAgICAgICAgICAgIC8vd2UgY3JlYXRlIG91ciBlbGVtZW50LCBnaXZpbmcgaXQgYSBrZXksIGEgdmFsdWUgYW5kIHRoZSBuZXh0IG5vZGVcclxuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciB3aGljaCB3aWxsIHJlc29sdmUgY29sbGlzaW9uIGlmIGNvbGxpc2lvbiBoYXBwZW5zXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gTm9kZShrZXksIHZhbHVlLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlcmVzIGFuZCBlbGVtZW50IGF0IHRoaXMgaW5kZXgsIGNoZWNrIGlmIHRoZSBrZXlzIG1hdGNoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlW2hhc2hlZEtleV0pIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGV4aXN0aW5nIGtleSBkb2Vzbid0IG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgb25lLCBcclxuICAgICAgICAgICAgICAgIC8vbGluayB0aGUgY3VycmVudCBlbGVtZW50IHRvIHRoZSBleGlzdGluZyBlbGVtZW50cyBuZXh0Tm9kZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVbaGFzaGVkS2V5XS5rZXlOYW1lICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcE5vZGUgPSB0aGlzLnRhYmxlW2hhc2hlZEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBOb2RlLm5leHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlID0gdGVtcE5vZGUubmV4dE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlLm5leHROb2RlID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGV4aXN0aW5nIGtleSBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgb25lLFxyXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIHRoZSBleGlzdGluZyB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy50YWJsZVtoYXNoZWRLZXldLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGFuIGVsZW1lbnQgYXQgdGhpcyBpbmRleCxjcmVhdGUgaXRcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIC8vdGFrZXMgb25lIGFyZ3VtZW50IGFzIGEga2V5IGFuZCByZXR1cm5zIHRoZSB2YWx1ZSB0aGF0XHJcbiAgICAgICAgICAgIC8vaXMgYXNzaWduZWQgdG8gdGhpcyBrZXkuIElmIGEga2V5IGlzIG5vdCBmb3VuZCwgcmV0dXJuIG51bGwuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5rZXlOYW1lID09PSBrZXkpIHJldHVybiBjdXJyZW50RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBuYW1lTGlzdCA9IGhhc2hNYXAoKTtcclxubmFtZUxpc3Quc2V0KCdDYXJsb3MnLCAxKVxyXG5uYW1lTGlzdC5zZXQoJ01pcm8nLCAyKVxyXG5uYW1lTGlzdC5zZXQoJ01pbG9zJywgMylcclxubmFtZUxpc3Quc2V0KCdDYXJsYScsIDQpXHJcbm5hbWVMaXN0LnNldCgnbGFDYXJhYWJkZScsIDkpXHJcbm5hbWVMaXN0LnNldCgnVWdhQnVnYScsIDUpXHJcbm5hbWVMaXN0LnNldCgnbG9zbWknLCAyOSlcclxuY29uc29sZS5sb2cobmFtZUxpc3QudGFibGUpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LmdldCgnbG9zbWknKSlcclxuY29uc29sZS5sb2cobmFtZUxpc3QuZ2V0KCdVZ2FCdWdhJykpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LmdldCgnTWFsYU1hY2EnKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZvciB0aGlzIHByb2plY3QsIHdlIG9ubHkgaGFuZGxlIGtleXMgb2YgdHlwZSBzdHJpbmdcclxuZnVuY3Rpb24gTm9kZShrZXksIHZhbHVlLCBuZXh0Tm9kZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXlOYW1lOiBrZXksXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIG5leHROb2RlOiBuZXh0Tm9kZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFzaE1hcCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFibGU6IHt9LFxyXG4gICAgICAgIC8vdGFrZXMgYSBrZXkgYW5kIHByb2R1Y2VzIGEgaGFzaCBjb2RlIHdpdGggaXRcclxuICAgICAgICBoYXNoOiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IGhhc2hDb2RlID0gMDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgICAgaGFzaENvZGUgJT0gMTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBoYXNoQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vSWYgYSBrZXkgYWxyZWFkeSBleGlzdHMsIHRoZW4gdGhlIG9sZCB2YWx1ZSBpcyBvdmVyd3JpdHRlblxyXG4gICAgICAgIHNldDogZnVuY3Rpb24oa2V5LHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAvL3dlIHNob3VsZCBnZXQgdGhlIGhhc2hlZEtleSBmcm9tIGhhc2ggZnVuY3Rpb25cXFxyXG4gICAgICAgICAgICAvL2hhc2hLZXkgcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgdGhlIHRhYmxlLCBpbiB3aGljaCB0aGUgY3JlYXRlZFxyXG4gICAgICAgICAgICAvL2VsZW1lbnQgd2lsbCBnb1xyXG4gICAgICAgICAgICBsZXQgaGFzaGVkS2V5ID0gdGhpcy5oYXNoKGtleSk7XHJcblxyXG4gICAgICAgICAgICAvL3dlIGNyZWF0ZSBvdXIgZWxlbWVudCwgZ2l2aW5nIGl0IGEga2V5LCBhIHZhbHVlIGFuZCB0aGUgbmV4dCBub2RlXHJcbiAgICAgICAgICAgIC8vcGxhY2Vob2xkZXIgd2hpY2ggd2lsbCByZXNvbHZlIGNvbGxpc2lvbiBpZiBjb2xsaXNpb24gaGFwcGVuc1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IE5vZGUoa2V5LCB2YWx1ZSwgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlcyBhbmQgZWxlbWVudCBhdCB0aGlzIGluZGV4LCBjaGVjayBpZiB0aGUga2V5cyBtYXRjaFxyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZVtoYXNoZWRLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBleGlzdGluZyBrZXkgZG9lc24ndCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IG9uZSwgXHJcbiAgICAgICAgICAgICAgICAvL2xpbmsgdGhlIGN1cnJlbnQgZWxlbWVudCB0byB0aGUgZXhpc3RpbmcgZWxlbWVudHMgbmV4dE5vZGVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlW2hhc2hlZEtleV0ua2V5TmFtZSAhPT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBOb2RlID0gdGhpcy50YWJsZVtoYXNoZWRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wTm9kZS5uZXh0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTm9kZSA9IHRlbXBOb2RlLm5leHROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wTm9kZS5uZXh0Tm9kZSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2Vsc2UgaWYgdGhlIGV4aXN0aW5nIGtleSBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgb25lLFxyXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIHRoZSBleGlzdGluZyB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy50YWJsZVtoYXNoZWRLZXldLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGFuIGVsZW1lbnQgYXQgdGhpcyBpbmRleCxjcmVhdGUgaXRcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbmFtZUxpc3QgPSBoYXNoTWFwKCk7XHJcbm5hbWVMaXN0LnNldCgnQ2FybG9zJywgMSlcclxubmFtZUxpc3Quc2V0KCdNaXJvJywgMilcclxubmFtZUxpc3Quc2V0KCdNaWxvcycsIDMpXHJcbm5hbWVMaXN0LnNldCgnQ2FybGEnLCA0KVxyXG5uYW1lTGlzdC5zZXQoJ2xhQ2FyYWFiZGUnLCA5KVxyXG5uYW1lTGlzdC5zZXQoJ1VnYUJ1Z2EnLCA1KVxyXG5uYW1lTGlzdC5zZXQoJ2xvc21pJywgMjkpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnRhYmxlKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
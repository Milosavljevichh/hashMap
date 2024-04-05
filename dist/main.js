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
            //we should get the key from hash function
            let hashedKey = this.hash(key);
            let element = Node(key, value, null);
            
            if (this.table[hashedKey]) {
                if (this.table[hashedKey].keyName !== key) {
                    let tempNode = this.table[hashedKey];
                    while (tempNode.nextNode !== null) {
                        tempNode = tempNode.nextNode;
                    }
                    tempNode.nextNode = element;

                } else this.table[hashedKey].value = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9mb3IgdGhpcyBwcm9qZWN0LCB3ZSBvbmx5IGhhbmRsZSBrZXlzIG9mIHR5cGUgc3RyaW5nXHJcbmZ1bmN0aW9uIE5vZGUoa2V5LCB2YWx1ZSwgbmV4dE5vZGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5TmFtZToga2V5LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBuZXh0Tm9kZTogbmV4dE5vZGVcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhc2hNYXAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhYmxlOiB7fSxcclxuICAgICAgICAvL3Rha2VzIGEga2V5IGFuZCBwcm9kdWNlcyBhIGhhc2ggY29kZSB3aXRoIGl0XHJcbiAgICAgICAgaGFzaDogZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwcmltZU51bWJlciA9IDMxO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW1iZXIgKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgIGhhc2hDb2RlICU9IDE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gaGFzaENvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL0lmIGEga2V5IGFscmVhZHkgZXhpc3RzLCB0aGVuIHRoZSBvbGQgdmFsdWUgaXMgb3ZlcndyaXR0ZW5cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICAvL3dlIHNob3VsZCBnZXQgdGhlIGtleSBmcm9tIGhhc2ggZnVuY3Rpb25cclxuICAgICAgICAgICAgbGV0IGhhc2hlZEtleSA9IHRoaXMuaGFzaChrZXkpO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IE5vZGUoa2V5LCB2YWx1ZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZVtoYXNoZWRLZXldKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZVtoYXNoZWRLZXldLmtleU5hbWUgIT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wTm9kZSA9IHRoaXMudGFibGVbaGFzaGVkS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGVtcE5vZGUubmV4dE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5vZGUgPSB0ZW1wTm9kZS5uZXh0Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcE5vZGUubmV4dE5vZGUgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnRhYmxlW2hhc2hlZEtleV0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMudGFibGVbaGFzaGVkS2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbmFtZUxpc3QgPSBoYXNoTWFwKCk7XHJcbm5hbWVMaXN0LnNldCgnQ2FybG9zJywgMSlcclxubmFtZUxpc3Quc2V0KCdNaXJvJywgMilcclxubmFtZUxpc3Quc2V0KCdNaWxvcycsIDMpXHJcbm5hbWVMaXN0LnNldCgnQ2FybGEnLCA0KVxyXG5uYW1lTGlzdC5zZXQoJ2xhQ2FyYWFiZGUnLCA5KVxyXG5uYW1lTGlzdC5zZXQoJ1VnYUJ1Z2EnLCA1KVxyXG5uYW1lTGlzdC5zZXQoJ2xvc21pJywgMjkpXHJcbmNvbnNvbGUubG9nKG5hbWVMaXN0LnRhYmxlKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
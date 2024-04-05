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
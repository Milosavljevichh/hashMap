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
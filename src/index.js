

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
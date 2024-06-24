- Limitation
JavaScript’s dynamic nature of array allows us to insert and retrieve indexes that are outside our array size range. This defeats the purpose we are trying to demonstrate, so we need to put some self restriction to work around this.

Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:

if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}

- Workflow:
1. create HashMap factory which should contain the following methods:
    +a. hash(key) - takes a key and produces a hash code with it.
    +b. set(key, value) - takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value.
    +c. get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

    +d. has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

    +e. remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

    +f. length() returns the number of stored keys in the hash map.

    +g. clear() removes all entries in the hash map.

    +h. keys() returns an array containing all the keys inside the hash map.

    +i. values() returns an array containing all the values.

    +j .get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

+has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

+remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

+length() returns the number of stored keys in the hash map.

+clear() removes all entries in the hash map.

+keys() returns an array containing all the keys inside the hash map.

+values() returns an array containing all the values.

+entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
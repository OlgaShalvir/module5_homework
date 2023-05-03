// 8
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// variant1
for (let entry of myMap) { 
  console.log(entry); 
}
// variant2
myMap.forEach((value, key, map) => {
  console.log(`Ключ -${key}, значение - ${value}`);
});
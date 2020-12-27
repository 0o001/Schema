# Schema
Basic schema check

```js
Schema({ key1: String})
//output: [Function]

Schema({ key1: String})({key1: "Merhaba"})
//output: { key1: 'Merhaba' }

Schema({ key1: String})({key1: 21})
/*
output: 
Uncaught TypeError: "Schema type not equal" is not a constructor
    at checkValidateValues (repl:48:27)
    at repl:4:5
*/

Schema({ key1: String})({key: 21})
/*
output:
Uncaught TypeError: "Schema property not found" is not a constructor
    at checkValidateProperties (repl:20:27)
    at repl:3:5
*/
```

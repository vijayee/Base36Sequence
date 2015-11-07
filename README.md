#Base36Sequence
the module produces integer sequences in base 36
##Quick Examples
```js
var Sequence= require('base36sequence');

var example1= new Sequence(0);
var example2= new Sequence("rr");
// 0
console.log(example1.next());
// 1
console.log(example1.current());
//rr
//999
console.log(example2.current());
// true
console.log(example2.isBase36("rr"));
//rr
example2.encode(999);
//999
example2.decode("rr");
```
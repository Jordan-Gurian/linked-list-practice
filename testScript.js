const Node = require( './Node');
const LinkedList = require( './LinkedList');

const sampleNode = new Node('B');
const sampleList = new LinkedList(sampleNode);
sampleList.append('C');
sampleList.prepend('A')
// console.log(sampleNode);
// console.log(sampleList);
// console.log(sampleList.size())
// console.log(sampleList.getHead())
// console.log(sampleList.getTail())
// console.log(sampleList.at(9))
// sampleList.pop();
// console.log(sampleList);
// console.log(sampleList.contains('C'));
// console.log(sampleList.contains('F'));
// console.log(sampleList.find('C'));
// console.log(sampleList.find('F'));
sampleList.insertAt('D', 3);
// console.log(sampleList.toString());

sampleList.removeAt(0);
console.log(sampleList.toString());




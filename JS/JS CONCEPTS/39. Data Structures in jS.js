// Data Structures
// In computer science, a data structure is a particular way of organizing data in a computer so that it can be used efficiently.

// Hash Table
// A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}

HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key);
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  if(!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }
  this.values[hash][key] = value;
};

HashTable.prototype.remove = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
};

HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size;
};

HashTable.prototype.search = function(key) {
  var hash = this.calculateHash(key);
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
};

HashTable.prototype.length = function() {
  return this.numberOfValues;
};

HashTable.prototype.print = function() {
  var string = '';
  for(var value in this.values) {
    for(var key in this.values[value]) {
      string += this.values[value][key] + ' ';
    }
  }
  console.log(string.trim());
};

var hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log('length gives 5:', hashTable.length()); // => 5
console.log('search second gives 2:', hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); // => 2 3 5
console.log('length gives 3:', hashTable.length()); // => 3
// Set
// A Set is an abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite Set.

function Set() {
  this.values = [];
  this.numberOfValues = 0;
}

Set.prototype.add = function(value) {
  if(!~this.values.indexOf(value)) {
    this.values.push(value);
    this.numberOfValues++;
  }
};

Set.prototype.remove = function(value) {
  var index = this.values.indexOf(value);
  if(~index) {
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};

Set.prototype.contains = function(value) {
  return this.values.indexOf(value) !== -1;
};

Set.prototype.union = function(set) {
  var newSet = new Set();
  set.values.forEach(function(value) {
    newSet.add(value);
  });
  this.values.forEach(function(value) {
    newSet.add(value);
  });
  return newSet;
};

Set.prototype.intersect = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if(set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};

Set.prototype.difference = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if(!set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};

Set.prototype.isSubset = function(set) {
  return set.values.every(function(value) {
    return this.contains(value);
  }, this);
};

Set.prototype.length = function() {
  return this.numberOfValues;
};

Set.prototype.print = function() {
  console.log(this.values.join(' '));
};

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
// Singly Linked List
// A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence.

function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};

SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head) {
        this.head = this.head.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      previous = current;
    }
    current = current.next;
  }
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current) {
    if(current.data === toNodeData) {
      var node = new Node(data);
      if(current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }
      this.numberOfValues++;
    }
    current = current.next;
  }
};

SinglyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.next;
  }
};

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

SinglyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
// Doubly Linked List
// A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.

function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

DoublyLinkedList.prototype.add = function (data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};

DoublyLinkedList.prototype.remove = function(data) {
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if(current === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      } else if(current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
      this.numberOfValues--;
    }
    current = current.next;
  }
};

DoublyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current) {
    if(current.data === toNodeData) {
      var node = new Node(data);
      if(current === this.tail) {
        this.add(data);
      } else {
        current.next.previous = node;
        node.previous = current;
        node.next = current.next;
        current.next = node;
        this.numberOfValues++;
      }
    }
    current = current.next;
  }
};

DoublyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.next;
  }
};

DoublyLinkedList.prototype.traverseReverse = function(fn) {
  var current = this.tail;
  while(current) {
    if(fn) {
      fn(current);
    }
    current = current.previous;
  }
};

DoublyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

DoublyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', doublyLinkedList.length()); // => 4
Stack
// A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out).

function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  return this.stack.pop();
};

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

Stack.prototype.length = function() {
  return this.stack.length;
};

Stack.prototype.print = function() {
  console.log(this.stack.join(' '));
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
// Queue
// A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the Queue will be the first one to be removed.

function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function(value) {
  this.queue.push(value);
};

Queue.prototype.dequeue = function() {
  return this.queue.shift();
};

Queue.prototype.peek = function() {
  return this.queue[0];
};

Queue.prototype.length = function() {
  return this.queue.length;
};

Queue.prototype.print = function() {
  console.log(this.queue.join(' '));
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // => 1 2 3
console.log('length is 3:', queue.length()); // => 3
// Tree
// A Tree is a widely used data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node. A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the “children”), with the constraints that no reference is duplicated, and none points to the root node.

function Node(data) {
  this.data = data;
  this.children = [];
}

function Tree() {
  this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
  var node = new Node(data);
  var parent = toNodeData ? this.findBFS(toNodeData) : null;
  if(parent) {
    parent.children.push(node);
  } else {
    if(!this.root) {
      this.root = node;
    } else {
      return 'Root node is already assigned';
    }
  }
};

Tree.prototype.remove = function(data) {
  if(this.root.data === data) {
    this.root = null;
  }

  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    for(var i = 0; i < node.children.length; i++) {
      if(node.children[i].data === data) {
        node.children.splice(i, 1);
      } else {
        queue.push(node.children[i]);
      }
    }
  }
};

Tree.prototype.contains = function(data) {
  return this.findBFS(data) ? true : false;
};

Tree.prototype.findBFS = function(data) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(node.data === data) {
      return node;
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};

Tree.prototype._preOrder = function(node, fn) {
  if(node) {
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      this._preOrder(node.children[i], fn);
    }
  }
};

Tree.prototype._postOrder = function(node, fn) {
  if(node) {
    for(var i = 0; i < node.children.length; i++) {
      this._postOrder(node.children[i], fn);
    }
    if(fn) {
      fn(node);
    }
  }
};

Tree.prototype.traverseDFS = function(fn, method) {
  var current = this.root;
  if(method) {
    this['_' + method](current, fn);
  } else {
    this._preOrder(current, fn);
  }
};

Tree.prototype.traverseBFS = function(fn) {
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(fn) {
      fn(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
};

Tree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.slice(0, -2).trim());
};

Tree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  console.log(string.trim());
};

var tree = new Tree();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');
tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
console.log('tree contains dev1 is true:', tree.contains('dev1')); // => true
console.log('tree contains dev4 is false:', tree.contains('dev4')); // => false
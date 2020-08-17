function Node(data) {
  this.data = data;
  this.next = null;
}

function LL() {
  this._length = 0;
  this.head = null;
}
LL.prototype.add = function (val) {
  if (!val) {
    throw new Error("Pass a value!");
  }
  var node = new Node(val);
  // when no head
  if (!this.head) {
    this.head = node;
    this._length += 1;
    return node;
  }
  var current = this.head;
  while (current.next) {
    currrent = current.next;
  }
  current.next = node;
  this._length += 1;
  return node;
};

var sll = new LL();
sll.add(3);
sll.add(10);
sll.add(11);
console.log(sll);

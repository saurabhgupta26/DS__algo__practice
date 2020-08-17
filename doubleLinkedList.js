function Head(next) {
  this.next = next;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
function DLL() {
  this.head = new Head(null);
  this.toString = () => {
    let currentNode = this.head.next;
    if (!this.head.next) {
      return `[next] => null`;
    } else {
      checkType = (node, str) => (node === null ? "null" : str);
      let prev = checkType(currentNode.prev, "prev");
      let next = checkType(currentNode.next, "next");
      let displayList = `[next] => [${prev} | ${currentNode.value} | ${next}]`;
      while (currentNode.next) {
        currentNode = currentNode.next;
        prev = checkType(currentNode.prev, "prev");
        next = checkType(currentNode.next, "next");
        displayList = `${displayList}=> [${prev} | ${currentNode.value} | ${next}]`;
      }
      return displayList;
    }
  };
  this.push = (value) => {
    if (this.head.next) {
      this.head.next = new Node(value, null, null);
      return;
    }
    let currentNode = this.head.next;
    let lastNode = currentNode;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, null, lastNode);
  };
}

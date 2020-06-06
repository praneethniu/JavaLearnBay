 class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
 class LinkedList {
  createNewNode = (val) => {
    return new Node(val)
  }
  insertElement = (val) => {
    if (!this.head) {
      this.head = this.createNewNode(val)
      return
    }
    let x = this.head
    while (x.next !== null) x = x.next
    x.next = new Node(val)
  }

  search = (val) => {
    let x = this.head
    while (x && x.val !== val) x = x.next
    return x === null ? "not found" : "found"
  }

  insertElementAtHead = (val) => {
    let x = this.createNewNode(val)
    x.next = this.head
    this.head = x
  }

  deleteNode = (val) => {
    let curNode = this.head
    let prevNode = null

    while (curNode && curNode.val !== val) {
      prevNode = curNode
      curNode = curNode.next
    }
    if (curNode === null) {
      return
    }
    if (curNode === this.head) {
      this.head = curNode.next
      return
    }
    prevNode.next = curNode.next
    curNode.next = null
  }
}

let n = new LinkedList()
n.insertElement(1)
n.insertElement(2)
n.insertElementAtHead(4)
console.log(n.head)
n.deleteNode(6)
console.log(n.head)
console.log(n.search(6))

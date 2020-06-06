var assert = require("assert")

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  head = null
  tail = null
  size = 0
  createNode = (val) => new Node(val)
  push = (val) => {
    let currNode = this.createNode(val)
    if (!this.head) {
      this.head = currNode
      this.tail = currNode
    } else {
      this.tail.next = currNode
      this.tail = currNode
    }
    this.size++
  }

  pop = () => {
    let currNode = this.head
    if (!currNode) return
    this.head = currNode.next
    currNode.next = null
    this.size--
  }

  empty = () => (this.head = null)

  getSize = () => this.size

  front = () => this.head && this.head.val
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(16)
console.log(queue.head)
assert.equal(queue.getSize(), 3)
console.log("FRONT ", queue.front())
queue.pop()
queue.pop()
console.log(queue.head)
queue.empty()
console.log(queue.head)

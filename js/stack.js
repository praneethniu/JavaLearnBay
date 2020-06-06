class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  createNode = (val) => new Node(val)
  push = (val) => {
    if (!this.head) {
      this.head = this.createNode(val)
      this.size = 1
      return
    }
    let currNode = this.createNode(val)
    currNode.next = this.head
    this.head = currNode
    this.size++
  }

  pop = () => {
    let currNode = this.head
    if (!currNode) return

    if (!currNode.next) {
      this.head = null
      this.size--
      return
    }
    this.head = currNode.next
    currNode.next = null
    this.size--
  }

  empty = () => (this.head = null)

  getSize = () => this.size || 0

  top = () => {
    let currNode = this.head
    if (!currNode) return
    return currNode.val
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(16)
console.log(stack.head)
console.log("SIZE ", stack.getSize())
console.log("TOP ", stack.top())

stack.pop()
stack.pop()
console.log(stack.head)
stack.empty()
console.log(stack.head)

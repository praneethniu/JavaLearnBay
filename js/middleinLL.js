var LinkedList = require("./linkedList")

const middleInLL = (list) => {
  let slow = list.head
  let fast = list.head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow.val
}

const x = () => {
  let l = new LinkedList()
  l.insertElement(1)
  l.insertElement(2)
  l.insertElement(3)
  l.insertElement(4)
  l.insertElement(5)

  console.log(middleInLL(l))
  assert.equal(middleInLL(l), 3)
}

x()

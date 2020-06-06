public class LinkedList {
    class Node {
        private int value;
        private Node next;

        Node(int value) {
            this.value = value;
            this.next = null;
        }

        @Override
        public String toString() {
            return "Node{" +
                    "value=" + value +
                    ", next=" + next +
                    '}';
        }
    }

    private Node head;

    private Node createNewNode(int val) {
        return new Node(val);
    }

    private void insertElement(int val) {
        if (this.head == null) {
            this.head = this.createNewNode(val);
            return;
        }
        Node x = this.head;
        while (x.next != null) x = x.next;
        x.next = new Node(val);
    }

    private String search(int val) {
        Node x = this.head;
        while (x != null && x.value != val) x = x.next;
        return x == null ? "not found" : "found";
    }

    private void insertElementAtHead(int val) {
        Node x = this.createNewNode(val);
        x.next = this.head;
        this.head = x;
    }

    private void deleteNode(int val) {
        Node curNode = this.head;
        Node prevNode = null;

        while (curNode != null && curNode.value != val) {
            prevNode = curNode;
            curNode = curNode.next;
        }
        if (curNode == null) {
            return;
        }
        if (curNode == this.head) {
            this.head = curNode.next;
            return;
        }
        prevNode.next = curNode.next;
        curNode.next = null;
    }


    @Override
    public String toString() {
        return "LinkedList{" +
                "head=" + head +
                '}';
    }

    public static void main(String[] args) {
        LinkedList l = new LinkedList();
        l.insertElement(10);
        l.insertElement(20);
        l.insertElement(40);
        l.insertElementAtHead(100);
        System.out.println(l);
        l.deleteNode(20);
        System.out.println(l);
    }

}

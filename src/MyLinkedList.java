public class MyLinkedList {
    public ListNode head;


    private ListNode createNewNode(int val) {
        return new ListNode(val);
    }

    public void insertElement(int val) {
        if (this.head == null) {
            this.head = this.createNewNode(val);
            return;
        }
        ListNode x = this.head;
        while (x.next != null) x = x.next;
        x.next = new ListNode(val);
    }

    public String search(int val) {
        ListNode x = this.head;
        while (x != null && x.value != val) x = x.next;
        return x == null ? "not found" : "found";
    }

    public void insertElementAtHead(int val) {
        ListNode x = this.createNewNode(val);
        x.next = this.head;
        this.head = x;
    }

    private void deleteNode(int val) {
        ListNode curListNode = this.head;
        ListNode prevListNode = null;

        while (curListNode != null && curListNode.value != val) {
            prevListNode = curListNode;
            curListNode = curListNode.next;
        }
        if (curListNode == null) {
            return;
        }
        if (curListNode == this.head) {
            this.head = curListNode.next;
            return;
        }
        prevListNode.next = curListNode.next;
        curListNode.next = null;
    }


    @Override
    public String toString() {
        return "MyLinkedList{" +
            "head=" + head +
            '}';
    }

    public static void main(String[] args) {
        MyLinkedList l = new MyLinkedList();
        l.insertElement(10);
        l.insertElement(20);
        l.insertElement(40);
        l.insertElementAtHead(100);
        System.out.println(l);
        l.deleteNode(20);
        System.out.println(l);
    }

}

package take2;

/*
Given a value, insert value at the end of the end of the link list.
Search a value in a link list
Delete node from the link list
Insert at head in the link list.

 */
public class LinkedList {

    private Node head;

    public LinkedList(int value) {
        this.head = new Node(value);
    }

    class Node {
        private int value;
        private Node next;

        public Node(int value) {
            this.value = value;
            this.next = null;
        }
    }


    void insertElement(int value) {
        Node newNode = new Node(value);
        Node currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    boolean isFound(int value) {
        Node curNode = this.head;
        while (curNode != null) {
            if (curNode.value == value) {
                return true;
            } else {
                curNode = curNode.next;
            }
        }

        return false;
    }

    void insertAtHead(int value) {
        Node currNode = this.head;
        Node newNode = new Node(value);
        newNode.next = currNode;
        this.head = newNode;
    }

    void delete(int value) {
        Node curNode = this.head;
        Node prevNode = this.head;
        while (curNode != null) {
            if (curNode.value == value) {
                prevNode.next = curNode.next;
                curNode = curNode.next;
            } else {
                prevNode = curNode;
                curNode = curNode.next;
            }
        }
    }

    public static Node shiftLinkedList(Node head, int k) {
        // Write your code here.

        int length = 1;
        Node listTailNode = head;

        while (listTailNode.next != null) {
            listTailNode = listTailNode.next;
            length++;
        }

        int offset = Math.abs(k) % length;
        if(offset == 0) return head;
        int newK = k > 0 ?  length - offset: offset;

        Node currNode = head;
        int i = 1;
        while (i < newK) {
            currNode = currNode.next;
            i++;
        }
        listTailNode.next = head;
        head = currNode.next;
        currNode.next = null;

        return head;
    }

    @Override
    public String toString() {
        String result = "";
        Node currentNode = this.head;
        while (currentNode != null) {
            result = result + (result.equalsIgnoreCase("") ? "" : " -> ") + currentNode.value;
            currentNode = currentNode.next;
        }

        return result;
    }

    public static String toString(Node currentNode) {
        String result = "";
        while (currentNode != null) {
            result = result + (result.equalsIgnoreCase("") ? "" : " -> ") + currentNode.value;
            currentNode = currentNode.next;
        }

        return result;
    }

    public static void main(String[] args) {

        LinkedList n = new LinkedList(1);
        n = new LinkedList(0);

        n.insertElement(1);
        n.insertElement(2);
        n.insertElement(3);
        n.insertElement(4);
        n.insertElement(5);

        System.out.println(n.toString());
//        System.out.println("FOUND: " + (n.isFound(2)));
//
//        n.delete(2);
//        System.out.println("After deleting node" + n.toString());
//        n.delete(45);
//
//        n.insertAtHead(3);
//        System.out.println(n.toString());


        System.out.println("Shifted+2: " + toString(shiftLinkedList(n.head, 2)));
        n = new LinkedList(0);
        n.insertElement(1);
        n.insertElement(2);
        n.insertElement(3);
        n.insertElement(4);
        n.insertElement(5);

       System.out.println("Shifted-2: " + toString(shiftLinkedList(n.head, -2)));

    }
}

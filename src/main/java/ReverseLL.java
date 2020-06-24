package main.java;//https://leetcode.com/problems/reverse-linked-list/
import java.util.List;
public class ReverseLL {

    public static ListNode reverse(ListNode node) {
        ListNode prevNode = null;
        ListNode nextNode = node;
        return reverse(prevNode, nextNode);
    }

    public static ListNode reverse(ListNode prevNode, ListNode nextNode) {
        if (nextNode == null) {
            return prevNode;
        }

        ListNode nextInLine = nextNode.next;
        nextNode.next = prevNode;
        return reverse(nextNode, nextInLine);
    }

    public static void main(String[] args) {
        MyLinkedList l = new MyLinkedList();
        l.insertElement(10);
        l.insertElement(20);
        l.insertElement(40);
        l.insertElementAtHead(100);
        System.out.println(l);

        l.head = reverse(l.head);
        System.out.println("Reverse" + l);

    }
}

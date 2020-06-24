package main.java;

//https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/
public class IntersectionLL {

    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int sizeA = size(headA);
        int sizeB = size(headB);
        if (sizeA == sizeB && headA == headB) {
            return headA;
        }
        if (sizeA > sizeB) {
            int diff = sizeA - sizeB;
            while (diff != 0) {
                headA = headA.next;
                diff--;
            }
        } else {
            int diff = sizeB - sizeA;
            while (diff != 0) {
                headB = headB.next;
                diff--;
            }
        }

        while (headA != null && headB != null) {
            if (headA == headB) {
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }
        return null;
    }

    public static int size(ListNode node) {
        int count = 1;
        while (node != null && node.next != null) {
            node = node.next;
            count++;
        }
        return count;
    }

    public static void main(String[] args) {

        ListNode a = new ListNode(1);
        ListNode b = new ListNode(2);
        ListNode c = new ListNode(3);
        ListNode d = new ListNode(4);
        ListNode e = new ListNode(7);
        ListNode f = new ListNode(8);
        ListNode g = new ListNode(9);
        a.next = b;
        b.next = c;
        c.next = d;
        e.next = f;
        f.next = g;
        g.next = c;
        System.out.println(a);
        System.out.println(e);

        System.out.println(getIntersectionNode(a, e));

    }
}

public class MiddleElementLL {
    public static void main(String[] args) {
        MyLinkedList l = new MyLinkedList();
        l.insertElement(1);
        l.insertElement(2);
        l.insertElement(3);
        l.insertElement(4);
        l.insertElement(5);
        System.out.println(middleElement(l.getHead()));

    }

    private static ListNode middleElement(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;

    }
}

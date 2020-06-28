//Implement Queue with the help of two stacks
//Push O(1)
//Pop  O(n)
//Front O(n)
//Size  O(1)
//Empty O(1)


import java.util.Stack;

public class QueueWithPushO1 {
    Stack first;
    Stack second;

    public QueueWithPushO1() {
        this.first = new Stack();
        this.second = new Stack();
    }

    public void push(int s) {
        first.push(s);
    }

    public int pop() {
        while (!first.isEmpty()) {
            second.push(first.pop());
        }
        int popped = (Integer) second.pop();
        while (!second.isEmpty()) {
            first.push(second.pop());
        }
        return popped;
    }

    public int peek() {
        System.out.println(first);
        System.out.println(second);
        while (!first.isEmpty()) {
            second.push(first.pop());
        }
        return (Integer) second.peek();
    }

    public int size() {
        return first.size();
    }

    public boolean empty() {
        return first.empty();
    }

    @Override
    public String toString() {
        return "QueueWithPushO1{" +
                "first=" + first +
                '}';
    }

    public static void main(String[] args) {
        QueueWithPushO1 obj = new QueueWithPushO1();
        obj.push(1);
        obj.push(2);
        obj.push(3);
        obj.push(4);
        System.out.println(obj);
        System.out.println("popped "+ obj.pop());
        System.out.println("popped "+ obj.pop());
        System.out.println(obj);
    }
}

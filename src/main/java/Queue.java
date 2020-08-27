//Implement Queue with the help of two stacks
//Push O(n)
//Pop  O(1)
//Front O(1)
//Size  O(1)
//Empty O(1)


import java.util.Stack;

public class Queue {
    Stack first = new Stack();
    Stack second = new Stack();

    public void push(int s) {
        while (!second.isEmpty()) {
            first.push(second.pop());
        }
        first.push(s);
        while (!first.isEmpty()) {
            second.push(first.pop());
        }
    }

    public int pop() {
        return (Integer)second.pop();
    }

    public int peek() {
        return (Integer)second.peek();
    }

    public int size() {
        return second.size();
    }

    public boolean empty() {
        return second.empty();
    }


    public static void main(String[] args) {
        Queue obj = new Queue();
        obj.push(1);
        obj.push(2);

        System.out.println(obj.peek());
//        int param_2 = obj.pop();
//        int param_3 = obj.peek();
//        boolean param_4 = obj.empty();


    }


}

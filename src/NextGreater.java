import java.util.Stack;

public class NextGreater {
    private static String[] nextGreater(int[] input) {
        Stack<Integer> stack = new Stack();
        String[] results = new String[input.length];
        int k = 0;

        for (int i = input.length - 1; i >= 0; i--) {
            if (stack.isEmpty()) {
                results[k++] = input[i] + "-> -1";
                stack.push(input[i]);
            } else if (input[i] < stack.peek()) {
                results[k++] = input[i] + "->" + stack.peek();
                stack.push(input[i]);
            } else if (input[i] > stack.peek()) {
                stack.pop();
                results[k++] = input[i] + "->" + stack.peek();
                stack.push(input[i]);
            }
        }
        return results;
    }

    public static void main(String[] args) {
        int[] input = new int[]{4, 5, 2, 25};

        for (String x : nextGreater(input)) {
            System.out.println(x);
        }
    }
}

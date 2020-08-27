import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class validParanthesis {

    public static boolean isValid(String s) {
        if (s.isEmpty()) {
            return true;
        }
        String[] input = s.split("");
        Stack<String> startStack = new Stack<>();

        Map<String, String> map = new HashMap<>();
        map.put("}", "{");
        map.put("]", "[");
        map.put(")", "(");
        int i = 0;

        while (i < input.length) {
            if (input[i].equals("{") || input[i].equals("[") || input[i].equals("(")) {
                startStack.push(input[i]);

            } else {
                if (startStack.isEmpty()) {
                    return false;
                }
                if (!startStack.peek().equals(map.get(input[i]))) {
                    return false;
                }
                startStack.pop();
            }
            i++;
        }

        return i == input.length && startStack.isEmpty();
    }

    public static void main(String[] args) {
        String input = "[])";
        System.out.println("output"+ isValid( input));
    }
}

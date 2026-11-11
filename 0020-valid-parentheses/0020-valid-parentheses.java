class Solution {
    public boolean isValid(String s) {


        Stack pilha = new Stack();


        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
                pilha.push(s.charAt(i));
            } else if (s.charAt(i) == ')' || s.charAt(i) == ']' || s.charAt(i) == '}') {
                if (pilha.isEmpty()) {
                    return false;
                } else if (s.charAt(i) == ')' && pilha.peek().equals('(')) {
                    pilha.pop();
                } else if (s.charAt(i) == ']' && pilha.peek().equals('[')) {
                    pilha.pop();
                } else if (s.charAt(i) == '}' && pilha.peek().equals('{')) {
                    pilha.pop();
                } else {
                    return false;
                }

            }


        }
        return pilha.empty();

    }
}
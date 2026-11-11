class Solution {
    public int lengthOfLastWord(String s) {
        s = s.trim();
        String partes[] = s.split(" ");
        return partes[partes.length - 1].length();
    }
}
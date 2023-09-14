package org.example._13RomanToIntegers;

import java.util.HashMap;
import java.util.Map;

public class Solution {
    public static int romanToInt(String s) {

        Map<Character, Integer> hashMap = new HashMap<>();
        hashMap.put('I', 1);
        hashMap.put('V', 5);
        hashMap.put('X', 10);
        hashMap.put('L', 50);
        hashMap.put('C', 100);
        hashMap.put('D', 500);
        hashMap.put('M', 1000);

        int number = 0;
        int lastDigit = 0, penulDigit = 0;

        for (int i = 0; i < s.length(); i++) {

            lastDigit = hashMap.get(s.charAt(s.length() - 1 - i));

            if (lastDigit >= penulDigit) {
                number += lastDigit;
                penulDigit = lastDigit;
            } else {
                number -= lastDigit;
                penulDigit = lastDigit;
            }
        }
        return number;
    }
}

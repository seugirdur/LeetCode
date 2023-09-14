package org.example._9PalindromeNumber;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution {
    public static boolean isPalindrome(int x) {

        String number = String.valueOf(x);

        System.out.println(number);

        String[] algarism = new String[number.length()];
        String[] algarismInverted = new String[number.length()];



        for (int i = 0; i < algarism.length; i++) {
            algarism[i] = (number.substring(i, i+1));
            algarismInverted[number.length() - 1 - i] = (number.substring(i, i+1));
        }

        System.out.println(Arrays.toString(algarism));
        System.out.println(Arrays.toString(algarismInverted));

        return Arrays.equals(algarism, algarismInverted);


    }
}

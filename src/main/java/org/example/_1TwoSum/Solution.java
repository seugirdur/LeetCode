package org.example._1TwoSum;

public class Solution {

    public int[] twoSum(int[] nums, int target) {

        int[] results = new int[2];

        for (int i = 0; i < nums.length; i++) {
            for (int j = 1; j < nums.length; j++) {
                if (results[1] == 0) {
                    if (nums[i] + nums[j] == target) {
                        if(i != j) {
                            results[0] = i;
                            results[1] = j;
                            break;
                        }
                    }
                }
            }
        }

        return results;
    }

}

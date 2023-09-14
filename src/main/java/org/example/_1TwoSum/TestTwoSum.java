package org.example._1TwoSum;

import java.util.Arrays;

public class TestTwoSum {
    public static void main(String[] args) {
        _1TwoSum sum = new _1TwoSum();

        int[] nums = new int[]{2,7,11,15};
        int[] nums1 = new int[]{3,2,4};
        int[] nums2 = new int[]{3,3};
        int target = 9;
        int target1 = 6;
        int target2 = 6;

        int[] result = sum.twoSum(nums, target);
        int[] result1 = sum.twoSum(nums1, target1);
        int[] result2 = sum.twoSum(nums2, target2);

        System.out.println(Arrays.toString(result));
        System.out.println(Arrays.toString(result1));
        System.out.println(Arrays.toString(result2));

    }
}

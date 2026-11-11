function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;         // Last index of actual data in nums1
    let j = n - 1;         // Last index of nums2
    let k = m + n - 1;     // Last index of nums1 (full size)

    // Work backwards from the end of nums1
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Move the larger one to the end
            i--;
        } else {
            nums1[k] = nums2[j]; // Move nums2 value to the end
            j--;
        }
        k--;
    }
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    let dummyLeft: TreeNode = root
    let dummyRight: TreeNode = root
    let stackLeft: TreeNode[] = []
    let stackRight: TreeNode[] = []
    let symmetric: boolean = true
    while (dummyLeft != null || dummyRight != null || stackLeft.length != 0 && stackRight.length != 0) {

        if (!dummyLeft && dummyRight || dummyLeft && !dummyRight) {
            symmetric = false
            break
        }

        if (dummyLeft == null && dummyRight == null) {
            dummyLeft = stackLeft.pop()
            dummyRight = stackRight.pop()
            dummyLeft = dummyLeft.right
            dummyRight = dummyRight.left
        } else {
            if (dummyLeft.val == dummyRight.val) {
            stackLeft.push(dummyLeft)
            stackRight.push(dummyRight)
            dummyLeft = dummyLeft.left
            dummyRight = dummyRight.right
            } else {
                symmetric = false
                break;
            }
        }
    }

    return symmetric

};
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let stackP: TreeNode[] = []
    let stackQ: TreeNode[] = []

    let dummyP: TreeNode = p
    let dummyQ: TreeNode = q
    let equal: boolean = true

    if (dummyP && !dummyQ || !dummyP && dummyQ) {
        return false
    }

    while (dummyP != null || dummyQ != null || stackP.length != 0 && stackQ.length != 0) {
        console.log("entering the while")

        // if (dummyP.val != dummyQ.val) {
        //     console.log("they are diff", dummyP, dummyQ)
        //     equal = false;
        //     break
        // }
        if (dummyP && !dummyQ || !dummyP && dummyQ) {
           equal = false;
                break        
        }
        if (dummyP && dummyQ) {
            console.log("p value", dummyP.val)
            console.log("q value", dummyQ.val)
        }
        if (dummyP == null && dummyQ == null) {
            dummyP = stackP.pop()
            dummyP = dummyP.right
            dummyQ = stackQ.pop()
            dummyQ = dummyQ.right
        } else {
            stackP.push(dummyP)
            stackQ.push(dummyQ)
            if (dummyP && dummyQ && dummyP.val == dummyQ.val && dummyP.val != null && dummyQ.val != null) {
                dummyP = dummyP.left
                dummyQ = dummyQ.left
            } else {
                equal = false;
                break
            }
        }



    }

    return equal;


};
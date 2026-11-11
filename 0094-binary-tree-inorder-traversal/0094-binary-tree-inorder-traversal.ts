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

function inorderTraversal(root: TreeNode | null): number[] {
    let inverseOrder: number[] = []
    let parent: TreeNode | null = null;
    let stack: TreeNode[] = []


    //continuara jogando valores enquanto nao tiver consumido a arvore inteira
    while (root !== null || stack.length > 0) {
        //vai até a borda da esquerda possível e guarda o valor
        while (root !== null) {
            stack.push(root)
            root = root.left

        }

        // 2️⃣ Chegou no fundo: pega o nó mais à esquerda (ou o topo da pilha)
        root = stack.pop()
        inverseOrder.push(root.val)

        // 3️⃣ Vai para a direita e repete o processo
        root = root.right

    }
        return inverseOrder;
}
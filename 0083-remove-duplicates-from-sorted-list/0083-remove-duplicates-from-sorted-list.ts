/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let lastSeen: number | null = null;
    let dummy = new ListNode();
    let currentNode = dummy;
    while (head !== null) {
        if (head.val !== lastSeen) {
            currentNode.next = new ListNode(head.val)
            currentNode = currentNode.next
            lastSeen = head.val;

        }
        head = head.next
        
    }
    return dummy.next; 
};
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        dummy = ListNode(0)  # nó inicial fictício
        myNode = dummy       # ponteiro de construção
        firstNum = head.val  # valor do primeiro nó
        myNode.next = ListNode(firstNum)
        myNode = myNode.next
        head = head.next

        while head:
            secondNum = head.val
            divisor = gcd(firstNum, secondNum)

            # adiciona o GCD
            myNode.next = ListNode(divisor)
            myNode = myNode.next

            # adiciona o segundo número
            myNode.next = ListNode(secondNum)
            myNode = myNode.next

            # avança
            firstNum = secondNum
            head = head.next

        return dummy.next
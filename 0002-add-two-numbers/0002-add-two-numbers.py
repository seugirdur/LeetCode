class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        sum_list = ListNode(0)
        sum_start = sum_list
        rest = 0
        while l1 or l2:
            if not l1: 
                l1 = ListNode()
            if not l2:
                l2 = ListNode()
            
            total = l1.val + l2.val + rest
            sum_list.val = total % 10
            rest = total // 10

            l1 = l1.next
            l2 = l2.next
            if l1 or l2:
                sum_list.next = ListNode()
                sum_list = sum_list.next
            elif rest == 1:
                sum_list.next = ListNode(1)
        
        return sum_start

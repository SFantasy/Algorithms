class Solution:
    # You are given two linked lists representing two non-negative numbers.
    # The digits are stored in reverse order and each of their nodes contain a single digit.
    # Add the two numbers and return it as a linked list.
    n = None
    p = 0
    def addTwoNumbers(self, l1, l2):
        self.iteration(l1, l2)
        return self.n

    def iteration(self, x, y):
        if not x:
            x = ListNode(0)
        if not y:
            y = ListNode(0)

        val = x.val + y.val + self.p

        if (val >= 10):
            val = val - 10
            if x.next or y.next:
                self.p = 1
            else:
                self.n = ListNode(1)
        else:
            self.p = 0

        if x.next or y.next:
            self.iteration(x.next, y.next)

        new = ListNode(val)
        new.next = self.n
        self.n = new

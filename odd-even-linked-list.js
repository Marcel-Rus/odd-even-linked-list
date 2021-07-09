/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if (head === null) {
        return head;
    }

    else {
        let oddNode = head;
        let evenNode = head.next;
        let evenHead = evenNode;
        
        while (evenNode !== null && evenNode.next !== null) {
            oddNode.next = evenNode.next;
            oddNode = oddNode.next;

            evenNode.next = oddNode.next;
            evenNode = evenNode.next;
        }

        oddNode.next = evenHead;
        return head;
    }
};
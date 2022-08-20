/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
    if root == nil {
        return []int{}
    }
    
    values := []int{root.Val}
    
    for _, node := range root.Children {
        values = append(values, preorder(node)...)
    }
    
    return values   
}
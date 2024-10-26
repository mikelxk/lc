function preorderTraversal(root: TreeNode | null): number[] {
    let res : number[] = []
    dfs(root)
    function dfs(root?: TreeNode){
        if(!root){
            return
        }
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)

    }
    return res
};
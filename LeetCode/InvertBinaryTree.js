/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;

    var exchange = root.left;
    root.left = root.right;
    root.right = exchange;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

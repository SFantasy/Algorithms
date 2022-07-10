/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];

  let results = [];

  function traverseTree(nodes) {
      let result = [];
      let nextIteration = [];

      for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (node.val !== null) result.push(node.val);
          if (node.left) nextIteration.push(node.left);
          if (node.right) nextIteration.push(node.right);
      }

      results.push(result);

      if (nextIteration.length !== 0) {
          results.push(traverseTree(nextIteration));
      }
  }

  traverseTree([root]);

  return results.filter(v => v !== undefined);
};
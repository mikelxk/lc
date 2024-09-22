# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


from typing import List, Optional


class Codec:

    def serialize(self, root: TreeNode):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """

        serData = str()

        def serializeHelper(node: TreeNode):
            nonlocal serData
            if not node:
                serData += "null,"
                return
            serData += str(node.val) + ","
            serializeHelper(node.left)
            serializeHelper(node.right)

        serializeHelper(root)
        return serData

    def deserialize(self, data: str):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """

        def deserializeHelper(values: list[str]):
            nodeVal = values.pop(0)
            if nodeVal == "null":
                return None
            node = TreeNode(int(nodeVal))
            node.left = deserializeHelper(values)
            node.right = deserializeHelper(values)

        return deserializeHelper(data.split(","))


c = Codec()
c.serialize(TreeNode(1))

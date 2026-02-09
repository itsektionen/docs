import { TreeGridNode, TreeGridNodeConnector } from "./treeGridType";
import styles from "./lmixer.tree.module.css";
import { cn } from "@/lib/cn";

export default function TreeNode(
  node: TreeGridNode | TreeGridNodeConnector,
  isTopNode?: boolean,
) {
  let nodeData: TreeNodeData = {
    node: node,
    isTopNode: isTopNode,
  };
  switch (node.nodeType) {
    default:
    case "dot":
      return DotNode(nodeData);
    case "header":
      return HeaderNode(nodeData);
    case "big":
      return BigNode(nodeData);
    case "combine":
      return CombineNode(nodeData);
  }
}

type TreeNodeData = {
  node: TreeGridNode | TreeGridNodeConnector;
  isTopNode?: boolean;
};

function DotNode(_nodeData: TreeNodeData) {
  return <div className={styles.dotNode}></div>;
}
function HeaderNode(nodeData: TreeNodeData) {
  return (
    <div
      className={cn(styles.bigNode, nodeData.isTopNode ? styles.topNode : "")}
    >
      <a
        href={"#" + (nodeData.node.content?.text ?? "")}
        id={nodeData.node.content?.text ?? ""}
      >
        {nodeData.node.content?.text}
      </a>
    </div>
  );
}
function BigNode(nodeData: TreeNodeData) {
  return (
    <div
      className={cn(styles.bigNode, nodeData.isTopNode ? styles.topNode : "")}
    >
      {nodeData.node.content?.text}
    </div>
  );
}

function CombineNode(nodeData: TreeNodeData) {
  return (
    <div
      className={cn(
        styles.connectorNode,
        nodeData.isTopNode ? styles.topNode : "",
      )}
    >
      {nodeData.node.content?.text}
    </div>
  );
}

import { TreeGridNode, TreeGridNodeConnector } from "./treeGridType";
import styles from "./lmixer.tree.module.css";

export default function TreeNode(
  node: TreeGridNode | TreeGridNodeConnector,
  isTopNode?: boolean,
) {
  if (node.nodeType == "dot" || node.nodeType == undefined) {
    return <div className={styles.dotNode}></div>;
  }
  if (node.nodeType == "header") {
    return (
      <div
        className={[styles.bigNode, isTopNode ? styles.topNode : ""].join(" ")}
      >
        <a
          href={"#" + (node.content?.text ?? "")}
          id={node.content?.text ?? ""}
        >
          {node.content?.text}
        </a>
      </div>
    );
  }
  if (node.nodeType == "big") {
    return (
      <div
        className={[styles.bigNode, isTopNode ? styles.topNode : ""].join(" ")}
      >
        {node.content?.text}
      </div>
    );
  }
  if (node.nodeType == "combine") {
    return (
      <div
        className={[styles.connectorNode, isTopNode ? styles.topNode : ""].join(
          " ",
        )}
      >
        {node.content?.text}
      </div>
    );
  }
}

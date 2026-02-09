import { TreeGridNode, TreeGridNodeConnector } from "./treeGridType";
import styles from "./lmixer.tree.module.css";
import TreeNode from "./TreeNode";
import { Fragment } from "react/jsx-runtime";

export default function TreeGrid(tree: TreeGridNode, isChild: boolean) {
  return (
    <div className={!isChild ? styles.layerTreeWrapper : ""}>
      <div className={styles.treeDown}>
        {TreeNode(tree, true)}
        {tree.children && TreeChildren(tree, tree.children, isChild)}
        {isChild && tree.children && (
          <div className={styles.edgeConnectorRouter}></div>
        )}
      </div>
    </div>
  );
}

function TreeChildren(
  tree: TreeGridNode,
  children: TreeGridNodeConnector[],
  isChild: boolean,
) {
  return (
    <>
      <div></div>
      {children.map((child, childIndex) => {
        return TreeChild(tree, child, childIndex, isChild);
      })}
    </>
  );
}

function TreeChild(
  tree: TreeGridNode,
  child: TreeGridNodeConnector,
  childIndex: number,
  isParentAChild: boolean,
) {
  let verticalLineClass = styles.connectorVerticalLine;
  if (isParentAChild || childIndex != (tree.children?.length ?? 0) - 1) {
    verticalLineClass += " " + styles.connectorVerticalLineThroughAll;
  }
  return (
    <Fragment key={childIndex}>
      <div className={styles.mergeConnectorGrid}>
        <div className={verticalLineClass}></div>
        <div className={styles.mergeConnectorNode}>
          {TreeNode(child, false)}
        </div>
        {child.sideInput && (
          <div className={styles.connectorHorizontalLineRight}></div>
        )}
      </div>

      {child.sideInput &&
        (child.sideInput.children
          ? TreeGrid(child.sideInput, true)
          : TreeNode(child.sideInput))}
    </Fragment>
  );
}

import { TreeGridNode } from "./treeGridType";
import styles from "./lmixer.tree.module.css";
import TreeNode from "./TreeNode";
import { Fragment } from "react/jsx-runtime";

export default function TreeGrid(tree: TreeGridNode, isChild: boolean) {
  return (
    <div className={!isChild ? styles.layerTreeWrapper : ""}>
      <div className={styles.treeDown}>
        {TreeNode(tree, true)}
        {tree.children ? (
          <>
            <div></div>
            {Object.entries(tree.children).map(([childIndex, child]) => {
              //
              return (
                <Fragment key={childIndex}>
                  <div className={styles.mergeConnectorGrid}>
                    <div
                      className={[
                        styles.connectorVerticalLine,
                        isChild ||
                        parseInt(childIndex) != (tree.children?.length ?? 0) - 1
                          ? styles.connectorVerticalLineThroughAll
                          : "",
                      ].join(" ")}
                    ></div>
                    <div className={styles.mergeConnectorNode}>
                      {TreeNode(child, false)}
                    </div>

                    {child.sideInput ? (
                      <div
                        className={styles.connectorHorizontalLineRight}
                      ></div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {child.sideInput ? (
                    <>
                      {child.sideInput.children
                        ? TreeGrid(child.sideInput, true)
                        : TreeNode(child.sideInput)}
                    </>
                  ) : (
                    <></>
                  )}
                </Fragment>
              );
            })}
          </>
        ) : (
          <></>
        )}
        {isChild && tree.children ? (
          <div className={styles.edgeConnectorRouter}></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

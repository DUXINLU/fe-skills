import { ReactNode } from "react";
import gfm from "@bytemd/plugin-gfm";
import { Viewer } from "@bytemd/react";
import styles from "./index.module.scss";
import "./md.scss";

export const ComponentContainer = ({
  markdownText,
  component,
}: {
  markdownText: string;
  component: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.component}>{component}</div>
      <div className={styles.divider}></div>
      <div className={styles.markdown}>
        <Viewer plugins={[gfm()]} value={markdownText}></Viewer>
      </div>
    </div>
  );
};

import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const RotateCube = () => {
  const component = (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  const markdown = "";

  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

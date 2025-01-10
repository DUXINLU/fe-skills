import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const RotateCube = () => {
  const component = (
    <div className={styles.spinner}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  );
  const markdown = `
- 正方体由6个div组成，表面颜色background-color，边颜色border-color
- 设置每个div的初始角度组成立方体
- animation定义旋转角度
  `;

  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

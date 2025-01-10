import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const CardBgTransition = () => {
  const component = (
    <div className={styles.card}>
      <div className={styles.text}>
        <span>标题</span>
        <p className={styles.subtitle}>正文</p>
      </div>
    </div>
  );
  const markdown = `
- 圆圈用before实现
- filter blur虚化效果，hover时移动位置、大小、虚化程度，transition过渡
  `;

  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

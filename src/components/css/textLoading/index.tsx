import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const TextLoading = () => {
  const component = (
    <div className={styles.terminalLoader}>
      <div className={styles.text}>Loading...</div>
    </div>
  );
  const markdown = `
- 文字右侧添加border, 同时动画给50%关键帧的透明模拟闪烁
- 文字本身宽度变化,模拟打字效果,动画添加步长
- 
        `;
  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

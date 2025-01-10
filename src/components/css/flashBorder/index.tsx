import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const FlashBorderInput = () => {
  const component = (
    // 偷偷用一些tailwind
    <div className={`${styles.cardContainer} flex items-center justify-center`}>
      <div className={styles.cardContent}></div>
    </div>
  );
  const markdown = `
- 父元素套子元素，子元素边缘留出空隙给border效果
- border运动效果通过父元素+before,before元素位置在子元素下,before渐变色+转动
- 注意before的position absolute要紧跟父元素的relative
  `;

  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

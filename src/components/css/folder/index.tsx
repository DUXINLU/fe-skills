import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const Folder = () => {
  const component = (
    <div className={styles.outter}>
      <div className={styles.inner}></div>
    </div>
  );
  const markdown = `
- 父元素为主要内容,文件夹封面使用absolute定位的子元素
- 父元素hover时tranlateY,整体上升;scale,整体放大
- 子元素hover时围绕底部X轴rotate,做打开效果
- 子元素增加::after,做文件夹封面的半圆角
  `;

  return (
    <ComponentContainer
      markdownText={markdown}
      component={component}
    ></ComponentContainer>
  );
};

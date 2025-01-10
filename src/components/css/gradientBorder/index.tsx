import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const GradientBorder = () => {
  const component = (
    <>
      <div className={styles.gradientBorder}></div>
      <div className={styles.gradientBorderWithRadius}></div>
      <div>=</div>
      <div className={styles.gradientBorderWithRadiusDivided}></div>
    </>
  );
  const markdown = `  
- 如果使用border-image + linear-gradient,就不能使用border-radius属性
- 如果希望实现圆角+渐变边框,只能通过覆盖渐变背景的方式
  `;
  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

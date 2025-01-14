import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const InsetShadowButton = () => {
  const component = (
    <div
      className={`${styles.button} flex items-center justify-center cursor-pointer`}
    >
      按钮
    </div>
  );
  const markdown = `
- boxshadow提供向内阴影
  `;

  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

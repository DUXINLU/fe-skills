import { ComponentContainer } from "../componentContainer";
import styles from "./index.module.scss";

export const PseudoButton = () => {
  const component = (
    <div
      className={`${styles.button} flex items-center justify-center cursor-pointer`}
    >
      <div className={`${styles.text}`}>按钮</div>
    </div>
  );
  const markdown = ` 
- 前置条件：
    - 当前状态定义的transition只对当前状态产生效果，即transition定义的是上一个状态转移到当前状态的过渡效果
    - 内容zindex=1，才不会导致伪元素遮挡父元素内容，而只展示在背景中
- 使用before和after，分别实现向右、向左的动效
- 状态定义：
    - 静止状态
    - hover开始时before的进场动效，after的宽度为100但是隐藏
    - hover结束时before的瞬间消失，after的退场动效
- 静止状态：
    - after：由于在hover->静止的过渡中需要退场动画，所以应在静止状态添加transition
- hover:
    - before：在静止->hover时需要进场动画，所以在hover时为before添加transition，同时width=100
    - after：为hover->静止状态预留一个width=100，但是不能影响当前的before，所以给一个透明度=0
        `;
  return (
    <ComponentContainer
      component={component}
      markdownText={markdown}
    ></ComponentContainer>
  );
};

import { CardBgTransition } from "../components/css/cardBgTransition";
import { FlashBorderInput } from "../components/css/flashBorder";
import { Folder } from "../components/css/folder";
import { GradientBorder } from "../components/css/gradientBorder";
import { InsetShadowButton } from "../components/css/insetShadowButton";
import { PlayGround } from "../components/css/playGround";
import { PseudoButton } from "../components/css/pseudoButton";
import { RotateCube } from "../components/css/rotateCube";
import { TextLoading } from "../components/css/textLoading";

export const AppRoutes = {
  CSS: [
    {
      path: "/CSS/flashBorderInput",
      key: "flashBorderInput",
      name: "渐变边框+闪动",
      component: <FlashBorderInput></FlashBorderInput>,
    },
    {
      path: "/CSS/gradientBorder",
      key: "gradientBorder",
      name: "渐变边框+圆角",
      component: <GradientBorder></GradientBorder>,
    },
    {
      path: "/CSS/rotateCube",
      key: "rotateCube",
      name: "旋转方块",
      component: <RotateCube></RotateCube>,
    },
    {
      path: "/CSS/folder",
      key: "folder",
      name: "文件夹",
      component: <Folder></Folder>,
    },
    {
      path: "/CSS/cardBgTransition",
      key: "cardBgTransition",
      name: "卡片背景动效",
      component: <CardBgTransition></CardBgTransition>,
    },
    {
      path: "/CSS/textLoading",
      key: "textLoading",
      name: "打字机加载",
      component: <TextLoading></TextLoading>,
    },
    {
      path: "/CSS/buttonHoverPseudo",
      key: "buttonHoverPseudo",
      name: "按钮伪类悬浮",
      component: <PseudoButton></PseudoButton>,
    },
    {
      path: "/CSS/insetShadowButton",
      key: "insetShadowButton",
      name: "按钮inset阴影",
      component: <InsetShadowButton></InsetShadowButton>,
    },
    {
      path: "/CSS/playGround",
      key: "playGround",
      name: "训练场",
      component: <PlayGround></PlayGround>,
    },
  ],
};

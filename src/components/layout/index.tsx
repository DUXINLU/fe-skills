import { Layout, Nav } from "@douyinfe/semi-ui";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../route/route";
import "./index.scss";

export const AppLayout = () => {
  const { Header, Sider, Content } = Layout;

  const CSSRoutes = AppRoutes.CSS.map((item) => (
    <Route path={item.path} element={item.component}></Route>
  ));

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Nav mode="horizontal" defaultSelectedKeys={["CSS"]}>
          <NavLink to="/CSS/buttonHoverPseudo">CSS动效合集</NavLink>
        </Nav>
      </Header>
      <Layout>
        <Sider>
          <Nav
            className="app-sider"
            renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={
                    AppRoutes.CSS.find((item) => item.key === props.itemKey)
                      ?.path || ""
                  }
                >
                  {itemElement}
                </Link>
              );
            }}
            defaultSelectedKeys={[AppRoutes.CSS[0].key]}
            items={AppRoutes.CSS.map((item) => ({
              itemKey: item.key,
              text: item.name,
            }))}
          />
        </Sider>
        <Content className="app-content-container">
          <Routes>
            <Route path="/">
              <Route path="CSS">{CSSRoutes}</Route>
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

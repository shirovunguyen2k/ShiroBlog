import { Outlet } from "@tanstack/react-router";
import { Layout } from "antd";
import PageHeader from "../header/page-header";

const MainLayout = () => {
  const { Content, Footer } = Layout;
  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <PageHeader />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
};

export default MainLayout;

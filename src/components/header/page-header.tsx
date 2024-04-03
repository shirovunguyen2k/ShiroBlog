import { Layout, Menu, MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <CaretDownOutlined />,
    children: [
      {
        label: "Home Page 1",
        key: "home1",
      },
      {
        label: "Home Page 2",
        key: "home2",
      },
      {
        label: "Home Page 3",
        key: "home3",
      },
      {
        label: "Home Page 4",
        key: "home4",
      },
    ],
  },
  {
    label: "About Me",
    key: "about-me",
    children: [
      { label: "My portfolio", key: "my-portfolio" },
      { label: "Portfolio Details", key: "portfolio-details" },
    ],
  },
  {
    label: "Category",
    key: "category",
    children: [
      {
        label: "Blog Category 1",
        key: "category1",
      },
      {
        label: "Blog Category 2",
        key: "category2",
      },
      {
        label: "Blog Category 3",
        key: "category3",
      },
      {
        label: "Blog Category 4",
        key: "category4",
      },
    ],
  },
  {
    label: "Single Post",
    key: "single-post",
    children: [
      {
        label: "Blog Single 1",
        key: "blog-single-1",
      },
      {
        label: "Blog Single 2",
        key: "blog-single-2",
      },
      {
        label: "Blog Single 3",
        key: "blog-single-3",
      },
    ],
  },
  {
    label: "Pages",
    key: "pages",
    children: [
      {
        label: "Blog Single 1",
        key: "blog-single-1",
      },
      {
        label: "Blog Single 2",
        key: "blog-single-2",
      },
      {
        label: "Blog Single 3",
        key: "blog-single-3",
      },
    ],
  },
  {
    label: "Contact",
    key: "contact",
  },
];
const PageHeader = () => {
  const { Header } = Layout;

  return (
    <Header className="flex justify-between px-12 items-center">
      <div className="flex items-center flex-none w-14">
        <img src="/shiro-icon.png" alt="" />
        <p className="text-white text-4xl	font-bold	antialiased ml-2">Shiro</p>
      </div>
      <div className="text-white flex">
        <Menu selectedKeys={["home"]} mode="horizontal" items={items} theme="dark" />
      </div>
      <div className="text-white flex items-center flex-2">DarkMode</div>
    </Header>
  );
};

export default PageHeader;

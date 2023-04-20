import { Avatar, Dropdown, Space } from "antd";
import { items } from "./settings/items-navbar";
import { UserOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <>
      <Dropdown menu={{ items }} placement="bottom">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              size="large"
              shape="square"
              style={{ backgroundColor: "#9381FF" ,color:"#B8B8FF", border: "2px solid #F8F7FF"}}
              icon={<UserOutlined />}
            />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}

export default Navbar;

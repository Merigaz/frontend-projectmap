import {Button, Dropdown} from "antd";
import type { MenuProps } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function NavProfile() {
  const [cookies] = useCookies(['name'])
  const [, , removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();
  const handleLogout = () => {
  
  removeCookie("authToken", { path: "/" });
  navigate("/");
  };
  const items: MenuProps['items'] = [
    {
      label: 'Cerrar Sesión',
      key: '1',
      onClick:handleLogout
    }
  ];
  const menuProps = {
    items,
    
  };
  return (
    <>
      <Dropdown menu={menuProps} placement="bottom">
      <Button  icon={<UserOutlined />}>
      {`${cookies.name}`}
      </Button>
    </Dropdown>
    </>
  );
}

export default NavProfile;

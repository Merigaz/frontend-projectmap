import { SearchOutlined } from "@ant-design/icons";
import { Button, Popover, Tabs, TabsProps } from "antd";
import { useState } from "react";
import CheckboxNeighborhood from "./cCheckboxNeighborhoods";
import CheckboxPlaces from "./cCheckboxPlaces";

function CheckboxMenu() {

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);


  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };

  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };
  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <span>Barrios</span>,
      children: <CheckboxNeighborhood/>,
    },
    {
      key: '2',
      label: <span>Lugares de votación</span>,
      children: <CheckboxPlaces/>,
    }
  ];
  

  const popoverContent = (
    <Tabs items={items} onChange={onChange} />
  );
  return (
    <Popover
      content={popoverContent}
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={popoverContent}
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button
          icon={<SearchOutlined />}
          style={{
            backgroundColor: "#343D4B",
            color: "#A49859",
            left: "1%",
            top: "10px",
            border: "1px solid  #343D4B",
          }}
          size="large"
          shape="circle"
        />
      </Popover>
    </Popover>
  );
}

export default CheckboxMenu;

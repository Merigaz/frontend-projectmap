import { useEffect, useState } from "react";
import { Button, Checkbox, Col, Popover, Row } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxGroupStyle } from "../styles/primaryTheme";
import { useDispatch, useSelector } from "react-redux";
import { setNameMarkers } from "../store/reducers/NameMarkersReducer";
import { SearchOutlined } from "@ant-design/icons";

function CheckboxMenu() {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const neighborhoodsCount = useSelector(
    (state: any) => state.NeighborhoodsCount
  );
  const plainOptions = neighborhoodsCount.NeighborhoodsCount.map(
    (neighborhood: any) => neighborhood.name
  );
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };

  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };

  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(plainOptions);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    dispatch(setNameMarkers(checkedList));
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    dispatch(setNameMarkers(checkedList));
  };

  const popoverContent = (
    <div style={CheckboxGroupStyle}>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <br />

      <Row gutter={[12, 12]}>
        {plainOptions.map((name: any) => (
          <Col span={12}>
            <Checkbox
              key={name}
              value={name}
              onChange={(e) => {
                const newList = e.target.checked
                  ? [...checkedList, name]
                  : checkedList.filter((item) => item !== name);
                onChange(newList);
              }}
              checked={checkedList.includes(name)}
            >
              {name}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
  useEffect(() => {
    dispatch(setNameMarkers(checkedList));
  }, [checkedList]);
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

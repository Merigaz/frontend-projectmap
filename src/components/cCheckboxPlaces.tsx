import { useEffect, useState } from "react";
import {  Checkbox, Col, Row } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxGroupStyle } from "../styles/primaryTheme";
import { useDispatch, useSelector } from "react-redux";
import { setPlacesMarkers } from "../store/reducers/PlacesMarkersReducer";

function CheckboxPlaces() {
  const dispatch = useDispatch();

  const placesCount = useSelector(
    (state: any) => state.PlacesName
  );
  const plainOptions = placesCount.PlacesName.map(
    (places: any) => places.name
  );
 
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    dispatch(setPlacesMarkers(checkedList));
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    dispatch(setPlacesMarkers(checkedList));
  };

  
    
  
  useEffect(() => {
    dispatch(setPlacesMarkers(checkedList));
  }, [checkedList]);
  return (
    <div style={CheckboxGroupStyle}>
    <Checkbox
      indeterminate={indeterminate}
      onChange={onCheckAllChange}
      checked={checkAll}
    >
      Marcar todos
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
  )
}

export default CheckboxPlaces;
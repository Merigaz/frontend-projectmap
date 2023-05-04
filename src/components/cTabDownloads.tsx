import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ComponentFormPlace from './cPlace';
import {IdcardOutlined, SolutionOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getDataAddress, getDataDates, getDataNeighborhood, getDataPlacesCount, getDataPlacesName } from '../hooks/useAxios';
import { setNeighborhoodsCount } from '../store/reducers/NeighborhoodsCountReducer';
import { setDatesCount } from '../store/reducers/DatesCountReducer';
import { setAddressData } from '../store/reducers/AddressDataReducer';
import { setPlacesVote } from '../store/reducers/PlacesVoteReducer';
import { setPlacesName } from '../store/reducers/PlacesNameReducer';
import AddressesByNeighborhoods from './cAddresses';
import AddressesByPlaces from './cDownloadPlaces';


const items: TabsProps['items'] = [
  {
    key: '1',
    label: <span><IdcardOutlined />Barrios</span>,
    children: <AddressesByNeighborhoods />,
  },
  {
    key: '2',
    label: <span><SolutionOutlined />Lugares de votación</span>,
    children: <AddressesByPlaces />,
  }
];

function DownloadsTabsForm() {
  const dispatch = useDispatch();
async function fetchData() {

  const response2 = await getDataNeighborhood();
  const response3 = await getDataDates();
  const response4 = await getDataPlacesCount();
  const response5 = await getDataAddress();

  const response7 = await getDataPlacesName()
  dispatch(setNeighborhoodsCount(response2));
  dispatch(setDatesCount(response3));
  dispatch(setAddressData(response5));
  dispatch(setPlacesVote(response4));
  dispatch(setPlacesName(response7));
}
const onChange = (key: string) => {
  console.log(key);
  fetchData();
};

  return (
    <Tabs items={items} onChange={onChange} />
  )
}

export default DownloadsTabsForm;
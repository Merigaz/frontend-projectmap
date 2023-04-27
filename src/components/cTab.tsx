import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ComponentForm from './cForm';
import ComponentFormPlace from './cPlace';
import { HomeOutlined, IdcardOutlined } from '@ant-design/icons';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <span><IdcardOutlined />Direcciones</span>,
    children: <ComponentForm />,
  },
  {
    key: '2',
    label: <span><HomeOutlined />Lugares de votación</span>,
    children: <ComponentFormPlace />,
  }
];

function TabsForm() {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

export default TabsForm;
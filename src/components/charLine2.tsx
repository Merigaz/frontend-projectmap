import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const DemoLine2 = () => {
/*   const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */
  const datesCount = useSelector((state:any)=> state.DatesCount);
  const data = datesCount.DatesCount.map((datesCount: any) => ({

    name: datesCount.name,
    Ingresos: datesCount.Ingresos,
  }));
  const config = {
    data,
    padding: 'auto',
    xField: 'name',
    yField: 'Ingresos',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };

  return <Line {...config} />;
};
export default DemoLine2;
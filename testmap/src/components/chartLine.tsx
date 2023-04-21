import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import axios from 'axios';

const DemoLine = () => {
  

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/dates`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const config = {
    data,
    appendPadding: 20,
    xField: 'name',
    yField: 'count',
    xAxis: {
    
      tickCount: 4,
    },
    smooth: true,
  };

  return <Line {...config} />;
};
export default DemoLine;
import { Pie } from '@ant-design/plots';
import axios from "axios";
import { useEffect, useState } from "react";

const DemoPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/neighborhoods`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const config = {
    appendPadding: 20,
    data,
    angleField: 'count',
    colorField: 'name',
    radius: 1,
    legend: {
      position: 'left' as const,
    },
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      offset: '-8%',
      content: (data: any) =>
      /* ${data.count}  */`${(data.percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    pieStyle: {
      lineWidth: 0,
    },
  };
  return <Pie {...config} />;
}
export default DemoPie;
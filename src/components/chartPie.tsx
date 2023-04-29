import { Pie } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const DemoPie = () => {

  const neighborhoodsCount = useSelector((state:any)=> state.NeighborhoodsCount);
  const data = neighborhoodsCount.NeighborhoodsCount.map((neighborhoodsCount: any) => ({

    name: neighborhoodsCount.name,
    count: neighborhoodsCount.count
  }));
  

  const config = {
    appendPadding: 20,
    data,
    angleField: 'count',
    colorField: 'name',
    radius: 1,
    legend: false as const,
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      offset: '-8%',
      content: (data: any) =>
      `${(data.percent * 100).toFixed(0)}%`,
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
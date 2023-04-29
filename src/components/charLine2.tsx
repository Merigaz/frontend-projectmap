import { Line } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const DemoLine2 = () => {

  const datesCount = useSelector((state:any)=> state.DatesCount);
  const data = datesCount.DatesCount.map((datesCount: any) => ({

    name: datesCount.name,
    Ingresos: datesCount.Ingresos,
  }));
  const config = {
    data,
    padding: 'auto' as const, 
    xField: 'name',
    yField: 'Ingresos',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
    smooth: true,
  };

  return <Line {...config} />;
};
export default DemoLine2;
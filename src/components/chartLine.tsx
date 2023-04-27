import { Line } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const DemoLine = () => {
  

  const datesCount = useSelector((state:any)=> state.DatesCount);
  const data = datesCount.DatesCount.map((datesCount: any) => ({

    name: datesCount.name,
    Ingresos: datesCount.Ingresos,
  }));
  

  const config = {
    data,
    appendPadding: 20,
    xField: 'name',
    yField: 'Ingresos',
    xAxis: {
    
      tickCount: 4,
    },
    smooth: true,
  };

  return <Line {...config} />;
};
export default DemoLine;
import {  Pie } from '@ant-design/plots';
import { useSelector } from 'react-redux';


const DemoPiePlaces = () => {

  const placesVote = useSelector((state:any)=> state.PlacesVote);
  const data = placesVote.PlacesVote.map((placesVote: any) => ({

    name: placesVote.name,
    count: placesVote.count
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
export default DemoPiePlaces;
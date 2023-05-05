
  import { G2 } from '@ant-design/charts';
  import { Pie} from '@ant-design/plots';
  import { useSelector } from 'react-redux';
  
  const DemoPiePlaces2 = () => {
      const G = G2.getEngine('canvas');
    
      const neighborhoodsCount = useSelector((state:any)=> state.NeighborhoodsCount);
      const data = neighborhoodsCount.NeighborhoodsCount.map((neighborhoodsCount: any) => ({
      
      type: neighborhoodsCount.name,
      value: neighborhoodsCount.count
    }));
    const cfg = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.75,
      legend: false as const,
      label: {
        type: 'spider',
        labelHeight: 40,
        formatter: (data:any, mappingData:any) => {
          const group = new G.Group({});
          group.addShape({
            type: 'circle',
            attrs: {
              x: 0,
              y: 0,
              width: 40,
              height: 50,
              r: 5,
              fill: mappingData.color,
            },
          });
          group.addShape({
            type: 'text',
            attrs: {
              x: 10,
              y: 8,
              text: `${data.type}`,
              fill: mappingData.color,
            },
          });
          group.addShape({
            type: 'text',
            attrs: {
              x: 0,
              y: 25,
              text: `${data.value} / ${data.percent * 100}%`,
              fill: 'rgba(0, 0, 0, 0.65)',
              fontWeight: 700,
            },
          });
          return group;
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
    };
    const config = cfg;
    return <Pie {...config} />;
  };
  
  export default DemoPiePlaces2;
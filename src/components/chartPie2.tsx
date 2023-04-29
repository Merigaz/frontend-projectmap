import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie, measureTextWidth } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const DemoPie2 = () => {
  function renderStatistic(containerWidth: any, text: any, style: any) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
  }

  const neighborhoodsCount = useSelector((state:any)=> state.NeighborhoodsCount);
  const data = neighborhoodsCount.NeighborhoodsCount.map((neighborhoodsCount: any) => ({

    name: neighborhoodsCount.name,
    count: neighborhoodsCount.count
  }));
  const totalCount = data.reduce((acc: any, item: any) => {
    return acc + item.count;
  }, 0);
  const config = {
    appendPadding: 10,
    data,
    angleField: 'count',
    colorField: 'name',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: any) => `${v} ¥`,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
      },
      
      autoRotate: false,
      content: (data: any) =>
      /* ${data.count}  */`${(data.percent * 100).toFixed(0)}%`,
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container: any, view: any, datum: any) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.name : 'Total';
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 0,
        style: {
          fontSize: '32px',
        },
        customHtml: (container: any, view: any, datum: any) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? datum.count : totalCount;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie2;

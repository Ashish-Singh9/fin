import React, { useLayoutEffect, useState } from 'react';
import Chart from "react-google-charts";
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function  GooglePieChart() {
  const [width, height] = useWindowSize();
  //return <span>Window size: {width} x {height}</span>;
  return (
      <>
        <Chart
                width={width<=500?360:width/2}
                height={'18rem'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                ]}
                options={{
                    title: 'My Daily Activities',
                    // Just add this option
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
                />
      </> 
  );
}
export default GooglePieChart;
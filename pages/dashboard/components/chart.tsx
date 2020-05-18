import * as React from 'react';

interface Dimensions {
  width: number;
  height: number;
}

// Hook
function useDimensions(targetRef: React.RefObject<HTMLImageElement>): Dimensions {
  const getDimensions = (): Dimensions => ({
    width: targetRef.current?.offsetWidth ?? 0,
    height: targetRef.current?.offsetHeight ?? 0,
  });

  const [dimensions, setDimensions] = React.useState(getDimensions);

  const handleResize = (): void => {
    setDimensions(getDimensions());
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  React.useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
}

const Chart: React.FunctionComponent = () => {
  const targetRef = React.useRef<HTMLImageElement>(null);
  const { width, height } = useDimensions(targetRef);

  const src = `https://quickchart.io/chart?width=${width}&height=${height}&c={type:'bar',data:{labels:['January','February','March','April', 'May'], datasets:[{label:'Dogs',data:[50,60,70,180,190]},{label:'Cats',data:[100,200,300,400,500]}]}}`;

  return <img className="min-h-screen" ref={targetRef} src={src}></img>;
};

export default Chart;

import * as React from 'react';

interface Dimensions {
  height: number;
  width: number;
}

type Props = Dimensions;

const Chart: React.FunctionComponent<Props> = ({ height, width }: Props) => {
  const src = `https://quickchart.io/chart?width=${width}&height=${height}&c={type:'bar',data:{labels:['January','February','March','April', 'May'], datasets:[{label:'Dogs',data:[50,60,70,180,190]},{label:'Cats',data:[100,200,300,400,500]}]}}`;

  return <img src={src}></img>;
};

export default Chart;

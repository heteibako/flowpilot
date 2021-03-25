import { ResponsiveLine } from '@nivo/line';
import dayjs from 'dayjs';
import LoadingPage from './LoadingPage';

interface DataProps {
  data?: any;
  loading: any;
}

type Data = {
  id: string;
  color: string;
  data: { x: string; y: number }[];
};

const LineChart = ({ data, loading }: DataProps) => {
  const dataToLoad: Data[] = [
    {
      id: 'Stocks',
      color: 'hsl(161, 70%, 50%)',
      data: data.map((d: any) => ({
        x: dayjs(d.date).format('YYYY-MM-DD HH:mm'),
        y: Number(d.high),
      })),
    },
  ];

  return loading ? (
    <LoadingPage />
  ) : (
    <ResponsiveLine
      data={dataToLoad}
      margin={{ top: 50, right: 110, bottom: 90, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=' >-.2f'
      axisTop={null}
      axisRight={null}
      enableArea={true}
      axisBottom={{
        orient: 'bottom',
        tickSize: 2,
        tickPadding: 5,
        tickRotation: 45,
        // legend: 'Stock Market',
        legendOffset: 50,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'High',
        legendOffset: -50,
        legendPosition: 'middle',
      }}
      pointSize={8}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default LineChart;

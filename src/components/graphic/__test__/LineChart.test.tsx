import { render, screen } from '@testing-library/react';
import LineChart from '../components/LineChart';

describe('LineChart', () => {
  it('should render a svg', () => {
    render(
      <LineChart
        data={[{
          time: 0.002,
          value: 1000
        }]}
        domain={[0, 20]}
        handleZoom={() => void 0}
      ></LineChart>
    );

    // firt level svg has img role
    expect(screen.getByRole('img')).toBeVisible();
  });
});

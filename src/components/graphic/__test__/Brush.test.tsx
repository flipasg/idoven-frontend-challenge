import { render, screen } from '@testing-library/react';
import Brush from '../components/Brush';

describe('Brush', () => {
  it('should render a svg', () => {
    render(
      <Brush
        data={[{
          time: 0.002,
          value: 1000
        }]}
        domain={[0, 20]}
        handleZoom={() => void 0}
      ></Brush>
    );

    // firt level svg has img role
    expect(screen.getByRole('img')).toBeVisible();
  });
});

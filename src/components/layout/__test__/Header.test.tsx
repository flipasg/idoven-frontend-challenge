import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render the app title', () => {
    render(<Header />);

    expect(screen.getByText('Idoven.ai Coding Challenge')).toBeVisible();
  });
});

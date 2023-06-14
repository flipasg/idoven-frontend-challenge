import { render, screen } from '@testing-library/react';
import NavigationButton from '../NavigationButton';

describe('NavigationButton', () => {
  it('should render a button', () => {
    render(
      <NavigationButton
        icon={<>icon</>}
        onClick={() => void 0}
      ></NavigationButton>
    );

    expect(screen.getByRole('button')).toBeVisible();
  });
});

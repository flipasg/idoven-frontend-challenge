import { IconButton } from '@mui/material';
import React from 'react';
import { NavigationButtonContainer } from './style';

export default function NavigationButton({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <NavigationButtonContainer>
      <IconButton onClick={onClick}>{icon}</IconButton>
    </NavigationButtonContainer>
  );
}

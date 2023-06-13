import { Grid, styled } from '@mui/material';

// Used styled-components to style the NavigationButtonContainer container
// instead of using Material UI's Grid component:
// <Grid container justifyContent='center' alignItems='center'maxWidth={25} sx={{ flex: '0 0 25px }}>
export const NavigationButtonContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 25px;
  max-width: 25px;
`;
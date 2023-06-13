import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} height={50}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Idoven.ai Coding Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

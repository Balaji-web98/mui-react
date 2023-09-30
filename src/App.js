import { Box, Container, Stack, ThemeProvider, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AccountBalance, Send } from '@mui/icons-material';
import { myTheme } from './Theme';
import Menu from './components/Menu';
import Content from './components/Content';
import RightBar from './components/RightBar';
import NavBar from './components/NavBar';


function App() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth='xl'>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Menu />
          <Content />
          <RightBar />
        </Stack>
      </Container>
    </Box>


  );
}

export default App;

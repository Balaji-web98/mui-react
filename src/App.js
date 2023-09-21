import { Container, ThemeProvider, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AccountBalance, Send } from '@mui/icons-material';
import { myTheme } from './Theme';


const StyledButton = styled(Button)({
  backgroundColor: 'gray',
  color: 'greenyellow',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white'
  }
})

function App() {
  return (
    <Container>
      <Typography variant='h3' component='p' align='center' gutterBottom={true} sx={{ backgroundColor: 'aliceblue', color: 'yellowgreen' }} >
        Hi Bala....
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Beatae atque ea suscipit accusantium exercitationem et,
        rerum dolorum molestias necessitatibus. Enim voluptas unde atque.
        Sapiente commodi est nulla corrupti, nemo facilis.

      </Typography>
      <br />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br /><br />
      <Button variant="text" disabled>Disabled Button</Button>
      <br /><br />
      <Button variant="contained" disableElevation>Contained</Button>
      <br /><br />
      <Button variant="outlined" onClick={() => console.log('Clicked')} color='error' size='small'> Click </Button>
      <br /><br />
      <Button variant="contained" sx={{
        backgroundColor: 'gray',
        color: 'greenyellow',
        '&:hover': {
          backgroundColor: 'red',
          color: 'white'
        }
      }}>Styled Button</Button>
      <br /><br />
      {/* Icons starts here */}
      <Button variant="contained" startIcon={<Send />}> Send Icon Check  </Button>
      <br /><br />
      <Button variant="outlined" startIcon={<AccountBalance />}> Check Bank Balance </Button>
      <br /><br />
      {/* Styled component starts here */}
      <StyledButton variant='contained'>Styled Comp</StyledButton>
      <br /><br />
      {/* apply custom theme to our application */}
      <ThemeProvider theme={myTheme}>
        <Button variant='contained'>Apply theme</Button>
      </ThemeProvider>


    </Container>
  );
}

export default App;

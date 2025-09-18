import {Switch, Rating, Button} from '@mui/material';


const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function App() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <div>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
}

export default App;

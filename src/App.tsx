import { CssBaseline } from '@mui/material';
import Nav from "components/common/Nav"
import { apiDefaultParams } from 'constants/apis';

const App = () => {
  console.log('APP', apiDefaultParams);
  
  return (
    <>
      <CssBaseline />
      <div>App</div>
      <Nav />
    </>
  )
}

export default App;
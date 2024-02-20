import { RecoilRoot} from 'recoil';

import { Layout } from './components/Layout'
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Layout/>
    </RecoilRoot>
  );
}

export default App;

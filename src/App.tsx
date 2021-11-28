import {useGlobalContext} from './contexts/AppContext';

const App = () => {
  const {pending} = useGlobalContext();
  console.log(pending, 'stateee');
  return <div className="App App-header">app</div>;
};

export default App;

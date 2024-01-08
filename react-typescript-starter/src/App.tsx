import './App.css';
import { useRSocket } from './providers/RSocketProvider';

const App = () => {
  const rsocketState = useRSocket()
  const body = rsocketState.ready ? (<div>Ready</div>) : (<div>Not Ready</div>)
  return (
    <div className="App">
      {body}
    </div>
  );
}

export default App;

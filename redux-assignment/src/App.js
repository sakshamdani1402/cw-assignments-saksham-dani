
import './App.css';
import List from './components/List';
import store from './app/store';
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
}

export default App;

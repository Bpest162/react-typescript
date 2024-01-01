import { StrictMode } from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import Counter from './App';
import store from './reducers/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
);

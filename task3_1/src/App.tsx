
import './App.css';
import { Counter } from './components/class/Class';
import { CounterApp } from './components/functional/Counter';


function App() {
    return (
        <div className="App">
            <Counter message='Count: '/>
            <CounterApp/>
        </div>
    );
}

export default App;

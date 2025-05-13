// import logo from './logo.svg';
import './App.css';
// import Car from "./components/GreetFun";
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <header className="">
        <h1>React Task Day 01</h1>
      </header> */}
      <div className='parent'>
        {/* <Car count = {counter}/> */}
        <TodoApp addTodo/>
      </div>
    </div>
    
  );
}

export default App;

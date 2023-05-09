import logo from './logo.svg';
import './App.css';
import "./add.png";

function App() {
  return (
    <div className="App">

      <h1 className='title-heading'>Task Manager List</h1>
      <div className='container'>
        <div className='task-list '>
          <li>hello</li>
          <li>hi</li>
          <li>Hey</li>
          <li>hie</li>


        </div>
      </div>
      <div className='task-grp'>
      <input type="text" className='task-input' placeholder="Enter Task"/>
      <img src="add.png" className='task-add' alt="img"/>
      </div>
    </div>


  );
}

export default App;

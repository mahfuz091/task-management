import { NavLink } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <>
      <header>
        <h2 className='text-center text-2xl '>Task Management</h2>
        <nav>
          <li>
            <NavLink to='/addTask'>Add Task</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Tasks />
      </main>
    </>
  );
}

export default App;

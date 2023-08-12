import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Dialog from './components/Dialog';

function App() {
  const [count, setCount] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setDialogOpen(true)}>Open dialog</button>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={console.log}
      >
        <p>Choose a username:</p>
        <input name="username" type="text" />
        <button value="cancel">Cancel</button>
        <button>Confirm</button>
      </Dialog>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

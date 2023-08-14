import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Dialog from './components/Dialog';

function App() {
  const [count, setCount] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpen2, setDialogOpen2] = useState(false);
  const [dialogOpen3, setDialogOpen3] = useState(false);
  const [dialogOpen4, setDialogOpen4] = useState(false);

  const [lastAnswer, setLastAnswer] = useState<string | null>(null);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {lastAnswer !== null ? (
        <p>
          Your last answer was <code>{lastAnswer.toString()}</code>
        </p>
      ) : null}

      <div className="card">
        <button onClick={() => setDialogOpen(true)}>Open text dialog</button>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={setLastAnswer}
        confirmText="Confirm"
        cancelText="Cancel"
      >
        <p>Choose a username:</p>
        <input name="dialogInput" type="text" />
      </Dialog>

      <div className="card">
        <button onClick={() => setDialogOpen2(true)}>
          Open checkbox dialog
        </button>
      </div>
      <Dialog
        open={dialogOpen2}
        onClose={() => setDialogOpen2(false)}
        onSubmit={setLastAnswer}
        confirmText="Let's see"
        cancelText="Nah..."
      >
        <p>Answer this honestly:</p>
        <label htmlFor="dialogInput">Is this working?</label>
        <input type="checkbox" name="dialogInput" />
      </Dialog>

      <div className="card">
        <button onClick={() => setDialogOpen3(true)}>Open radio dialog</button>
      </div>
      <Dialog
        open={dialogOpen3}
        onClose={() => setDialogOpen3(false)}
        onSubmit={setLastAnswer}
        confirmText="Let's see"
        cancelText="Nah..."
      >
        <p>Best part:</p>
        <input type="radio" id="html" name="dialogInput" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="dialogInput" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="dialogInput"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>
      </Dialog>

      <div className="card">
        <button onClick={() => setDialogOpen4(true)}>
          Open datetime-local dialog
        </button>
      </div>
      <Dialog
        open={dialogOpen4}
        onClose={() => setDialogOpen4(false)}
        onSubmit={setLastAnswer}
        confirmText="Let's see"
        cancelText="Nah..."
      >
        <p>Best time in recent memory was:</p>
        <input type="datetime-local" name="dialogInput" />
      </Dialog>
    </>
  );
}

export default App;

import { useState } from 'react';
import Header from './components/Header/Header';
import Income from './components/Income/Income';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [active, setActive] = useState(0);

  const activeHandler = (tabId) => {
    setActive(tabId);
  };

  return (
    <div className='app-position'>
      <div className='app-wrapper'>
        <Navigation activeTab={active} activeHandler={activeHandler} />
        <div className="card">
          <Header />
          {active === 0 && <Income />}
          {active === 1 && <h1>Income details view</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;

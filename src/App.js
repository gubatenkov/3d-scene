import Spline from '@splinetool/react-spline';

import scene from './scenes/scene2.splinecode';

import './App.css';

function App() {
  return (
    <div className="app">
      <Spline scene={scene} />
    </div>
  );
}

export default App;

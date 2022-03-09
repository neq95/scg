import React from 'react';
import {Routes, Route} from 'react-router-dom';

import GuiPage from './pages/Gui';

import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/gui" element={<GuiPage />} />
      </Routes>
    </div>
  );
}

export default App;

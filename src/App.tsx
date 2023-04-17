import React from 'react';
import './App.css';

import { notification, Button } from 'antd';

function App() {

  return (
    <div className="App">
        <p>
          toy project to trigger ant design notification for visual regression test
        </p>
        <Button onClick={() => notification.info({message: 'Hello antd notification', duration: null, placement: 'topLeft'})}>
          open notification
        </Button>
    </div>
  );
}

export default App;

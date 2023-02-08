import cn from 'classnames'
import styles from './App.module.css';

import React from 'react';

const App = () => {
  return (
      <h1 className={cn(styles.header,styles.text)}>
        hello world
      </h1>
  );
};

export default App;
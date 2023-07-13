import React from 'react';
import { ScrollHeader } from './components/ScrollHeader';
import { SelectionComponents } from './components/SelectionComponents';
import FooterButtons from './components/FooterButtons';

function App() {
  return (
    <div className='body'>
      <ScrollHeader />
      <SelectionComponents />
      <FooterButtons />
    </div>
  );
}

export default App;

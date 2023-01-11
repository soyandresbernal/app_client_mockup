import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Mej</h1>
      <Navbar></Navbar>
      <Header></Header>
      <Aboutus></Aboutus>
      <specialMenu></specialMenu>
      <Chef></Chef>
      <intro></intro>
      <laureles></laureles>
      <Gallery></Gallery>
      <Findus></Findus>
      <Footer></Footer>
    </div>
  );
}

export default App;

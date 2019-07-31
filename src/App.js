import React from 'react';
import Gallery from './components/imageGallery'
import Navbar from './components/navbar'
import Dropdown from './components/dropDown'
import ChangeImage from './components/movePicture'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ChangeImage/>
      <Gallery perRow={5} count={100}/>
    </div>
  );
}

export default App;

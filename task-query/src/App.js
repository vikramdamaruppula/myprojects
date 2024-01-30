import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import RadioButtons from './Components/RadioButtons';

import './App.css';
import PostLists from './Components/PostLists';
import Post from './Components/Post';
import EditPost from './Components/EditPost';
import Radios2 from './Components/Radios2';

function App() {

  return (
    
    <div className="App">
      
      {/* <RadioButtons /> */}
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<PostLists />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/:id/edit' element={<EditPost />} />
          <Route path='/radioButtons' element={<RadioButtons />} />
          <Route path='/radios2' element={<Radios2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

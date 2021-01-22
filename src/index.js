import React, {useState} from 'react';
import { render } from 'react-dom';
import FilerobotImageEditor from './App';


const App = () => {
  const src = 'https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg';
  const [show, toggle] = useState(false);


  return (
    <div>
      {/* <img src={src} onClick={() => { toggle(true) }} alt="example image" style={{ maxWidth: '100%' }}/> */}

      <FilerobotImageEditor
        show={true}
        src={'https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg'}
        // onClose={() => { toggle(false) }}
        // onOpen={() => console.log('Editor is opened.')}
        // onComplete={(props) => { console.log(props) }}
        // onBeforeComplete={(props) => { console.log(props); return false; }}
      />
    </div>
  )
};

render(<App/>, document.getElementById('app'));
import './App.css';
import React, {useState} from 'react';

const GIFS = [ 'https://media4.giphy.com/media/PmLSyM6uVcY0na0yiZ/200w.webp?cid=ecf05e47humah3cyz11ps0e4xjdkyuh1icgj3pp2j4mrrkv6&rid=200w.webp&ct=g',
 'https://media0.giphy.com/media/wzWxTUiXRQDYc/giphy.webp?cid=ecf05e477x9vl9gtzs1sflni8c6rr36um6cd47lmq5ot69gm&rid=giphy.webp&ct=g'];
function App() {
  const [gifs, updateGif] = useState([GIFS])
  
  return (
    <div className="App">
      <section className="App-content">
      {
          gifs.map((aGif, index) => <img key={index} src={aGif}/>)
      }
      </section>
    </div>
  );
}

export default App;

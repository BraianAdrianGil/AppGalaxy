import { useState } from 'react';
import './App.css';
import data from "./assets/json/data.json";
import Card from './components/card/Card';
import Button from './components/button/Button';
import 'boxicons';
import image1 from './assets/images/image-1.jpeg';
import image2 from './assets/images/image-2.jpeg';
import image3 from './assets/images/image-3.jpeg';
import image4 from './assets/images/image-4.jpeg';

const spaceImages = [image1, image2, image3, image4];

function App() {
  const [currentData, setCurrentData] = useState(data[Math.floor(Math.random() * data.length)]);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(Math.floor(Math.random() * spaceImages.length));

  const handleChangeData = () =>{
    setCurrentData(data[Math.floor(Math.random() * data.length)]);
    setCurrentBackgroundImage(Math.floor(Math.random() * spaceImages.length))
  }

  return (
    <div className="App" style={{backgroundImage: `url(${spaceImages[currentBackgroundImage]})`}}>
      <h1>INFOGALAX</h1>
      <div className='description__container'>
      <Card data={currentData} />
      <Button onClick={handleChangeData} />
      </div>
      <p className="source__of__information"><span>Fuente: </span><a href="{currentData.author}" target="_blank">{currentData.author}</a></p>
    </div>
  );
}

export default App;
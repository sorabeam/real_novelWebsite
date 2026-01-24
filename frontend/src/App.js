import logo from './Sample_User_pic.jpg';
import VWicon from './VisitWebsite.png';
import { useEffect, useState } from "react";
import data from './NovelDek-D.json';
import './App.css';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { createItem, deleteItem } from "./RAPI.js"

function Buttom({rdata1,item1,setReload}) {

  return (
    <div className="InventoryFrame">
    {item1.map(item => (
        <div className="BlockElement" key={item._id}>
          <img src={item.VImg} className="Poster" alt="logo" />

          <div className='NovelInfo'>
            <h3 className="NovelTitle" > {item.title} </h3> 

            <div className='NovelsubTitle'>
              <h5 className="InfoText" > {item.Author} </h5>
              <h5 className="InfoText" > {item.View} </h5>
              <h5 className="InfoText" > {item.Notification} </h5>
            </div>

          </div>
          
          <button className='VWbutton' onClick={() => Navigation(rdata1,item,setReload)} style={{
            outline: 'none',
            border: 'none',
            boxShadow: 'none'
          }} >
            <img className='VWicon' src={VWicon} alt="" />
          </button>
        </div>
      ))}
    </div>
);}

function Navigation(rdata1,item,setReload){
  if (!rdata1.some(i => i._id === item._id)) {
    createItem(item);
    setReload(r => !r);
  }
  window.open(item.Url, '_blank', 'noopener,noreferrer');
}

function SlideShow(){
  return(
  <Swiper modules={[Autoplay]} slidesPerView="auto" spaceBetween={16} autoplay={{ delay: 2000 }} speed={1200} loop={true}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="hero">
              <img src={item.Image} className="Block-Img" alt="404 Imgage Not Found" />
              </div>
            </SwiperSlide>
          ))}
  </Swiper>
);}

function deleteSomething(item,setReload){
  deleteItem(item);
  setReload(r => !r);
}

function ReadingListLoader({rdata1,setReload}){

  console.log(rdata1);
  return(
    <div className="ReadingFrame">
      {rdata1.map((item, index) => (
        <div key = {item._id} className="ReadingList"> 

          <img src={item.VImg} className="Poster" alt="logo" />

          <h3 className="ReadingTitle" > {item.title} </h3> 

          <button className='VWbutton' onClick={() => deleteSomething(item,setReload) } style={{
            outline: 'none',
            border: 'none',
            boxShadow: 'none'
            }} >
            <img className='VWicon' src="/images/Remove.png" alt="" />
          </button>

        </div>
        ))}
    </div>
);}

function App() {

  const UserName = "Supakorn";
  const [items, setItems] = useState([]);
  const [rdatas, setRdata] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));

      fetch("http://localhost:5000/rdata")
      .then(res => res.json())
      .then(data => setRdata(data))
      .catch(err => console.error(err));
  }, [reload]);

  console.log(items);

  return (
    <div className="App">

      <header className="App-header">
          <img src={logo} className="ProfilePicture" alt="logo" />
          <p className="Text" > {UserName} </p>
          <a 
          className="App-link" 
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>

      <div className='SlideShowContainier'>
        <SlideShow />
      </div>

      <div className="BottomArea">

        <div className="BookMark">
                <Buttom rdata1 = {rdatas} item1={items} setReload= {setReload}/>
        </div>

        <div className="ReadBox">
                <ReadingListLoader rdata1 = {rdatas} setReload = {setReload}/>
        </div>

      </div>
    </div>
  );
}


export default App;

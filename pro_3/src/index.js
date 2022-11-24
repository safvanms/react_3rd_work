import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './index.css';
import data from './data';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {

const cards = data.map(item =>{
   return (
      <Card
      key = {item.id}
      {...item}
   />
   )
})

   return (
      <div >
         <Navbar />
         <Hero />
         <section className="cards-list">
        {cards}
         </section>
      </div>
   )
};

ReactDOM.render(<App />, document.getElementById('root'));
import React, { useState, useEffect } from 'react';

// import './animation.css';

function Hero() {
  let [h1, setH1] = useState('');
  let [para, setPara] = useState('');
  let [h3, setH3] = useState('');
  let [visitor, setVisitor] = useState('');

  useEffect(() => {
    setInterval(() => {
      setH1('Molu House');
    }, 5000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setPara('a house of Chai, Coffee & Dosti');
    }, 6000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setH3(` Cafe `);
    }, 7000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setVisitor(' 15% off for the first Visitor Everyday');
    }, 8000);
  }, []);
  return (
    <section className="hero">
      <div className="hero-section">
        <h1 id="hero-h1">{h1}</h1>
        {/* <p>a house of Chai, Coffee & Dosti</p> */}
        <p>{para}</p>
        {/* <h3>
          Cafe <i className="fas fa-coffee"></i>
        </h3>
        <p>15% off for the first Visitor Everyday</p> */}
        <h3>
          {h3}
          <i className="fas fa-coffee"></i>
        </h3>
        <p>{visitor}</p>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ResponsiveCarousel() {
  return (
    <div>
      <div className="carousel-container">
        <Carousel
          infiniteLoop
          autoPlay
          useKeyboardArrows
          centerMode
          dynamicHeight
        >
          <div>
            <img
              src={require('../../assets/satellite.jpeg')}
              alt="galaxy taken by space telescope"
            />
            <div>
              <p className="legend">Satellite Tracker 1.0</p>
            </div>
          </div>
          <div>
            <img
              src={require('../../assets/ratemyplaylist.jpeg')}
              alt="deejay setup neon"
            />
            <p className="legend">RateMyPlaylist</p>
          </div>
          <div>
            <img
              src={require('../../assets/runbuddy.jpeg')}
              alt="runner on trail"
            />
            <p className="legend">RunBuddy</p>
          </div>
          <div>
            <img
              src={require('../../assets/weatherdash.jpeg')}
              alt="city bus in snow"
            />
            <p className="legend">Weather Dashboard</p>
          </div>
          <div>
            <img
              src={require('../../assets/readmegen.jpeg')}
              alt="blurry code on monitor screen"
            />
            <p className="legend">README.md Generator</p>
          </div>
          <div>
            <img
              src={require('../../assets/budgettracker.jpeg')}
              alt="phone showing investments"
            />
            <p className="legend">Budget Tracker</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

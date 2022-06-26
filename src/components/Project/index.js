import React from 'react';
import ResCarousel from '../ResCarousel';

function Project() {
  return (
    <section className="bg-isabelline" id="project">
      <h3 className="font-light md:text-7xl sm:text-5xl text-sapphire md:py-24 sm:p-8 m-auto">
        Projects
      </h3>
      <ResCarousel />
      <ul className="font-light text-smoky">
        <li className="my-2">
          <h4 className="md:px-4 sm:px-2 md:text-3xl sm:text-xl">
            Satellite Tracker 1.0
          </h4>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Track the satellites in the sky above with Satellite Tracker 1.0
          </p>
          <a
            href="https://github.com/Zurdoc8/satellite_tracker1.0"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
          <a
            href="https://zurdoc8.github.io/satellite_tracker1.0/"
            className="sm:p-1 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            Site
          </a>
        </li>

        <li className="my-2">
          <h4 className="md:px-4 sm:px-2 md:text-3xl sm:text-1xl">
            RateMyPlaylist
          </h4>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Upload and share your playlists with the world with RMP
          </p>
          <a
            href="https://github.com/jwhitney2209/rate-my-playlist"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
          <a
            href="https://protected-garden-77743.herokuapp.com/"
            className="sm:p-1 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            Site
          </a>
        </li>
        <li className="my-2">
          <h1 className="md:px-4 sm:px-2 md:text-3xl sm:text-xl">Run Buddy</h1>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Visit the creator's early career at RunBuddy
          </p>
          <a
            href="https://github.com/pixiepucker/run-buddy"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
          <a
            href="https://pixiepucker.github.io/run-buddy/"
            className="sm:p-1 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            Site
          </a>
        </li>
        <li className="my-2">
          <h1 className="md:px-4 sm:px-2 md:text-3xl sm:text-xl">
            Weather Dashboard
          </h1>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Check the weather in your favorite city with The Weather Dashboard
          </p>
          <a
            href="https://github.com/pixiepucker/weather-ch6"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
          <a
            href="https://pixiepucker.github.io/weather-ch6/"
            className="sm:p-1 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            Site
          </a>
        </li>
        <li className="my-2">
          <h1 className="md:px-4 sm:px-2 md:text-3xl sm:text-xl">
            README.md Generator
          </h1>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Never write a README.md again with this generator application
          </p>
          <a
            href="https://github.com/pixiepucker/readme-generator"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
        </li>
        <li>
          <h1 className="md:px-4 sm:px-2 md:text-3xl sm:text-xl">
            Budget Tracker
          </h1>
          <p className="md:px-4 sm:px-2 md:text-2xl sm:text-xl">
            Log your cash, debts, and more with Budget Tracker
          </p>
          <a
            href="https://github.com/pixiepucker/PWA-BudgetTracker"
            className="md:p-4 sm:p-2 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            GitHub
          </a>
          <a
            href="https://young-anchorage-05330.herokuapp.com/"
            className="sm:p-1 md:text-2xl sm:text-xl text-indigo font-normal"
          >
            Site
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Project;

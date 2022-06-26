import React, { useState } from 'react';
import ContactForm from '../Contact';

function Resume() {
  const [active, setActive] = useState(false);

  return (
    <div
      id="resume"
      className="flex flex-wrap justify-between p-12 text-smoky bg-isabelline"
    >
      <div>
        <h3 className="md:text-7xl sm:text-5xl font-light">Resume</h3>
        <a
          className="text-white inline-block px-6 py-2.5 bg-indigo font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo/80 hover:shadow-lg focus:bg-indigo/70 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo/80 active:shadow-lg"
          href="https://drive.google.com/file/d/1FxI_dQElZUXYyBKyyOBatuhIZVY7GQBK/view?usp=sharing"
        >
          Download PDF copy!
        </a>

        <div className="md:my-8 sm:my-4">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-indigo">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  onClick={() => setActive(!active)}
                  className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-smoky text-left
                  bg-indigo/10
                    border-0
                    rounded-none
                    md:text-2xl
                    sm:text-xl
                "
                  type="button"
                >
                  Technologies
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
              >
                {active && (
                  <div className="accordion-body py-4 px-5">
                    <h3 className="font-light md:text-xl sm:text-lg">
                      Languages:
                    </h3>
                    <p>Javascript/HTML/CSS, SQL, NoSQL, GraphQL</p>

                    <h3 className="font-light md:text-xl sm:text-lg">
                      Libraries and Frameworks:
                    </h3>
                    <p>
                      Node.js, Express.js, React.js, Mongoose ORM, MongoDB,
                      JAWSDB, MariaDB, Sequelize ORM, Handlebars.js, Bulma,
                      TailwindCSS, Bootstrap
                    </p>

                    <h3 className="font-light md:text-xl sm:text-lg">Tools:</h3>
                    <p>GitHub, Git, Heroku, VSCode, NPM</p>
                  </div>
                )}
              </div>
            </div>
            <div className="accordion-item bg-white border border-indigo">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button
                  onClick={() => setActive(!active)}
                  className="
                  accordion-button
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-smoky text-left
                  bg-indigo/10
                  border-0
                  rounded-none
                  md:text-2xl
                  sm:text-xl
      "
                  type="button"
                >
                  Projects
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                {active && (
                  <div className="accordion-body py-4 px-5">
                    <ul>
                      <li>
                        <h4 className="font-light underline">
                          Satellite Tracker 1.0
                        </h4>
                        <p>
                          Built for the purpose of tracking 4 of the most
                          popular satellites currently in orbit as well as
                          providing inspiration to astro-photographers through
                          the use of third party APIs. Responsible for building
                          frontend and accomplished this by learning and using a
                          new CSS framework. Supported team by providing
                          feedback and reviewing backend functionality. Site was
                          built with standard HTML/CSS/JavaScript as well as
                          Bulma and jQuery.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-light underline">RateMyPlaylist</h4>
                        <p>
                          Built in order for people to share their Spotify
                          playlists with the world and have them voted on. Items
                          are organized on the home page by the “Hot Playlists”
                          section and a user’s newly added playlists.
                          Responsible for frontend design through implementation
                          of new CSS framework and templating. Supported team
                          through constant communication and reviewed all
                          incoming commits. Site was built with
                          HTML/CSS/JavaScript, MySQL, Sequelize, JAWSDB, dotenv,
                          Express.js, Handlebars.js, and Tailwind CSS. Imbedded
                          playlists were implemented through Spotify’s Embedded
                          Player code and site was deployed using Heroku.
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default Resume;

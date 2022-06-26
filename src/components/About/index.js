import React from 'react';

function About() {
  return (
    <section className="bg-isabelline space-y-8" id="about">
      <h2 className="md:text-9xl sm:text-7xl text-indigo font-light px-5 py-16 text-center">
        {'['} Hello, there ... {']'}
      </h2>

      <div className="text-center block mx-11">
        <h3 className="md:text-6xl sm:text-4xl font-light300 p-2">
          I'm Autumn, a freelance full-stack developer and designer focused on
          cultivating exciting online experiences for a range of clientele.
        </h3>
        <p className="md:text-4xl sm:text-2xl font-light mb-2">
          Available for Projects /{' '}
          <span className="uppercase font-light text-sapphire">
            Connect Today
          </span>
        </p>
      </div>

      <div className="mx-4 p-10 md:flex md:flex-wrap md:justify-self-auto sm:justify-center">
        <img
          src={require('../../assets/sm-avatar.png')}
          className="block rounded-full mx-auto w-auto h-auto"
          alt="avatar of creator autumn cain"
        />
        <p className="md:text-3xl sm:text-xl text-left mt-10 p-6">
          I'm fueled by a passion for projects that span cultures and
          forward-thinking. A 'forever student,' I am constantly furthuring the
          skills I have and am always looking for new development technologies.
          Taking on new projects and continuing coursework helps me stay
          connected to up and coming design concepts. I currently live in San
          Antonio, Texas, USA, but I'm always looking to connect globally!
        </p>
      </div>
    </section>
  );
}

export default About;

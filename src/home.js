import React from 'react';
import Header from './header';
import HelloSection from './helloSection';
import AboutSection from './aboutSection';
import ProjectsSection from './projectsSection';
import ConnectSection from './connectSection';
import SkillsSection from './skillsSection';

const Home = () => {

    return (
        <>
          <Header />
          <HelloSection />
          <AboutSection />
          <div className='lineGroup'>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
          </div>
          <SkillsSection />
          <div className='lineGroup'>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
          </div>
          <ProjectsSection />
          <div className='lineGroup'>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
            <div className='connectLines'></div>
          </div>
          <ConnectSection />
        </>
      );
}



export default Home;
import React from 'react';
import styled from 'styled-components';
import codeImage from '../assets/code.jpg';
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaReact,
  FaAngular,
  FaJava,
  FaWordpress,
} from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSpringboot,
} from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';

const Stack = () => {
  return (
    <Wrapper id='stack'>
      <div className='container'>
        <h2>Stack</h2>
        <div className='stack-icons' data-aos='fade-up' data-aos-delay='200'>
          <FaHtml5 title='Html5' />
          <FaCss3 title='Css3' />
          <FaBootstrap title='Bootstrap' />
          <FaSass title='Sass' />
          <SiTailwindcss title='TailwindCSS' />
          <SiJavascript title='JavaScript' />
          <SiTypescript title='TypeScript' />
          <GrNode title='Node.js' />
          <FaReact title='React' />
          <FaAngular title='Angular' />
          <FaJava title='Java' />
          <SiSpringboot title='Spring Boot' />
          <BiGitBranch title='Git' />
          <SiPostgresql title='Postgresql' />
          <FaWordpress title='WordPress' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url(${codeImage});
  background-size: cover;
  position: relative;

  h2 {
    font-size: 2.5rem;
    border-bottom: 10px solid var(--primary-color);
  }

  .container {
    padding: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 4rem;
  }

  ::after {
    content: '';
    z-index: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .stack-icons {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 3rem;
    max-width: 38rem;
    font-size: 4rem;
  }

  @media (min-width: 992px) {
    .stack-icons {
      font-size: 5rem;
    }
  }
`;

export default Stack;

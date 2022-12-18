import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../image/hero-bcg.png';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          find your <br />
          productive tools
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          suscipit iste a vero aut ullam adipisci modi? Ducimus, inventore
          dolorem.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="productive person" className="main-img" />
        {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 450px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    // .img-container::before {
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   background: var(--clr-primary-9);
    //   bottom: -10%;
    //   left: -6%;
    //   border-radius: var(--radius);
    // }
  }
`;

export default Hero;

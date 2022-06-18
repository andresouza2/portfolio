import { colors } from './../../style/variables';
import styled from "styled-components";

export const Main = styled.main`
  max-width: 1020px;
  width: calc(100% - 250px);
  margin: 0 auto;

  h2 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.amarelo};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 628px;
  background-color: ${({ theme }) => theme.colors.preto};
  display: flex;
  margin: 0 auto;

  .hero {
    max-width: 1020px;
    width: calc(100% - 250px);
    display: flex;
    margin: 0 auto;

    .container__hero {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .container__hero__texto {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
        margin: 0 auto;

        & h1 {
          font-size: 65px;
          text-align: left;
          color: ${props => props.theme.colors.amarelo};
          margin-top: 50px;
          margin-bottom: 10px;
        }

        & h2 {
          font-size: 20px;
          font-family: 'Roboto';
          font-weight: 100;
          text-align: left;
          color: ${({ theme }) => theme.colors.branco};
          margin-bottom: 50px;
        }
      }
    }
    img {
      width: 50%;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px;

    .hero {
      width: 90%;
    }
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */

    .hero {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      .container__hero, img {
        width: 90%;
        margin-bottom: 50px;

        .container__hero__texto {
          width: 100%;
          padding: 0;

          h1 {
            font-size: 50px;
            text-align: left;
          }

          h2 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export const Sobre = styled.div`
  width: 100%;
  margin: 50px auto 80px;

  & p {
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.25em;
    text-align: center;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 2.5em;

    & p {
      font-size: 1em;
    }
  }
`;

export const Projetos = styled.div`

  h2 {
    margin: 60px auto;
  }

  .container__card {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 425px) {
    .container__card {
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const SoftSkills = styled.div`
  width: 100%;
  height: auto;
  margin: 50px auto 0;

  .soft__icons {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(100px);
    justify-items: center;
    gap: auto;

    svg {
      width: 97px;
      height: 97px;
      margin: 20px auto 50px;
    }
  }

  @media screen and (max-width: 425px) {
    .soft__icons {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(100px);
    justify-items: center;

    svg {
      width: 97px;
      height: 97px;
      margin: 20px auto 50px;
    }
  }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.preto};
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.borderBG};
  border-radius: 8px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.branco};
    font-size: 1.5em;
    font-family: 'Roboto Slab', sans-serif;
  }
`;

/* export const Download = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2.5em;
`; */



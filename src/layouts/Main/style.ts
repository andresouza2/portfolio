import styled from "styled-components";

export const Main = styled.main`
  .container {
    max-width: 1200px;
    width: calc(100% - 50px);
    margin: 0 auto;

    .imgPrincipal {
      width: 100%;
      height: 80vh;
      margin: 0 auto;
      display: flex;

      img {
        width: 50%;
      }

      .download {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        margin: 50px auto;
      }

      h2 {
        text-align: center;
      }

      p {
        text-align: justify;
      }
    }

    h1, h2 {
      text-align: center;
      margin-bottom: 2.5em;
    }

    .container__card {
      width: 800px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    .btn_download {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span svg {
      font-size: 5em;
      margin: 10px auto;
      }
    }
  }

`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.button};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
    font-family: 'Roboto Slab', sans-serif;
  }
`;

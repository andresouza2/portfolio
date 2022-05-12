import styled from "styled-components";

export const Main = styled.main`
  .container {
    max-width: 1200px;
    width: calc(100% - 50px);
    margin: 0 auto;

    h2 {
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
  }
`;

export const Hero = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  margin: 2.5em auto;

  img {
    width: 50%;
    margin: 0 1em;
  }

  .containerSobreMim {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2em;
    }

    .sobreMim {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;

      h2 {
        font-size: 2em;
      }

      p {
        margin: 0 2em;
        text-indent: 4em;
        text-align: justify;
        font-size: 1.05em;
      }

      button {
        width: 200px;
        height: 45px;
        margin: 0 auto;
        background-color: ${props => props.theme.colors.button};
        border: none;
        border-radius: 8px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2em;
          font-family: 'Roboto Slab', sans-serif;
        }
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

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
    font-family: 'Roboto Slab', sans-serif;
  }
`;

export const Download = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2.5em;
`;

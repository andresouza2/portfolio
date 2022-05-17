import { colors } from './../../style/variables';
import styled from "styled-components";


export const Footer = styled.div`

  width: 100%;
  height: auto;
  background-color: ${props => props.theme.colors.preto};

  .icons {
    width: 315px;
    height: auto;
    margin: 0 auto 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & a {
      text-decoration: none;
    }

    & svg {
      width: 60px;
      height: 60px;
      margin: 20px auto auto;
      color: ${props => props.theme.colors.branco};
    }

  }
  & h2 {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1.25em;
    font-weight: 300;
  }

@media screen and (max-width: 425px) {
  width: 100%;
  .icons {
    width: 200px;
    & svg {
      width: 40px;
      height: 40px;
    }
  }
  & h2 {
    width: auto;
    font-size: 1em;
  }
}
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 50%;

  .card {
    width: auto;
    height: 100%;
    margin: 0 20px 20px;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.5;
      transition: transform .5s ease;
    }

    &:hover img {
        opacity: 1;
        transform: scale(1.025);
      }

    .middle {
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      transition: .5s ease;
    }

    &:hover .middle {
        opacity: 0.1;
      }
    p {
      color: #fcfcfc;
      font-family: 'Roboto Slab', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
    }
  }

@media screen and (max-width: 425px) {
  width: calc(100% - 5px);
  margin: 0 auto;
}
`;

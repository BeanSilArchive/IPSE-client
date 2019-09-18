import styled from "styled-components";
import oc from "open-color";

import { ReactComponent as Img1 } from "asset/info_image_1.svg";
import { ReactComponent as Img2 } from "asset/notice_image_2.svg";
import { ReactComponent as Img3 } from "asset/qna_image_1.svg";

import test1 from "asset/test1.png";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  color: ${oc.gray[9]};

  /* background-image: url(${test1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const ContentDiv = styled.div`
  margin: auto 0;
  box-sizing: border-box;
  display: block;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const Heading = styled.span`
  font-size: 3.5rem;
  font-family: "Do Hyeon";
  margin: 0;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;`
      : ``}

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SubHeading = styled.h2`
  opacity: 0;
  margin: 0.5rem;
  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;`
      : ``};
`;

export const DownLoadLink = styled.a`
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 2rem;
  font-weight: 600;
  width: 20rem;
  height: 3.5rem;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${oc.gray[9]};
  letter-spacing: 2px;
  opacity: 0;

  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    background-color: ${oc.gray[9]};
    color: ${oc.gray[0]};
  }

  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1s;`
      : ``}
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 2rem;
  font-weight: 600;
  width: 20rem;
  height: 3.5rem;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${oc.gray[9]};
  letter-spacing: 2px;
  opacity: 0;

  &:hover {
    background-color: ${oc.gray[9]};
    color: ${oc.gray[0]};
  }

  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 1s;`
      : ``}
`;

export const DateDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  font-family: "Do Hyeon";
  animation-name: MoveUp;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;

  padding-bottom: 15px;

  @keyframes MoveUp {
    0% {
      opacity: 0;
      padding-top: 15px;
      padding-bottom: 0px;
    }
    50% {
      opacity: 0;
      padding-top: 15px;
      padding-bottom: 0px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
      padding-bottom: 15px;
    }
  }
`;

export const ImageDiv = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: MoveUpImage;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;`
      : ``}

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 30px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
    }
  }
`;

export const SvgImage1 = styled(Img1)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .avatar {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;

    @keyframes FadeInItems {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
      }
    }
  }
  
  .desc {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }

  .person {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
  }

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const SvgImage2 = styled(Img2)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  ${props =>
    props.scroll
      ? `
    .check1 {
      animation-name: FadeInItems;
      animation-timing-function: ease-in;
      animation-duration: 0.6s;

      @keyframes FadeInItems {
        0% {
          opacity: 0;
        }
        60% {
          opacity: 0;
        }
        100% {
        }
      }
    }
    .check2 {
      animation-name: FadeInItems;
      animation-timing-function: ease-in;
      animation-duration: 0.9s;
    }

    .check3 {
      animation-name: FadeInItems;
      animation-timing-function: ease-in;
      animation-duration: 1.2s;
    }

    .check4 {
      animation-name: FadeInItems;
      animation-timing-function: ease-in;
      animation-duration: 1.5s;
    }`
      : ``}

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const SvgImage3 = styled(Img3)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  ${props =>
    props.scroll
      ? `
      .person {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 0.6s;

        @keyframes FadeInItems {
          0% {
            opacity: 0;
          }
          60% {
            opacity: 0;
          }
          100% {
          }
        }
      }
      .board {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 0.9s;
      }

      .head {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 1.2s;
      }

      .desc {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 1.5s;
      }`
      : ``}

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

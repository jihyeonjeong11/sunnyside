import styled from "styled-components";
import {MobileButtonProps, CardContentTextProps, CartTitleTextProps} from 'styled-components';

export const MobileButton = styled.button<MobileButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0;
  }
`;

export const ContactBtn = styled.button`
  background-color: rgb(255,255,255);
  padding: 1rem 2rem;
  border: 0;
  border-radius: 100vmax;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    background-color: rgb(243, 213, 72);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    color:rgb(255,255,255);
  }
`;

export const CreativeText = styled.p<{letterspacing:string}>`
  font-weight: 600;
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : "0.3rem")};
  padding: 4rem 0;
  color: white;
  font-family: "Fraunces", serif;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  font-size:4.5rem;
`;

export const CardTitleText =styled.h2<CartTitleTextProps>`
  font-family: "Fraunces", serif;
  text-align: center;
  

  margin: ${({ margin }) => (margin ? margin : "0")};
  color: ${({ color }) => (color ? color : "black")};
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : "0.3rem")};
  font-weight: 900;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "3.5rem")};
  @media screen and (max-width: 768px) {
    font-size: ${({ smfontsize, fontsize }) => (smfontsize ? smfontsize : fontsize ? fontsize : "1.55rem")};
    margin-bottom: ${({ smmargin }) => (smmargin ? smmargin : 0)};


  }
`;

export const CardContentText = styled.p<CardContentTextProps>`
  overflow: auto;
  display: block;
  margin-block-start : 0;
  margin-block-end: 0;
  font-family: 'Barlow', sans-serif;
  text-align: ${({ textalign }) => (textalign ? textalign : "left")};

  font-size: ${({ fontsize }) => (fontsize ? fontsize : "2rem")};
  line-height:${({ lineheight }) => (lineheight ? lineheight : "1.5rem")};
  font-weight: ${({fontweight}) => fontweight ? fontweight : 500};
  color: ${({ color }) => (color ? color : "black")};
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};

  @media screen and (max-width: 768px) {
    font-size: ${({ smfontsize, fontsize }) => (smfontsize ? smfontsize : fontsize ? fontsize : "2rem")};

  }

  @media screen and (min-width: 768px) {
    font-size: ${({ lgfontsize, fontsize }) => (lgfontsize ? lgfontsize : fontsize ? fontsize : "0.9rem")};
  }



`;

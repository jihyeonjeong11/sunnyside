import styled from "styled-components";
import Image from "next/future/image";
import {ContainerProps, FlexProps, GridProps, BackgroundProps, AbsoluteDivProps, HeaderMenuProps, RelativeProps, TextCardProps, NextImgProps} from 'styled-components'


export const Container = styled.div<ContainerProps>`
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : 0)};
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "1440px")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  @media screen and (min-width: 768px) {
    padding: ${({ lgpadding, padding }) => (lgpadding ? lgpadding : padding)};
    margin: ${({ lgmargin, margin }) => (lgmargin ? lgmargin : "0 auto")};
    width: ${({ width, lgwidth }) => (lgwidth ? lgwidth : width)};
    height: ${({ height, lgheight }) => (lgheight ? lgheight : height)};
  }
`;

export const Flex = styled.div<FlexProps>`
  padding: ${({ padding }) => (padding ? padding : "0")};
  text-align: center;
  flex: ${({ flex }) => (flex ? flex : "0")};
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "0")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")}${({ reverse }) => reverse && "-reverse"};
  justify-content: ${({ justify }) => (justify ? justify : "unset")};
  align-items: ${({ align }) => (align ? align : "unset")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  color: ${({ color }) => (color ? color : "inherit")};

  @media screen and (min-width: 768px) {
    gap: ${({ lggap, gap }) => (lggap ? lggap : gap)};
    flex-direction: ${({ lgdirection, direction }) =>
        lgdirection ? lgdirection : direction}${({ lgreverse }) =>
        lgreverse && "-reverse"};
    justify-content: ${({ justify, lgjustify }) =>
      lgjustify ? lgjustify : justify};
    align-items: ${({ align, lgalign }) => (lgalign ? lgalign : align)};
  }
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ count }) => (count ? count : 1)}, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(
      ${({ lgcount, count }) => (lgcount ? lgcount : count)},
      1fr
    );
  }
`;

export const Background = styled.div<BackgroundProps>`
  background: ${({ background }) => (background ? background : "unset")};
`;

export const TextCardDiv = styled.article`
  width: 100%;
  height: auto;
  flex-basis: 50%;

  @media screen and (min-width: 768px) {
  }
`;

export const Relative = styled.div<RelativeProps>`
  position: relative;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "0")};
`;
export const AbsoluteDiv = styled.div<AbsoluteDivProps>`
  position: absolute;
  top: ${({ top }) => (top ? top : "auto")};
  left: ${({ left }) => (left ? left : "auto")};
  right: ${({ right }) => (right ? right : "auto")};
  bottom: ${({ bottom }) => (bottom ? bottom : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  @media screen and (min-width: 768px) {
    top: ${({ lgtop, top }) => (lgtop ? lgtop : top ? top : "auto")};
    bottom: ${({ lgbottom, bottom }) =>
      lgbottom ? lgbottom : bottom ? bottom : "auto"};
  }
`;

export const NextImg = styled(Image)<NextImgProps>`
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  width: ${({ imgwidth }) => (imgwidth ? imgwidth : "auto")};
  height: ${({ imgheight }) => (imgheight ? imgheight : "auto")};
  border-radius: ${({ borderradius }) => (borderradius ? borderradius : 0)};
  display: ${({ display }) => (display ? display : "block")};
  @media screen and (min-width: 768px) {
    display: ${({ lgdisplay }) => (lgdisplay ? lgdisplay : "block")};
  }
`;

export const HeaderMenus = styled.ul<HeaderMenuProps>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "0")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  font-weight: 600;
  font-size: 1.1rem;
  li {
    color: white;
  }
  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 6rem);
    min-height: 350px;
    gap: 3rem;
    top: 5rem;
    right: 1.5rem;
    background-color: white;
    border-top: 15px solid white;
    border-right: 15px solid white;
    padding: 10px 0 25px 15px;
    margin-bottom: 15px;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    li a {
      color: grey;
    }
    &::after {
      content: "";
      border-width: 0 0 1.5rem 1.5rem;
      border-color: transparent transparent white transparent;
      border-style: solid;
      top: -0.5rem;
      right: -1.5rem;
      position: absolute;
      transform: translateY(-100%);
    }
  }
`;

export const Nav = styled.nav``;

export const TextCard = styled.div<TextCardProps>`
  text-align: center;
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};

  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;

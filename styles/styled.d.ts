import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      purple: "#8661de";
      blue: "#00bac7";
      gray: "#f6f6f6";
      green: "#07b495";
      lightGreen: "#99ecdd";
      darkGray: "#54595d";
    };
    boxShadow: {
      normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
  export interface ContainerProps {
    padding?: string;
    flexBasis?: string;
    margin?: string;
    maxwidth?: string;
    width?: string;
    height?: string;
    lgpadding?: string;
    lgmargin?: string;
    lgwidth?: string;
    lgheight?: string;
  }
  
  export interface BackgroundProps {
    background?: string;
  }
  
  export interface GridProps {
    display?: string;
    count?: string;
    lgcount?: string;
  }
  
  
  
  export interface FlexProps {
    padding?: string;
    flex?: string;
    display?: string;
    gap?: string;
    direction?: string;
    justify?: string;
    align?: string;
    height?: string;
    width?: string;
    color?: string;
    reverse?: string;
    lggap?: string;
    lgdirection?: string;
    lgjustify?: string;
    lgalign?: string;
    lgreverse?: string;
    textalign?: string;
  }
  
  export interface RelativeProps {
    width?: string;
    height?: string;
    flexBasis?: string;
  }
  
  
  export interface AbsoluteDivProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    width?: string;
    height?: string;
    lgtop?: string;
    lgbottom?: string;
    
  }
  
  export interface TextCardProps {
    margin?: string;
    padding?: string;
  }
  
  export interface HeaderMenuProps {
    open: boolean;
    gap?: string;
  }
  
  
  export interface NextImgProps {
    imgwidth?: string;
    imgheight?: string;
    padding?: string;
    margin?: string;
    borderradius?: string;
    display?: string;
    lgdisplay?: string;
    layout?: string;
  }
  
  export interface CartTitleTextProps {
    margin?: string;
    color?: string;
    letterspacing?: string;
    fontsize?: string;
    textalign?: string;
    fontweight?: string;
    smfontsize?: string;
    smmargin?: string;
  
  }
  
  export interface CardContentTextProps {
    lineheight ?: string;
    textalign?: string;
    fontsize?: string;
    fontweight?: string;
    color?: string;
    letterspacing?: string;
    padding?: string;
    lgfontsize?: string;
    smfontsize?: string;
    smmargin?: string;
  }
  
  export interface MobileButtonProps {
    onClick: () => void;
  }
}


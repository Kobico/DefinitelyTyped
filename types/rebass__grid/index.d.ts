// Type definitions for @rebass/grid 6.0
// Project: https://github.com/rebassjs/grid
// Definitions by: Anton Vasin <https://github.com/antonvasin>
//                 Victor Orlov <https://github.com/vittorio>
//                 Louis Hache <https://github.com/lhache>
//                 Adam Lavin <https://github.com/lavoaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

import { ComponentType } from "react";
import { StyledComponent, Interpolation } from "styled-components";

export type ResponsiveProp = number | string | Array<string | number>;

export interface CommonProps {
    width?: ResponsiveProp;
    fontSize?: ResponsiveProp;
    color?: ResponsiveProp;
    bg?: ResponsiveProp;
    m?: ResponsiveProp;
    mt?: ResponsiveProp;
    mr?: ResponsiveProp;
    mb?: ResponsiveProp;
    ml?: ResponsiveProp;
    mx?: ResponsiveProp;
    my?: ResponsiveProp;
    p?: ResponsiveProp;
    pt?: ResponsiveProp;
    pr?: ResponsiveProp;
    pb?: ResponsiveProp;
    pl?: ResponsiveProp;
    px?: ResponsiveProp;
    py?: ResponsiveProp;
    theme?: any;
    css?: Interpolation<any>;
}

export interface BoxProps
    extends Omit<React.ComponentPropsWithRef<'div'>, "color" | "is">, CommonProps {
    flex?: ResponsiveProp;
    order?: ResponsiveProp;
    is?: string | ComponentType<any>;
    alignSelf?: ResponsiveProp;
}

export interface FlexProps extends BoxProps {
    alignItems?: ResponsiveProp;
    justifyContent?: ResponsiveProp;
    flexDirection?: ResponsiveProp;
    flexWrap?: ResponsiveProp;
}

export type BoxComponent = StyledComponent<
    React.ForwardRefExoticComponent<Partial<BoxProps>>,
    any
>;

export type FlexComponent = StyledComponent<
    React.ForwardRefExoticComponent<Partial<FlexProps>>,
    any
>;

export interface Theme {
    breakpoints: string[];
    space?: number[];
    fontSizes?: number[];
}

export const Box: BoxComponent;
export const Flex: FlexComponent;
export const theme: Theme;
export const div: ComponentType<React.HTMLProps<HTMLDivElement>>;

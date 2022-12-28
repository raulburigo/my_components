export declare const styled: <Type extends import("react").ComponentType<any> | import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements, Composers extends (string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        primary: string;
        primaryText: string;
        secondary: string;
        secondaryText: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        round: string;
    };
    fontWeights: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        primary: string;
        primaryText: string;
        secondary: string;
        secondaryText: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        round: string;
    };
    fontWeights: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, createTheme: <Argument0 extends string | ({
    colors?: {
        gray1?: string | number | boolean | undefined;
        gray2?: string | number | boolean | undefined;
        gray3?: string | number | boolean | undefined;
        gray4?: string | number | boolean | undefined;
        gray5?: string | number | boolean | undefined;
        gray6?: string | number | boolean | undefined;
        gray7?: string | number | boolean | undefined;
        gray8?: string | number | boolean | undefined;
        gray9?: string | number | boolean | undefined;
        gray10?: string | number | boolean | undefined;
        gray11?: string | number | boolean | undefined;
        gray12?: string | number | boolean | undefined;
        primary?: string | number | boolean | undefined;
        primaryText?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        secondaryText?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {} | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    borderWidths?: {} | undefined;
    borderStyles?: {} | undefined;
    shadows?: {} | undefined;
    zIndices?: {} | undefined;
    transitions?: {} | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        gray1?: string | number | boolean | undefined;
        gray2?: string | number | boolean | undefined;
        gray3?: string | number | boolean | undefined;
        gray4?: string | number | boolean | undefined;
        gray5?: string | number | boolean | undefined;
        gray6?: string | number | boolean | undefined;
        gray7?: string | number | boolean | undefined;
        gray8?: string | number | boolean | undefined;
        gray9?: string | number | boolean | undefined;
        gray10?: string | number | boolean | undefined;
        gray11?: string | number | boolean | undefined;
        gray12?: string | number | boolean | undefined;
        primary?: string | number | boolean | undefined;
        primaryText?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        secondaryText?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {} | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    borderWidths?: {} | undefined;
    borderStyles?: {} | undefined;
    shadows?: {} | undefined;
    zIndices?: {} | undefined;
    transitions?: {} | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
            gray8: string;
            gray9: string;
            gray10: string;
            gray11: string;
            gray12: string;
            primary: string;
            primaryText: string;
            secondary: string;
            secondaryText: string;
        };
        fonts: {
            sans: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        radii: {
            1: string;
            2: string;
            3: string;
            round: string;
        };
        fontWeights: unknown;
        lineHeights: unknown;
        letterSpacings: unknown;
        borderWidths: unknown;
        borderStyles: unknown;
        shadows: unknown;
        zIndices: unknown;
        transitions: unknown;
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        primary: string;
        primaryText: string;
        secondary: string;
        secondaryText: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        round: string;
    };
    fontWeights: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string;

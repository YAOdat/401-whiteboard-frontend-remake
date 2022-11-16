import { extendTheme } from "@chakra-ui/react";

 const theme = extendTheme( {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },

    color: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
    },
    lineHeights: {
        normal: "normal",
        none: "1",
        shorter: "1.25",
        short: "1.375",
        base: "1.5",
    },

    styles: {
        global: {
            "html, body": {
                color: "gray.600",
                bg: "gray.100",
                lineHeight: "base",
            },
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
            p: {
                fontSize: "lg",
            },
        },
    },

});

export default theme;
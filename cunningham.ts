const config = {
  themes: {
    default: {
      theme: {
        colors: {
          "primary-text": "#000091",
          "primary-100": "#ECECFE",
          "primary-150": "#F4F4FD",
          "primary-200": "#E3E3FD",
          "primary-300": "#CACAFB",
          "primary-400": "#8585F6",
          "primary-500": "#6A6AF4",
          "primary-600": "#313178",
          "primary-700": "#272747",
          "primary-800": "#000091",
          "primary-900": "#21213F",
          "secondary-text": "#fff",
          "secondary-100": "#fee9ea",
          "secondary-200": "#fedfdf",
          "secondary-300": "#fdbfbf",
          "secondary-400": "#e1020f",
          "secondary-500": "#c91a1f",
          "secondary-600": "#5e2b2b",
          "secondary-700": "#3b2424",
          "secondary-800": "#341f1f",
          "secondary-900": "#2b1919",
          "greyscale-text": "#303C4B",
          "greyscale-000": "#fff",
          "greyscale-050": "#F6F6F6",
          "greyscale-100": "#eee",
          "greyscale-200": "#E5E5E5",
          "greyscale-250": "#ddd",
          "greyscale-300": "#CECECE",
          "greyscale-350": "#ddd",
          "greyscale-400": "#929292",
          "greyscale-500": "#7C7C7C",
          "greyscale-600": "#666666",
          "greyscale-700": "#3A3A3A",
          "greyscale-750": "#353535",
          "greyscale-800": "#2A2A2A",
          "greyscale-900": "#242424",
          "greyscale-950": "#1E1E1E",
          "greyscale-1000": "#161616",
          "success-text": "#1f8d49",
          "success-100": "#dffee6",
          "success-200": "#b8fec9",
          "success-300": "#88fdaa",
          "success-400": "#3bea7e",
          "success-500": "#1f8d49",
          "success-600": "#18753c",
          "success-700": "#204129",
          "success-800": "#1e2e22",
          "success-900": "#19281d",
          "info-text": "#0078f3",
          "info-100": "#E8EDFF",
          "info-200": "#DDE5FF",
          "info-300": "#BCCDFF",
          "info-400": "#518FFF",
          "info-500": "#0078F3",
          "info-600": "#0063CB",
          "info-700": "#273961",
          "info-800": "#222A3F",
          "info-900": "#1D2437",
          "warning-text": "#d64d00",
          "warning-100": "#fff4f3",
          "warning-200": "#ffe9e6",
          "warning-300": "#ffded9",
          "warning-400": "#ffbeb4",
          "warning-500": "#d64d00",
          "warning-600": "#b34000",
          "warning-700": "#5e2c21",
          "warning-800": "#3e241e",
          "warning-900": "#361e19",
          "danger-text": "#FFF",
          "danger-100": "#FFE9E9",
          "danger-200": "#FFDDDD",
          "danger-300": "#FFBDBD",
          "danger-400": "#FF5655",
          "danger-500": "#F60700",
          "danger-600": "#CE0500",
          "danger-700": "#642626",
          "danger-800": "#412121",
          "danger-900": "#391C1C",
        },
        font: {
          sizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            ml: "0.938rem",
            xl: "1.25rem",
            t: "0.6875rem",
            s: "0.75rem",
            h1: "2rem",
            h2: "1.75rem",
            h3: "1.5rem",
            h4: "1.375rem",
            h5: "1.25rem",
            h6: "1.125rem",
            "xl-alt": "5rem",
            "lg-alt": "4.5rem",
            "md-alt": "4rem",
            "sm-alt": "3.5rem",
            "xs-alt": "3rem",
          },
          weights: {
            thin: 100,
            extrabold: 800,
            black: 900,
          },
          families: {
            accent: "Marianne",
            base: "Marianne",
          },
          logo: {
            src: "/assets/logo-gouv.svg",
            widthHeader: "110px",
            widthFooter: "220px",
            alt: "Gouvernement Logo",
          },
        },
        spacings: {
          "0": "0",
          none: "0",
          auto: "auto",
          bx: "2.2rem",
          full: "100%",
          "4xs": "0.125rem",
          "3xs": "0.25rem",
          "2xs": "0.375rem",
          xs: "0.5rem",
          sm: "0.75rem",
          base: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          xxl: "3rem",
          xxxl: "3.5rem",
          "4xl": "4rem",
          "5xl": "4.5rem",
          "6xl": "6rem",
          "7xl": "7.5rem",
        },
        breakpoints: {
          xxs: "320px",
          xs: "480px",
        },
        logo: {
          src: "",
          widthHeader: "",
          widthFooter: "",
          alt: "",
        },
      },
      components: {
        button: {
          "medium-height": "40px",
          "medium-text-height": "40px",
          "border-radius": "4px",
          primary: {
            "background--color": "var(--c--theme--colors--primary-text)",
            "background--color-hover": "#1212ff",
            "background--color-active": "#2323ff",
            "background--color-disabled":
              "var(--c--theme--colors--greyscale-100)",
            color: "#fff",
            "color-hover": "#fff",
            "color-active": "#fff",
            "color-focus-visible": "#fff",
            disabled: "var(--c--theme--colors--greyscale-500)",
          },
          "primary-text": {
            "background--color": "var(--c--theme--colors--primary-text)",
            "background--color-hover": "var(--c--theme--colors--greyscale-100)",
            "background--color-active": "var(--c--theme--colors--primary-100)",
            "background--color-focus-visible": "#fff",
            "background--color-disabled":
              "var(--c--theme--colors--greyscale-000)",
            color: "var(--c--theme--colors--primary-800)",
            "color-hover": "var(--c--theme--colors--primary-800)",
            disabled: "var(--c--theme--colors--greyscale-400)",
          },
          secondary: {
            "background--color-hover": "#F6F6F6",
            "background--color-active": "#EDEDED",
            "background--color-focus-visible":
              "var(--c--theme--colors--greyscale-000)",
            "background--disabled": "var(--c--theme--colors--greyscale-000)",
            color: "var(--c--theme--colors--primary-800)",
            "border--color": "var(--c--theme--colors--greyscale-300)",
            "border--color-hover": "var(--c--theme--colors--greyscale-300)",
            "border--color-disabled": "var(--c--theme--colors--greyscale-300)",
            disabled: "var(--c--theme--colors--greyscale-400)",
          },
          tertiary: {
            "background--color": "var(--c--theme--colors--primary-100)",
            "background--color-focus-visible":
              "var(--c--theme--colors--primary-100)",
            "background--color-hover": "var(--c--theme--colors--primary-300)",
            "background--color-active": "var(--c--theme--colors--primary-300)",
            "background--disabled": "var(--c--theme--colors--primary-050)",
            color: "var(--c--theme--colors--primary-800)",
            disabled: "var(--c--theme--colors--primary-300)",
          },
          "tertiary-text": {
            "background--color-hover": "var(--c--theme--colors--greyscale-100)",
            "color-hover": "var(--c--theme--colors--primary-text)",
            color: "var(--c--theme--colors--primary-600)",
          },
          danger: {
            "color-hover": "white",
            "background--color": "var(--c--theme--colors--danger-600)",
            "background--color-hover": "#FF2725",
            "background--color-focus-visible":
              "var(--c--theme--colors--danger-600)",
            "background--color-disabled":
              "var(--c--theme--colors--greyscale-100)",
            "color-disabled": "var(--c--theme--colors--greyscale-400)",
          },
        },
        datagrid: {
          "header--color": "ref(theme.colors.greyscale-600)",
          "header--size": "12px",
          "header--weight": "500",
          "body--background-color-hover": "ref(theme.colors.greyscale-100)",
        },
        "forms-checkbox": {
          "border-radius": "4px",
          "border-color": "var(--c--theme--colors--primary-800)",
          "background-color--hover": "var(--c--theme--colors--greyscale-100)",
          "border--color-disabled": "var(--c--theme--colors--greyscale-200)",
          "border--color": "var(--c--theme--colors--primary-800)",
          "background--disabled": "var(--c--theme--colors--greyscale-200)",
          "background--enable": "var(--c--theme--colors--primary-800)",
          "check--disabled": "var(--c--theme--colors--greyscale-300)",
          "check--enable": "var(--c--theme--colors--greyscale-000)",
          color: "var(--c--theme--colors--primary-text)",
          "label--color": "var(--c--theme--colors--greyscale-1000)",
          "label--size": "var(--c--theme--font--sizes--sm)",
          "label--weight": "500",
          "text--color": "var(--c--theme--colors--greyscale-600)",
          "text--size": "var(--c--theme--font--sizes--s)",
          "text--weight": "400",
          "text--color-disabled": "var(--c--theme--colors--greyscale-300)",
        },
        "forms-labelledbox": {
          "label-color--small": "ref(theme.colors.greyscale-950)",
          "label-color--small--disabled": "ref(theme.colors.greyscale-300)",
          "label-color--big": "ref(theme.colors.greyscale-950)",
          "label-color--big--disabled": "ref(theme.colors.greyscale-300)",
        },
        "forms-radio": {
          "border-color": "var(--c--theme--colors--primary-800)",
          "background-color": "var(--c--theme--colors--greyscale-000)",
          "accent-color": "var(--c--theme--colors--primary-800)",
          "accent-color-disabled": "var(--c--theme--colors--greyscale-300)",
        },
        "forms-switch": {
          "border--color-disabled": "var(--c--theme--colors--greyscale-300)",
          "border--color": "var(--c--theme--colors--primary-800)",
          "handle-background-color": "white",
          "handle-background-color--disabled":
            "var(--c--theme--colors--greyscale-000)",
          "rail-background-color--disabled":
            "var(--c--theme--colors--greyscale-000)",
          "accent-color": "var(--c--theme--colors--primary-800)",
        },
        "forms-textarea": {
          "label-color--focus": "ref(theme.colors.greyscale-1000)",
          "border-radius": "4px",
          "border-color": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--hover": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--focus": "ref(theme.colors.primary-800)",
          "value-color": "ref(theme.colors.greyscale-950)",
          "value-color--disabled": "ref(theme.colors.greyscale-300)",
          "font-size": "14px",
        },
        "forms-input": {
          "label-color--focus": "ref(theme.colors.greyscale-1000)",
          "border-radius": "4px",
          "border-color": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--hover": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--focus": "ref(theme.colors.primary-800)",
          "value-color": "ref(theme.colors.greyscale-950)",
          "value-color--disabled": "ref(theme.colors.greyscale-300)",
          "font-size": "14px",
        },
        "forms-select": {
          "label-color--focus": "ref(theme.colors.greyscale-1000)",
          "item-font-size": "14px",
          "border-radius": "4px",
          "border-radius-hover": "4px",
          "border-color": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--hover": "ref(theme.colors.greyscale-400)",
          "box-shadow--color--focus": "ref(theme.colors.primary-800)",
          "value-color": "ref(theme.colors.greyscale-950)",
          "font-size": "14px",
        },
      },
    },
  },
};

export default config;

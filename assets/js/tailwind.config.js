tailwind.config = {
    theme: {
        extend: {
            colors: {
                'light-blue': '#00BFFF',
                'blue': '#00A4FF',
                'green': '#01D61B',
                'light-green': '#3bff00',
                'off-black': '#29333A',
                'off-white': '#f6f6f6',
            },
            fontSize: {
                'custom-sm': '19px',
                'custom-md': '22px',
                'custom-lg': '28px',
                'custom-5xl': '50px',
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'oxygen': ['Oxygen', 'sans-serif'],
                'oxanium': ['Oxanium', 'sans-serif'],
                'lato': ['lato', 'sans-serif'],
            },
            lineHeight: {
                '117': '117%',
                '120': '120%',
                '127': '127%',
                '130': '130%',
                '140': '140%',
                '150': '150%',
                '192': '192%',
            },
            boxShadow: {
                "common_shadow": "0px 4px 25px 0px #00BFFF",
                "common_shadow_mobile": "0px 4px 11px 0px #00BFFF",
                "heading": "0px 1.33px 33.3px 0px #FFFFFF",
            },
            screens: {
                'xxs': '370px',
                'xs': '520px',
              },
        }
    },
};


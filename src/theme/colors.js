const colors = {
    main : '#F52A2A',
    white:'#fff',
    dark: '#000',
    // red: '#F52A2A',
    light: '#F1F1F1',
    green: '#00B761',
    lightGrey: '#D8D9DA',
    deepGray : '#E1F0D7',
    deepstGray : 'C4C4C4',
    subGreen : '#EEFAE6',
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
};
export default colors
const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    red: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    orange: (opacity = 1) => `rgba(252, 165, 3, ${opacity})`,
    green: (opacity = 1) => `rgba(27, 128, 1, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
    darkred: (opacity = 1) => `rgba(139, 5, 0, ${opacity})`,
    firebrick: (opacity = 1) => `rgba(178, 34, 33, ${opacity})`,
  }
export default colors
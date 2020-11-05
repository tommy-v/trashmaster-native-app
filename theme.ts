import { DefaultTheme } from '@react-navigation/native';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4BD492',
    background: 'black',
    text: 'white',
    // gray: 'gray',
    notification: 'red',
  },
};

export default AppTheme;

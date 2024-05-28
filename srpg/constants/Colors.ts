/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
export const colorDefaults =  { light: '#A1CEDC', dark: '#154360' }
export const Colors = {
  light: {
    text:  '#154360',
    label:'#154360',
    highlight: '#5DADE2',
    highlight_alt:'#F39C12',
    background:'#5DADE2',
    tabBackground:'#A9CCE3',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#fff',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    highlight: '#5DADE2',
    highlight_alt:'#F39C12',
    background: '#194775',
    tabBackground:'#003366',
    tint: tintColorDark,
    icon: '#fff',
    label:'#F39C12',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

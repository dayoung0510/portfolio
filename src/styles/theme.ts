const device = {
  mobile: '(max-width: 500px)',
  // labtop: '(min-width: 501px) and (max-width: 1300px)',
}

const myColor = {
  main: '#546de5',
  light: '#778beb',
  deep: '#3146ad',
  gray1: '#ececec',
  gray2: '#cccccc',
  gray3: '#acacac',
  gray4: '#949494',
  gray5: '#797979',
  gray6: '#5f5f5f',
  gray7: '#4b4b4b',
  gray8: '#333333',
  gray9: '#202020',
}

export const theme = {
  myColor,
  device,
}

export type Theme = typeof theme

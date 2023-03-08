const device = {
  mobile: '(max-width: 500px)',
  // labtop: '(min-width: 501px) and (max-width: 1300px)',
}

const color = {
  main: '#546de5',
  light: '#778beb',
  deep: '#3146ad',
  beige: '#ebe4cd',
  beige2: '#c0bcab',
  gray: '#ececec',
  gray2: '#cccccc',
  gray3: '#acacac',
  gray4: '#949494',
  gray5: '#797979',
  gray6: '#5f5f5f',
  gray7: '#4b4b4b',
  gray8: '#333333',
  gray9: '#202020',
}

const border = {
  md: `border: 5px solid ${color.gray9}; border-radius: 15px;`,
}

const dot = {
  beige: `background-image: radial-gradient(${color.beige2} 1px, transparent 0); background-size: 10px 10px;`,
}

export const theme = {
  color,
  device,
  border,
  dot,
}

export type Theme = typeof theme

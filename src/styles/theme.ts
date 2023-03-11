export const mobileSize = 500

const device = {
  mobile: `(max-width: ${mobileSize}px)`,
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
  gray8: '#202020',
  gray9: '#111111',
}

const border = {
  sm: `border: 3px solid ${color.gray9}; border-radius: 15px;`,
  md: `border: 4px solid ${color.gray9}; border-radius: 15px;`,
  text: `text-shadow: 1px 1px ${color.gray};`,
  boxShdow: `box-shadow: 4px 4px ${color.gray9};`,
}

const bg = {
  dot: `background-image: radial-gradient(${color.gray4} 0.75px, transparent 0); background-size: 5px 5px;`,
}

export const theme = {
  color,
  device,
  border,
  bg,
}

export type Theme = typeof theme

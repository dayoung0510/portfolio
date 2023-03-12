export const mobileSize = 500

const device = {
  mobile: `(max-width: ${mobileSize}px)`,
}

const color = {
  main: '#546de5',
  light: '#778beb',
  deep: '#3146ad',
  gray: '#dcdcdc',
  gray2: '#dddddd',
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
  dot2: `background-image: radial-gradient(${color.gray5} 0.75px, transparent 0); background-size: 3px 3px;`,
  dot3: `background-image: radial-gradient(${color.main} 1px, transparent 0); background-size: 10px 10px;`,

  slash: `background-image: linear-gradient(
    -45deg,transparent,transparent 25%, ${color.gray4} 25%, ${color.gray4} 50%,transparent 50%,transparent 75%, ${color.gray4} 75%);
  background-size: 7px 7px;`,
}

export const theme = {
  color,
  device,
  border,
  bg,
}

export type Theme = typeof theme

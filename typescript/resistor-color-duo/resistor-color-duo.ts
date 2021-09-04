export function decodedValue(colors: string[]) : number {
  if (colors.length < 2) {
    throw new Error('At least two colors need to be present');
  }
  return ((COLORS.indexOf(colors[0]) * 10 )+ COLORS.indexOf(colors[1]));
}

export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
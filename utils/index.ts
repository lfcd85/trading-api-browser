export const convertCamelCaseToCapitalizedCase = (text: string): string => {
  const result = text.replace(/([A-Z])/g, ' $1')
  return (result.charAt(0).toUpperCase() + result.slice(1))
    .split(' ')
    .map((word) => (upperCaseWords.includes(word) ? word.toUpperCase() : word))
    .join(' ')
}

export const convertSnakeCaseToCapitalizedCase = (text: string): string =>
  text
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .map((word) => (upperCaseWords.includes(word) ? word.toUpperCase() : word))
    .join(' ')

export const upperCaseWords = ['Id']

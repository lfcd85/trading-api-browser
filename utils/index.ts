import { capitalCase } from 'change-case'

export const convertToCapitalCase = (text: string): string =>
  capitalCase(text)
    .split(' ')
    .map((word) => (upperCaseWords.includes(word) ? word.toUpperCase() : word))
    .join(' ')

export const upperCaseWords = ['Id']

export const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

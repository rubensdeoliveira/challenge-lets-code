export const makeApiUrlHelper = (path: string): string =>
  `${process.env.NEXT_PUBLIC_API_URL ?? ''}${path}`

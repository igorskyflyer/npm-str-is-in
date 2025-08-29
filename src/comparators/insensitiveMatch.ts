// Author: Igor Dimitrijević (@igorskyflyer)

export const insensitiveMatchFull = (entry: string, value: string) =>
  entry.toLowerCase() === value.toLowerCase()

export const insensitiveMatchPartial = (
  entry: string,
  value: string
): boolean => entry.toLowerCase().indexOf(value.toLowerCase()) > -1

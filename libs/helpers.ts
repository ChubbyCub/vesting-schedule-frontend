export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const fetcher = async (url: string, options?: Record<string, unknown>) => {
  const response = await fetch(url, {...options});
  const json = await response.json();
  return json;
}

export const formatDate = (input: string): string => {
  const date = new Date(input);
  return new Intl.DateTimeFormat('en-US', {month: 'long', day: '2-digit', year: 'numeric'}).format(date);
}

export const formatNumShares = (input: string): string => {
  const numShares = parseFloat(input);
  return new Intl.NumberFormat('en-US').format(numShares);
}
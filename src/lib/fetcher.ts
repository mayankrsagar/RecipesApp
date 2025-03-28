// lib/fetcher.ts
export const fetcher = <T,>(url: string): Promise<T> =>
    fetch(url).then((res) => res.json());
  
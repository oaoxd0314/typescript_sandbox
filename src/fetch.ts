import fetch from 'node-fetch';

export default class Service{
  async request<T>(url: string): Promise<T> {
    return await fetch(url)
      .then((response) => response.json() as T)
  }
} 
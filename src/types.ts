declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
    }>;
  }
}

export {};

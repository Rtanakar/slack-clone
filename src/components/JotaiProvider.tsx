"use client";

import { Provider } from "jotai";

interface JotaiProviderProps {
  children: React.ReactNode;
}

function JotaiProvider({ children }: JotaiProviderProps) {
  return <Provider>{children}</Provider>;
}

export default JotaiProvider;

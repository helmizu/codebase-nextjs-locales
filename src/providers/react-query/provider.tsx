"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "@/helpers/query-client";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(queryClientConfig);

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}

import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Router from "./Router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { FactureProvider } from "./context/FactureContext";

const queryClient = new QueryClient();
function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <FactureProvider>
            <Router />
          </FactureProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";

import router from "@/router.jsx";
import theme from "@/styles/theme.js";
import GlobalStyle from "@/styles/GlobalStyle.js";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 1 * 60 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log(error, query);
      },
    }),
  });

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <HelmetProvider>
          <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </StyledThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </JotaiProvider>
  );
}

export default App;

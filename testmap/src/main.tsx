import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ConfigProvider from "antd/es/config-provider";
import { componentsPrimaryTheme, primaryTheme } from "./styles/primaryTheme";
import Router from "./router/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider
    theme={{
      token: primaryTheme,
      components: componentsPrimaryTheme,
    }}
  >
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </ConfigProvider>
);

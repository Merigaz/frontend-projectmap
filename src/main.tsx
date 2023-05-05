import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ConfigProvider from "antd/es/config-provider";
import { componentsPrimaryTheme, primaryTheme } from "./styles/primaryTheme";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from "./router/router";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider 
      theme={{
        token: primaryTheme,
        components: componentsPrimaryTheme,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ConfigProvider>
  </Provider>
);

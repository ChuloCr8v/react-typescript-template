import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./redux/store";
import { Loading } from "./components/Loading";
import PageError from "./components/PageError";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#0A96CC",
                },
                components: {
                  Form: {
                    itemMarginBottom: 16,
                  },
                  Input: {
                    activeBg: "inherit",
                  },
                },
              }}
            >
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </ConfigProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

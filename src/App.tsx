import { ChakraProvider } from "@chakra-ui/provider";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/theme";
import { Router } from "./router/Router";
import { Fonts } from "./organisms/layout/fonts";
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <AnimatePresence exitBeforeEnter initial={true}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AnimatePresence>
      </RecoilRoot>
    </ChakraProvider>
  );
}

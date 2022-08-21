import { ChakraProvider, Text } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <DarkModeSwitch />
    </ChakraProvider>
  );
}

export default MyApp;

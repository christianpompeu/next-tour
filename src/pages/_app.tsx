import { ChakraProvider, Container, Text } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Container height="100vh">
        <DarkModeSwitch />
        <Footer>
          <Text>Next ❤️ Chakra</Text>
        </Footer>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;

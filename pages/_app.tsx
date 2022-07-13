import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { NavigationBar } from "../components/Navigation/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

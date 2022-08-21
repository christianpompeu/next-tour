import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Container from "../components/Container";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

export default function Custom404() {
  return (
    <Container>
      <Hero title="lascou | 404" />
      <Main align="center">
        <Link href="/" passHref>
          <a>
            <Button
              bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
              textColor="white"
            >
              Voltar para home
            </Button>
          </a>
        </Link>
      </Main>
    </Container>
  );
}

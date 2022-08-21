import { Flex, Heading } from "@chakra-ui/react";

interface HeroProps {
  title: string | string[];
}

export function Hero({ title }: HeroProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  );
}

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};

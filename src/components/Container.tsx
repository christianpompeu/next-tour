import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="gray.50"
      color="black"
      _dark={{
        bg: "gray.900",
        color: "white",
      }}
      transition="all 0.15s ease-out"
      // {...props}
    >
      {props.children}
    </Flex>
  );
}

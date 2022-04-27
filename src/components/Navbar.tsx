import { Container, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <Flex as="header"
      py="4"
      bg="purple.600"
      color="white"
    >
      <Container maxW={1180}>
        <Logo />
      </Container>
    </Flex>
  )
}
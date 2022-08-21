import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Container from "../../components/Container";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";

function Posts() {
  return (
    <Container>
      <Hero title="Lista de posts" />
      <Main>
        <Link href="/posts/post1" passHref>
          <a>
            <Heading>Post 1</Heading>
          </a>
        </Link>
        <Link href="/posts/post2" passHref>
          <a>
            <Heading>Post 2</Heading>
          </a>
        </Link>
        <Link href="/posts/post3" passHref>
          <a>
            <Heading>Post 3</Heading>
          </a>
        </Link>
      </Main>
    </Container>
  );
}

export default Posts;

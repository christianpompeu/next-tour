import { useRouter } from "next/router";
import Container from "../../components/Container";
import { Hero } from "../../components/Hero";

function Post() {
  const router = useRouter();
  // console.log(router);
  return (
    <Container>
      <Hero title={router.query.id} />
    </Container>
  );
}

export default Post;

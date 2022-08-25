import Container from "../../components/Container";
import { Hero } from "../../components/Hero";
import axios from "axios";
import { Image } from "@chakra-ui/react";

export async function getStaticPaths() {
  const paths = [
    { params: { name: "carrinho" } },
    { params: { name: "dtmoney" } },
  ];

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const name = context.params.name;
  const repository = await axios
    .get(`https://api.github.com/repos/christianpompeu/${name}`)
    .then((response) => {
      return response.data;
    });
  return {
    props: {
      id: repository.id,
      node_id: repository.node_id,
      full_name: repository.full_name,
      avatar_url: repository.owner.avatar_url,
    }, // will be passed to the page component as props
  };
}

function Post(props) {
  // const router = useRouter();
  return (
    <Container>
      <Hero title={`Id do post: ${props.id}`} />
      <Image boxSize="100px" borderRadius="full" src={props.avatar_url} />
    </Container>
  );
}

export default Post;

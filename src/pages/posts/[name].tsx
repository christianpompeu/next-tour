import Container from "../../components/Container";
import { Hero } from "../../components/Hero";
import axios from "axios";

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
  var data = {};
  const repository = await axios
    .get(`https://api.github.com/repos/christianpompeu/${name}`)
    .then((response) => {
      data = response.data;
    });
  return {
    props: {
      id: data.id,
      node_id: data.node_id,
      full_name: data.full_name,
      avatar_url: data.owner.avatar_url,
      full_name: data.full_name,
    }, // will be passed to the page component as props
  };
}

function Post(props) {
  // const router = useRouter();
  return (
    <Container>
      <Hero title={`Id do post: ${props.id}`} />
    </Container>
  );
}

export default Post;

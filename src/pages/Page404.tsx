import Layout from "../organisms/layout/article";
import { useHistory } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Center,
} from "@chakra-ui/react";

export const Page404 = () => {
  const history = useHistory();
  const onClickHome = () => history.push("/");
  return (
    <Container>
      <Layout title="404">
        <Heading as="h1">Not Found</Heading>
        <Text>The page you&apos;re looking for was not found</Text>
        <Divider my={6} />

        <Center my={6}>
          <Button colorScheme="teal" onClick={onClickHome}>
            Return to Home
          </Button>
        </Center>
      </Layout>
    </Container>
  );
};

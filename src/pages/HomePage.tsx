import {
  Container,
  Box,
  Heading,
  Center,
  Image,
  Divider,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Layout from "../organisms/layout/article";
import { ModelCanvas } from "../components/3D/Canvas";

import profile from "../images/saboro.jpg";
import { Avatar } from "../molecules/Avatar";
import ScrollRevealContainer from "../molecules/ScrollRevealContainer";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <div>
      <Layout title="Home">
        <Center>
          <Box h="250px" w="250px">
            <ModelCanvas />
          </Box>
        </Center>
        {/* <ScrollRevealContainer {0.2}> */}
        <Center>
          <Container>
            <Stack>
              <Box display={{ md: "flex" }} textAlign="center">
                <Box flexGrow={1}>
                  <Heading as="h2" variant="page-title">
                    Takuya Ishida
                  </Heading>
                  <Box textAlign="center">(Web Full-Stack-Engineer)</Box>
                </Box>
              </Box>
              <Avatar />
            </Stack>
            <Box mt={10}>
              <VhStylesComponent>
                <Center>
                  <ScrollRevealContainer>
                    <VStack mt={20}>
                      <Text
                        fontSize={{ base: "lg", md: "3xl" }}
                        variant="ScrollRevealContainer-title"
                        fontFamily="mono"
                        as="em"
                      >
                        最高だ、
                      </Text>
                      <Text
                        fontSize={{ base: "lg", md: "3xl" }}
                        variant="ScrollRevealContainer-title"
                        fontFamily="mono"
                        as="em"
                      >
                        と心から思えるものを作りたい。
                      </Text>
                    </VStack>
                  </ScrollRevealContainer>
                </Center>
              </VhStylesComponent>
              <Center>
                <Stack>
                  <ScrollRevealContainer>
                    <Box>
                      <Stack spacing={2}>
                        <Text textAlign="center">
                          「自分が作ったものなんて◯ソだと思ったほうがいい。」
                        </Text>
                      </Stack>
                    </Box>
                    <Box pt={2}>
                      <Stack spacing={2}>
                        <Text textAlign="center">
                          デザイナーのエライ人が言ってた。
                        </Text>
                        <Text textAlign="center">本当にその通りだと思う。</Text>
                      </Stack>
                    </Box>
                    <Box pt={6}>
                      <Text textAlign="center">
                        これはいいコード書けたな…。とおもっても
                      </Text>
                      <Text textAlign="center">
                        次の瞬間にはボコボコにされてる。
                      </Text>
                    </Box>
                  </ScrollRevealContainer>
                  <ScrollRevealContainer>
                    <Box pt={24}>
                      <Text textAlign="center">でも</Text>
                    </Box>

                    <Box pt={3}>
                      <Text textAlign="center">
                        これならどうだ、じゃあこれならと書き続けて
                      </Text>
                      <Text textAlign="center">毎日ボコボコにされて</Text>
                    </Box>
                  </ScrollRevealContainer>

                  <ScrollRevealContainer>
                    <Box pt={24}>
                      <Text textAlign="center">でもいつの日か</Text>
                    </Box>
                    <Box pt={4}>
                      <Text textAlign="center">
                        「あれ？これもしかして本当に最高なんじゃないか？」
                      </Text>

                      <Text textAlign="center">ってなったら最高だと思う。</Text>
                    </Box>
                  </ScrollRevealContainer>

                  <ScrollRevealContainer>
                    <Box pt={24} pb={4}>
                      <Text textAlign="center">そういうわけで </Text>
                      <Text textAlign="center">
                        今日もちょっくらボコされてくる。
                      </Text>
                    </Box>
                  </ScrollRevealContainer>
                </Stack>
              </Center>
            </Box>
          </Container>
        </Center>
        {/* </ScrollRevealContainer> */}
      </Layout>
    </div>
  );
};

const VhStylesComponent = styled.div`
  height: calc(100vh - 446px);
`;

import {
  Heading,
  Divider,
  Text,
  Box,
  Center,
  Stack,
  HStack,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import Layout from "../organisms/layout/article";
import { Avatar } from "../molecules/Avatar";

export const AboutPage = () => {
  return (
    <div>
      <Layout title="About">
        <Heading p={6} mt={10} as="h3" variant="section-title">
          About
        </Heading>

        <Divider my={6} />

        <Box px={10} mt={10}>
          <Center mt={10}>
            <Flex>
              <HStack display={{ md: "flex" }}>
                <Stack>
                  <Box display={{ md: "flex" }} textAlign="center">
                    <Box flexGrow={1}>
                      <Heading as="h2" variant="page-title">
                        Takuya Ishida
                      </Heading>
                      <Box textAlign="center">(Ippann-People)</Box>
                    </Box>
                  </Box>
                  <Avatar />
                </Stack>
                <Box pl={{ base: 0, md: 10 }} pt={{ base: 5, md: 0 }}>
                  <Text>フルスタックエンジニア</Text>
                  <Text>1993年12月20日 東京生まれ神奈川育ち</Text>
                  <br />
                  <Text>
                    元々ITやガジェットが好きで外資系のハードウェアメーカーに新卒入社し営業として従事していたが、
                  </Text>
                  <Text>
                    元来のオタク気質により技術沼への関心が抑えられず、26歳の時にPHPを独学し転職。
                  </Text>
                  <br />
                  <Text>現在はPython・Reactをメイン技術として、</Text>
                  <Text>
                    AWSを中心としたサーバレスアーキテクチャを使いより拡張性や保守性の高いシステムを構築することが得意。
                  </Text>
                  <br />
                  <Text>自分が作ったモノが動くことへの感動や、</Text>
                  <Text>
                    日々新しいことを知って昨日の自分より強くなっていると実感することがモチベーションとなっている。
                  </Text>
                  <br />
                  <Text>
                    趣味はガジェット、FPS,格闘ゲーム全般エレキギター。好きなバンドはUNISON
                    SQUARE GARDEN。
                  </Text>
                </Box>
              </HStack>
            </Flex>
          </Center>
        </Box>
      </Layout>
    </div>
  );
};

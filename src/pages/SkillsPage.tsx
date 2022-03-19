import { SkillProgress } from "../molecules/SkillProgress";
import Layout from "../organisms/layout/article";
import { Heading, SimpleGrid, Divider, Box, Text } from "@chakra-ui/react";

export const SkillsPage = () => {
  return (
    <>
      <Layout title="">
        <Heading my={10} as="h3" variant="section-title">
          Skills
        </Heading>
        <Box px={4}>
          <Text>
            フロントエンドからインフラまで幅広くスキルアップに取り組んできました。
          </Text>
          <Text>
            全領域オールラウンドに対応できるため、新規事業のスタートアップフェーズなどひとりでなんでもこなさないといけない状況は得意です。
          </Text>
          <Text>
            ただ、全体的に浅く広い器用貧乏になってしまっている感が否めないので、今後は一旦どれか一つの領域に絞って極めていきたいと思っています。
          </Text>
          <Text>
            ※今の所、フロントエンドのUI/UX体験を良くする、みたいな方面に興味があります。
            (人間が感じる「なんとなくいい」を計算ずくで作り出せるってかっこいいですよね)
          </Text>
        </Box>
        <Divider my={6} />
        <SkillProgress />
      </Layout>
    </>
  );
};

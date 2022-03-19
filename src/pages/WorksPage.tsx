import { Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../organisms/layout/GridItem";
import { Section } from "../organisms/layout/Section";
import Layout from "../organisms/layout/article";
import { client } from "../lib/client";
import { useEffect, Suspense } from "react";
import { useRecoilState } from "recoil";
import { worksState } from "../store/atom/works";

// type workState = [
//   {
//     id: Number;
//     title: String;
//     body: String;
//     skill: Array<String>;
//     thumbnail: Object;
//     url: String;
//   }
// ];

export const WorksPage = () => {
  const [works, setWorks] = useRecoilState(worksState);
  useEffect(() => {
    client
      .get({
        endpoint: "works",
      })
      .then((res) => setWorks(res.contents));
  }, []);

  return (
    <div>
      <Layout title="">
        <Heading my={10} as="h3" variant="section-title">
          Works
        </Heading>

        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={20}>
          {works.map((work, index) => (
            <Section delay={0.2} key={work.id}>
              <Suspense fallback={<p>Loading...</p>}>
                <WorkGridItem
                  index={index}
                  id={work.id}
                  title={work.title}
                  thumbnail={work.thumbnail.url}
                  skills={work.skill}
                >
                  {work.description}
                </WorkGridItem>
              </Suspense>
              <Divider my={6} />
            </Section>
          ))}
        </SimpleGrid>
      </Layout>
    </div>
  );
};

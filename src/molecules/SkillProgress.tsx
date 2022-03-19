import { Circle } from "../atom/Circle";
import { Heading, Box, Flex, Wrap, Center, LinkBox } from "@chakra-ui/react";

const FrontEndProgressData = [
  {
    name: "React",
    value: 50,
    color: "purple.500",
  },
  {
    name: "Vue",
    value: 40,
    color: "green",
  },
  {
    name: "Nuxt",
    value: 40,
    color: "green.400",
  },
  {
    name: "JS",
    value: 40,
    color: "yellow",
  },
  {
    name: "HTML",
    value: 40,
    color: "orange.600",
  },
  {
    name: "CSS",
    value: 25,
    color: "blue.300",
  },
];

const BackEndProgressData = [
  {
    name: "Python",
    value: 60,
    color: "yellow.400",
  },
  {
    name: "NodeJS",
    value: 40,
    color: "green.700",
  },
  {
    name: "Express",
    value: 10,
    color: "green.200",
  },
  {
    name: "PHP",
    value: 40,
    color: "purple.300",
  },
  {
    name: "Laravel",
    value: 40,
    color: "red.700",
  },
];

const InfraProgressData = [
  {
    name: "Lambda",
    value: 65,
    color: "red.200",
  },
  {
    name: "EC2",
    value: 50,
    color: "pink.500",
  },
  {
    name: "S3",
    value: 50,
    color: "green.300",
  },
  {
    name: "RDS",
    value: 25,
    color: "blue.800",
  },
  {
    name: "DynamoDB",
    value: 50,
    color: "blue.600",
  },
  {
    name: "Amplify",
    value: 50,
    color: "yellow.200",
  },
  {
    name: "Firebase",
    value: 25,
    color: "orange.400",
  },
  {
    name: "WordPress",
    value: 50,
    color: "black",
  },
];

export const SkillProgress = () => {
  return (
    <>
      <Heading as="h3" mb={5}>
        FrontEnd
      </Heading>
      <Center>
        <Wrap spacing="30px" justify="center">
          {FrontEndProgressData.map((data) => (
            <LinkBox cursor="pointer">
              <Box>
                <Circle
                  name={data.name}
                  value={data.value}
                  color={data.color}
                />
              </Box>
            </LinkBox>
          ))}
        </Wrap>
      </Center>
      <Heading as="h3" mt={10} mb={5}>
        BackEnd
      </Heading>
      <Center>
        <Wrap spacing="30px" justify="center">
          {BackEndProgressData.map((data) => (
            <Box>
              <Circle name={data.name} value={data.value} color={data.color} />
            </Box>
          ))}
        </Wrap>
      </Center>
      <Heading as="h3" mt={10} mb={5}>
        Infrastructure
      </Heading>
      <Center>
        <Wrap spacing="30px" justify="center">
          {InfraProgressData.map((data) => (
            <Box>
              <Circle name={data.name} value={data.value} color={data.color} />
            </Box>
          ))}
        </Wrap>
      </Center>
    </>
  );
};

import {
  Box,
  Text,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { useHistory } from "react-router-dom";

const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Flex w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Flex>
  );
};

export const WorkGridItem = ({
  children,
  index,
  id,
  title,
  thumbnail,
  skills,
}) => {
  const history = useHistory();
  const onClickWorksId = () => history.push(`/works/${index}`);
  return (
    <Flex w="100%" align="center">
      <LinkBox cursor="pointer" onClick={onClickWorksId}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          boxShadow="lg"
        />

        <LinkOverlay onClick={onClickWorksId}>
          <Text my={2} fontSize={24} align="center">
            {title}
          </Text>
        </LinkOverlay>

        <LinkOverlay>
          <Box p={5}>
            <Text align="center" pb={2} fontSize="sm" color="cyan.400">
              要素技術
            </Text>

            <HStack justify="center">
              <Wrap>
                {skills.map((s) => (
                  <WrapItem>
                    <Box textAlign="center" key={s} display="flex">
                      <Tag>{s}</Tag>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </HStack>
          </Box>
        </LinkOverlay>

        <LinkOverlay onClick={onClickWorksId}>
          <Center>
            <Text fontSize={14}>{children}</Text>
          </Center>
        </LinkOverlay>
      </LinkBox>
    </Flex>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail{
        border-radius:12px
    }`}
    />
  );
};

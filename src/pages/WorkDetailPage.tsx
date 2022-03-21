import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { worksState } from "../store/atom/works";
import {
  Heading,
  Box,
  Image,
  Text,
  HStack,
  Tag,
  Badge,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const WorkDetailPage = () => {
  const works = useRecoilValue(worksState);
  const { index } = useParams();
  const detail = works[index];
  return (
    <Box>
      <Link to="/works">Works</Link>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <HStack>
        <Heading display="inline-block" as="h3" fontSize={25} mb={1} p={6}>
          {detail.title}
        </Heading>
        <Badge colorScheme="green" mx={4}>
          {detail.releaseDate}
        </Badge>
      </HStack>
      <Image
        borderRadius="lg"
        w="full"
        src={detail.thumbnail.url}
        alt={detail.title}
      ></Image>
      <Box p={5}>
        <Text align="center" pb={2} fontSize="sm" color="cyan.400">
          要素技術
        </Text>
        <HStack justify="center">
          {detail.skill.map((s) => (
            <Box textAlign="center" key={s}>
              <Tag>{s}</Tag>
            </Box>
          ))}
        </HStack>
      </Box>
      <Text>{detail.body}</Text>
    </Box>
  );
};

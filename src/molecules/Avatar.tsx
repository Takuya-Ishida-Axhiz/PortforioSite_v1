import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import profile from "../images/kao_takuzo.jpg";

export const Avatar = () => {
  return (
    <div>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} textAlign="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src={profile}
          alt="profile_jpeg"
        />
      </Box>
    </div>
  );
};

import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const StyledColorMode = (props) => {
  const { children } = props;

  const bg = useColorModeValue("blue", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box mb={4} bg={bg} color={color}>
        {children}
      </Box>
    </>
  );
};

// 当てられなかった不要か？

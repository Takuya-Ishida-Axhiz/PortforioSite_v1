import { memo, ReactNode } from "react";
import { VFC } from "react";
import { Box, Center } from "@chakra-ui/react";
import { Header } from "../organisms/layout/Header";
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />

      <Box px={{ base: 1, md: 20 }}>{children}</Box>
    </>
  );
});

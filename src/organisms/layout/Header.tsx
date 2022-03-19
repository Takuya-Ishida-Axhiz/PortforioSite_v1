import { memo, VFC } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  Center,
  Menu,
  MenuItem,
  MenuList,
  useDisclosure,
  Image,
  MenuButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggleButton } from "../../atom/ThemeToggleButton";
import profile from "../../images/saboro.jpg";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const onClickHome = () => history.push("/");
  const onClickAbout = () => history.push("/about");
  const onClickWorks = () => history.push("/works");
  const onClickSkills = () => history.push("/skills");
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Image
            borderRadius="full"
            boxSize="25px"
            src={profile}
            alt="imagealt"
            mr={1}
          />
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            Takuya Ishida
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Box display="inline-block" mx={4}>
              <Link to="/about">About</Link>
            </Box>

            <Box display="inline-block" mx={4}>
              <Link to="/works">Works</Link>
            </Box>
            <Box display="inline-block" mx={4}>
              <Link to="/skills">Skills</Link>
            </Box>
          </Box>
        </Flex>

        <Flex mt={9} justify="right">
          <ThemeToggleButton />

          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              display={{ base: "inline-block", md: "none" }}
              onClick={onOpen}
              ml={2}
            ></MenuButton>
            <MenuList>
              <MenuItem onClick={onClickHome}>Home</MenuItem>
              <MenuItem onClick={onClickAbout}>About</MenuItem>
              <MenuItem onClick={onClickWorks}>Works</MenuItem>
              <MenuItem onClick={onClickSkills}>Skills</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
});

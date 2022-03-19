import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

export const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: "inline-block" }}
          key={useColorModeValue("right", "dark")}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: "0.2" }}
        >
          <IconButton
            // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
            mb={10}
            aria-label="DarkMode Switch"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} //自分の好みでSunアイコンはreact-iconsを使用しています
            onClick={toggleColorMode}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

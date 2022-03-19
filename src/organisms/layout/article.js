import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { GridItemStyle } from "./GridItem";

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 50 },
};

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;

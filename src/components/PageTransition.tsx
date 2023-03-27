import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


interface Props {
    children: React.ReactNode;
    pageVariants: {
        initial: {
          opacity: number;
          x?: string;
          y?: string;
        };
        animate: {
          opacity: number;
          x?: string;
          y?: number | string;
          transition: {
            type: string;
            stiffness: number;
            damping: number;
          };
        };
        exit: {
          opacity: number;
          x?: number | string;
          y?: number | string;
          transition: {
            ease: string;
          };
        };
      };
    }




const PageTransition: React.FC<Props> = ({ children, pageVariants }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={false} mode="wait">
      <motion.div
      className="page-content"
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

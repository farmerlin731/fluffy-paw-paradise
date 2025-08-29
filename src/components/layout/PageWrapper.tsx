import { ReactNode, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "./Navbar-new";
import Footer from "./Footer";

interface PageWrapperProps {
  children: ReactNode;
  // 新增動畫類型，可選 'slide' | 'fade' | 'scale'
  animationType?: "slide" | "fade" | "scale";
}

const PageWrapper = ({
  children,
  animationType = "slide",
}: PageWrapperProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 定義不同動畫變數
  const variants: Record<"slide" | "fade" | "scale", Variants> = {
    slide: {
      initial: { opacity: 0, x: -80 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 80 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants[animationType]}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default PageWrapper;

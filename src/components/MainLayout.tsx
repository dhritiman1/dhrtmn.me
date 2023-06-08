import Head from "next/head";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title: string;
};

const MainLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`noise absolute min-h-screen min-w-full opacity-40 bg-noise -z-10`}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex bg-transparent min-h-screen flex-col items-center`}
      >
        <div className="w-full top-0 fixed h-11 bg-gradient-to-b from-[#2525258f] via-[#30303073] to-transparent -z-10"></div>
        {children}
        <div className="w-full bottom-0 fixed h-11 bg-gradient-to-t from-[#2525258f] via-[#30303073] to-transparent"></div>
      </motion.div>
    </>
  );
};

export default MainLayout;

import Head from "next/head";
import { ReactNode } from "react";

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
      <main
        className={`flex bg-transparent min-h-screen flex-col items-center`}
      >
        <div className="w-full top-0 fixed h-11 bg-gradient-to-b from-[#0000009f] via-[#0000002a] to-transparent -z-10"></div>
        {children}
        <div className="w-full bottom-0 fixed h-11 bg-gradient-to-t from-[#0000009f] via-[#0000002a] to-transparent"></div>
      </main>
    </>
  );
};

export default MainLayout;

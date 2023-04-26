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
        {children}
      </main>
    </>
  );
};

export default MainLayout;

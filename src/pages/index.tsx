import Socials from "@/components/Socials";
import MainLayout from "@/components/MainLayout";
import links from "@/lib/links";
import Link from "next/link";

export default function Home() {
  const age =
    (new Date().getTime() - new Date("July 13, 2003").getTime()) /
    365 /
    24 /
    60 /
    60 /
    1000;

  return (
    <>
      <MainLayout title="home">
        <div className="px-10 md:p-0 lg:p-0 md:w-[45rem] lg:w-[55rem]">
          <div className="flex w-full justify-end">
            <div className="flex justify-between w-[12rem] py-3 pt-4 ">
              <Link href="/project">projects</Link>
              <Link href="/blog">blogs</Link>
              <Link href="https://github.com/dhritiman1">github</Link>
            </div>
          </div>
        </div>

        <div className="w-full px-10 md:p-0 lg:p-0 md:w-[45rem] lg:w-[55rem]">
          <p className="py-5 text-2xl font-light">yo! i&apos;m dhritiman</p>
          <p>
            i&apos;m a <span className="w-[10rem]">{Math.floor(age)}</span>{" "}
            years old student who likes to play around with dev stuff and sounds
            on a computer. ...
          </p>
          <Socials links={links} />
        </div>
      </MainLayout>
    </>
  );
}

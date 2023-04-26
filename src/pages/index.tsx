import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { useState } from "react";

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
      <MainLayout title="dhritiman">
        <div className="flex w-screen justify-end">
          <div className="flex justify-between w-[19rem] px-9 py-3 pt-4">
            <Link href="">projects</Link>
            <Link href="">blogs</Link>
            <Link href="https://github.com/dhritiman1">github</Link>
            <Link href="/socials">socials</Link>
          </div>
        </div>
        <div className="w-full px-10 md:p-0 lg:p-0 md:w-[45rem] lg:w-[55rem]">
          <p className="py-5 text-4xl">yo! i&apos;m dhritiman</p>
          <p>
            i&apos;m a <span className="w-[10rem]">{Math.floor(age)}</span>{" "}
            years old student. ...
          </p>
        </div>
      </MainLayout>
    </>
  );
}

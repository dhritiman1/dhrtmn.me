import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function Blogs() {
  return (
    <MainLayout title="blogs">
      <div className="flex w-screen justify-start">
        <div className="flex justify-between w-[16rem] px-9 py-3 pt-4">
          <Link href="/">home</Link>
        </div>
      </div>
      <div className="w-full px-10 md:p-0 lg:p-0 md:w-[45rem] lg:w-[55rem]">
        <p className="py-5 text-4xl font-light">blogs</p>
        <p>i want to start writing blogs. so they will go here.</p>
      </div>
    </MainLayout>
  );
}

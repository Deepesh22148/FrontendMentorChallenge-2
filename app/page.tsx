import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#f4d04e] flex justify-center items-center">
      <div className="h-fit w-full max-w-[384px] border-2 border-black rounded-2xl bg-white p-5 flex flex-col gap-4 shadow-[8px_8px_0px_0px_#000000]">
        <div>
          <Image
            src={"/resources/illustration-article.svg"}
            alt={"blog-image"}
            loading="eager"
            width={500}
            height={500}
            className="h-full w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-fit w-fit p-2 px-3 bg-[#f4d04e] font-extrabold rounded-lg text-xs">
            Learning
          </div>
          <div className="text-sm font-bold">Published 21 Dec 2023</div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h1 className="font-extrabold text-xl hover:text-[#f4d04e] cursor-pointer">HTML & CSS foundations</h1>
          <p className="text-gray-700">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3 py-1">
          <div className="">
            <Image
              alt="profile"
              src={"/resources/image-avatar.webp"}
              height={500}
              width={500}
              className="w-fit h-fit"
              loading="eager"
            />
          </div>

          <span className="font-extrabold ">Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}

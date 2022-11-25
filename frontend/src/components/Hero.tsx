import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-screen w-full items-center justify-center font-poppins">
      <div className="flex w-full items-center justify-between px-[155px]">
        <div className="flex flex-col">
          <div className="mb-9 max-w-xl text-6xl font-bold text-white">
            Make Your Dream Career Come True
          </div>
          <div className="mb-9 max-w-sm text-base text-white">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </div>
          <div className="flex max-w-[23rem] justify-between">
            <div className="flex h-12 w-40 cursor-pointer flex-col rounded-md bg-gradient-to-r from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] transition-all duration-150 hover:bg-gradient-to-tr">
              <div className="my-auto items-center text-center text-xs font-semibold tracking-widest text-white">
                REGISTER
              </div>
            </div>
            <div className="flex h-12 w-40 cursor-pointer flex-col rounded-md border-2 border-transparent bg-gradient-to-tr from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] bg-clip-border hover:border-none">
              <div className="flex h-full w-full flex-col rounded-md bg-[#32394A] text-transparent transition-all duration-150 hover:bg-gradient-to-r hover:from-[#8AD4EC] hover:via-[#FF56A9] hover:to-[#FFAA6C] hover:text-white">
                <div className="my-auto items-center bg-gradient-to-r from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] bg-clip-text text-center text-xs font-semibold tracking-widest">
                  EXPLORE COURSE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-2xl font-semibold text-white">
          <Image
            src="/assets/Illustration.svg"
            alt="Nekoding Logo"
            width={410}
            height={472}
          />
        </div>
      </div>
    </div>
  );
}

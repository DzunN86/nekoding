import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center  font-poppins sm:flex-wrap">
      <div className="flex w-full flex-col-reverse items-center  justify-between px-5 sm:px-4 lg:flex-row md:px-10 lg:px-10 xl:px-[155px]">
        <div className="flex flex-col text-center lg:text-start px-5 lg:px-0">
          <div className="mb-7 lg:mb-9 mt-8 lg:mt-0 lg:max-w-xl text-2xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Make Your Dream Career Come True
          </div>
          <div className="mb-7 lg:mb-9 lg:max-w-sm text-base text-white">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </div>
          <div className="flex lg:max-w-[23rem] lg:justify-between justify-center">
            <div className="flex h-12 w-40 mx-3 lg:mx-0 cursor-pointer flex-col rounded-md bg-gradient-to-r from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] bg-size-200 bg-pos-0 transition-all duration-300 hover:bg-pos-100">
              <div className="my-auto items-center text-center text-xs font-semibold tracking-widest text-white">
                REGISTER
              </div>
            </div>
            <div className="flex h-12 w-40 mx-3 lg:mx-0 cursor-pointer flex-col rounded-md border-2 border-transparent bg-gradient-to-tr from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] bg-clip-border transition-all duration-300 hover:border-none">
              <div className="flex h-full w-full flex-col rounded-md bg-[#32394A] text-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#8AD4EC] hover:via-[#FF56A9] hover:to-[#FFAA6C] hover:text-white">
                <div className="my-auto items-center bg-gradient-to-r from-[#8AD4EC] via-[#FF56A9] to-[#FFAA6C] bg-clip-text text-center text-xs font-semibold tracking-widest">
                  EXPLORE COURSE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full sm:w-1/2 md:max-w-[350px] lg:w-1/2 mt-16 lg:mt-3 flex justify-center xl:-ml-16 2xl:ml-0 lg:max-w-[500px]">
          <Image
            src="/assets/Illustration.svg"
            alt="Nekoding Logo"
            className="w-full"
            priority
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Raina from "../public/RAINA.jpeg";
import Blue from "../public/blue.jpeg";
import Frank from "../public/frank.jpeg";
import Loni from "../public/loni.png";

export default function Home() {
  return (
    // <main className="min-h-screen flex items-center">
    //   <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800 max-w-screen-2xl mx-auto">
    //     <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
    //       <h1 className="text-5xl font-bold">
    //         Welcome to Dropbox. <br />
    //         <br />
    //         Storing everything for you and your business needs. All in one place
    //       </h1>

    //       <p className="pb-20">
    //         Enhance your personal storage with Dropbox, offering a simple and
    //         efficient way to upload, organize, and access files from anywhere.
    //         Securely store important documents and media, and experience the
    //         convenience of easy file management and sharing in one centralized
    //         solution.
    //       </p>

    //       <Link
    //         href="/dashboard"
    //         className="flex cursor-pointer bg-blue-500 p-5 w-fit"
    //       >
    //         Try it for free!
    //         <ArrowRight className="ml-10" />
    //       </Link>
    //     </div>

    //     <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
    //       <video autoPlay loop muted className="rounded-lg">
    //         <source
    //           src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
    //           type="video/mp4"
    //         />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </div>
    // </main>
    <div className="w-1/3">
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4">
        <div className="bg-white rounded-2xl p-[7px] overflow-hidden space-y-[10px]">
          <div className=" w-[250px] h-[250px] relative bg-[#FFF8E5] rounded-xl">
            <Image
              src={Loni}
              alt="profile image"
              layout="fill"
              className="rounded-xl object-top object-cover !z-0"
              loading="lazy"
            />
          </div>

          <div className="flex justify-between items-start  ">
            <div className="px-2 space-y-[10px] w-[70%]">
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.profile /> */}
                </span>
                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Raina
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Turner
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 ">
                <span className="w-[14px] h-[14px] bg-red-300">
                  {/* <icons.email /> */}
                </span>

                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Email Address
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Email Address
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.location /> */}
                </span>
                <p className={`text-sm whitespace-nowrap`}>Nearest CITY</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px]">
                  {/* <icons.organization /> */}
                </span>

                <p className={`text-sm whitespace-nowrap`}>Organization NAME</p>
              </div>
            </div>

            {/* <IndustryHouseIcons iconTag={PRIMARY_INDUSTRY_HOUSE} /> */}
          </div>

          <div className="bg-[#242424] h-[1px] w-full" />

          <div className="px-2 space-y-[10px]">
            <div className="flex items-center flex-wrap gap-1">
              <p className="text-xs font-bold">Member Level</p>
              <span className="text-xs">&bull;</span>
              <p className={`text-xs`}> Excited to learn</p>
            </div>

            <a
              // href={ConnectLink} //UPDATE WHEN AIRTABLE IS UPDATED
              href="https://www.blacksustainability.org/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFBF23] border border-[#1A1A1A] flex justify-between items-center py-1 px-3 rounded-3xl"
            >
              <span className="font-bold text-sm capitalize">connect</span>
              {/* <icons.rightArrow /> */}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-[7px] overflow-hidden space-y-[10px]">
          <div className="h-[250px] bg-[#FFF8E5] rounded-xl">
            <Image
              src={Raina}
              alt="profile image"
              layout="responsive"
              width={250}
              height={250}
              className="rounded-xl object-top object-cover !z-0"
              loading="lazy"
            />
          </div>

          <div className="flex justify-between items-start  ">
            <div className="px-2 space-y-[10px] w-[70%]">
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.profile /> */}
                </span>
                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Raina
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Turner
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 ">
                <span className="w-[14px] h-[14px] bg-red-300">
                  {/* <icons.email /> */}
                </span>

                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Email Address
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Email Address
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.location /> */}
                </span>
                <p className={`text-sm whitespace-nowrap`}>Nearest CITY</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px]">
                  {/* <icons.organization /> */}
                </span>

                <p className={`text-sm whitespace-nowrap`}>Organization NAME</p>
              </div>
            </div>

            {/* <IndustryHouseIcons iconTag={PRIMARY_INDUSTRY_HOUSE} /> */}
          </div>

          <div className="bg-[#242424] h-[1px] w-full" />

          <div className="px-2 space-y-[10px]">
            <div className="flex items-center flex-wrap gap-1">
              <p className="text-xs font-bold">Member Level</p>
              <span className="text-xs">&bull;</span>
              <p className={`text-xs`}> Excited to learn</p>
            </div>

            <a
              // href={ConnectLink} //UPDATE WHEN AIRTABLE IS UPDATED
              href="https://www.blacksustainability.org/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFBF23] border border-[#1A1A1A] flex justify-between items-center py-1 px-3 rounded-3xl"
            >
              <span className="font-bold text-sm capitalize">connect</span>
              {/* <icons.rightArrow /> */}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-[7px] overflow-hidden space-y-[10px]">
          <div className="h-[250px] bg-[#FFF8E5] rounded-xl">
            <Image
              src={Frank}
              alt="profile image"
              layout="responsive"
              width={250}
              height={250}
              className="rounded-xl object-top object-cover !z-0"
              loading="lazy"
            />
          </div>

          <div className="flex justify-between items-start  ">
            <div className="px-2 space-y-[10px] w-[70%]">
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.profile /> */}
                </span>
                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Raina
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Turner
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 ">
                <span className="w-[14px] h-[14px] bg-red-300">
                  {/* <icons.email /> */}
                </span>

                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Email Address
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Email Address
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.location /> */}
                </span>
                <p className={`text-sm whitespace-nowrap`}>Nearest CITY</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px]">
                  {/* <icons.organization /> */}
                </span>

                <p className={`text-sm whitespace-nowrap`}>Organization NAME</p>
              </div>
            </div>

            {/* <IndustryHouseIcons iconTag={PRIMARY_INDUSTRY_HOUSE} /> */}
          </div>

          <div className="bg-[#242424] h-[1px] w-full" />

          <div className="px-2 space-y-[10px]">
            <div className="flex items-center flex-wrap gap-1">
              <p className="text-xs font-bold">Member Level</p>
              <span className="text-xs">&bull;</span>
              <p className={`text-xs`}> Excited to learn</p>
            </div>

            <a
              // href={ConnectLink} //UPDATE WHEN AIRTABLE IS UPDATED
              href="https://www.blacksustainability.org/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFBF23] border border-[#1A1A1A] flex justify-between items-center py-1 px-3 rounded-3xl"
            >
              <span className="font-bold text-sm capitalize">connect</span>
              {/* <icons.rightArrow /> */}
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-[7px] overflow-hidden space-y-[10px]">
          <div className="h-[250px] bg-[#FFF8E5] rounded-xl">
            <Image
              src={Blue}
              alt="profile image"
              layout="responsive"
              width={250}
              height={250}
              className="rounded-xl object-top object-cover !z-0"
              loading="lazy"
            />
          </div>

          <div className="flex justify-between items-start  ">
            <div className="px-2 space-y-[10px] w-[70%]">
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.profile /> */}
                </span>
                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Raina
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Turner
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 ">
                <span className="w-[14px] h-[14px] bg-red-300">
                  {/* <icons.email /> */}
                </span>

                <div className="group">
                  <div>
                    <p
                      className={`text-sm whitespace-nowrap overflow-hidden truncate max-w-[130px] group-hover:invisible cursor-pointer`}
                    >
                      Email Address
                    </p>
                    <p
                      className={`text-sm absolute top-0 rounded-full bg-white p-[1px] whitespace-normal hidden group-hover:block`}
                    >
                      Email Address
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px] bg-red-500">
                  {/* <icons.location /> */}
                </span>
                <p className={`text-sm whitespace-nowrap`}>Nearest CITY</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[14px]">
                  {/* <icons.organization /> */}
                </span>

                <p className={`text-sm whitespace-nowrap`}>Organization NAME</p>
              </div>
            </div>

            {/* <IndustryHouseIcons iconTag={PRIMARY_INDUSTRY_HOUSE} /> */}
          </div>

          <div className="bg-[#242424] h-[1px] w-full" />

          <div className="px-2 space-y-[10px]">
            <div className="flex items-center flex-wrap gap-1">
              <p className="text-xs font-bold">Member Level</p>
              <span className="text-xs">&bull;</span>
              <p className={`text-xs`}> Excited to learn</p>
            </div>

            <a
              // href={ConnectLink} //UPDATE WHEN AIRTABLE IS UPDATED
              href="https://www.blacksustainability.org/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFBF23] border border-[#1A1A1A] flex justify-between items-center py-1 px-3 rounded-3xl"
            >
              <span className="font-bold text-sm capitalize">connect</span>
              {/* <icons.rightArrow /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Faq } from "./Faq";

const FaqComp = () => {
  return (
    <div className="">
      <div className=" flex mobile:flex-col-reverse desktop:flex-row mobile:p-5 desktop:p-20 mobile:gap-5 desktop:gap-5">
        {/* faq div */}
        <div className="mobile:w-full desktop:w-[50%] flex-grow-0 mobile:py-5 desktop:py-0 mobile:px-0 desktop:px-10">
          <div className="mobile: desktop: p-4 m-auto mobile:w-[100%] tablet:w-[70%] desktop:w-[100%] rounded-md shadow-3xl bg-[#ffffff5f]">
            <Faq />
          </div>
        </div>
        {/* Image div */}
        <div className="m-auto flex flex-grow-1 justify-center items-center mobile:w-full desktop:w-[50%]">
          <div className="m-auto mobile:w-[100%] tablet:w-[70%] mobile:my-5 desktop:my-0 desktop:w-[100%]">
            <img src='/teaching-img.png' className="" alt='imgage'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComp;

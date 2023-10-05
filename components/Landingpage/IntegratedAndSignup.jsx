import React from "react";
import FormComponent from "./FormComponent";
import Image from "next/image";

const IntegratedAndSignup = () => {
  return (
    <div className="">
      <div className="flex mobile:flex-col desktop:flex-row mobile:p-5 desktop:p-20 mobile:gap-5 desktop:gap-5">
        {/* Integrated div */}
        <div className="m-auto flex flex-col justify-center items-center mobile:w-full desktop:w-[50%]">
          <div className="m-auto mobile:w-[100%] flex flex-col mobile:gap-6 desktop:gap-4 tablet:w-[70%] mobile:my-5 desktop:my-0 desktop:w-[100%] mobile:text-center desktop:text-left">
            <div className="flex gap-1 flex-col">
              <h1 className="mobile:text-3xl tablet:text-4xl desktop:text-5xl font-thin">
                Integrated with all{" "}
              </h1>
              <h1 className="mobile:text-3xl tablet:text-4xl desktop:text-5xl font-thin">
                your favourite tools
              </h1>
              <p className="mobile:text-base mt-2 desktop:text-xl text-[#0252b8]">
                Veblika seamlessly integrates with leading third-party marketing
                services and essential business tools, simplifying workflows and
                boosting efficiency. Connect effortlessly to email marketing
                platforms, social media tools, CRMs, and more.
              </p>
            </div>
            <div className="">
              <Image width={100} height={100} src="/teaching-img.png" className="" alt="imgage" />
            </div>
          </div>
        </div>
        {/* faq div */}
        <div className="mobile:w-full desktop:w-[50%] mobile:py-5 desktop:py-0 mobile:px-0">
          <div className="desktop:px-4 m-auto mobile:w-[100%] tablet:w-[70%] desktop:w-[90%]">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedAndSignup;

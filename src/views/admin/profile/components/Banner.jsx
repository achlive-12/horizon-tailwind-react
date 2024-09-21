import React from "react";
import avatar from "assets/img/avatars/male.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
          <a href="https://www.flaticon.com/free-icons/male" title="male icons"></a>
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          User Name
        </h4>
        <p className="text-base font-normal text-gray-600">Investor</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">1</p>
          <p className="text-sm font-normal text-gray-600">Investment(s)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            30
          </p>
          <p className="text-sm font-normal text-gray-600">Referrals</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            GHS 434
          </p>
          <p className="text-sm font-normal text-gray-600">Balance</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-40 h-10 bg-red-500 text-white rounded-lg my-5">
          Delete Account
        </button>
      </div>
    </Card>
  );
};

export default Banner;

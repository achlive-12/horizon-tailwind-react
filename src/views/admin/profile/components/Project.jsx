import React from "react";
import image1 from "assets/img/profile/image1.png";
import Card from "components/card";

const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          All Investments
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can find more details about your invetments.
        </p>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Investment Title
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Investment #1 .
            </p>
            <p className="mt-2 text-sm text-gray-600">
              This Investment gives you three times your deposit as returns.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;

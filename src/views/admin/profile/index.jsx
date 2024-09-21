import Banner from "./components/Banner";
import Project from "./components/Project";
import Card from "components/card";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-5 lg:!mb-0">
          <Banner />
        </div>
        <div className="col-span-6 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>

      </div>
      {/* all project & ... */}
        {/* Target Investors Progress bar card*/}
        <Card extra={"w-full p-4 h-full"}>
          <div className="flex flex-col w-full h-full p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Target Investors
              </h4>
              <span className="text-xs text-gray-600">80%</span>
            </div>
            <div className="mt-3 h-2 w-full bg-[#E0E5F2] rounded-full">
              <div className="h-full w-[80%] bg-brand-500 rounded-full"></div>
            </div>
          </div>
        </Card>
      </div>
    
  );
};

export default ProfileOverview;

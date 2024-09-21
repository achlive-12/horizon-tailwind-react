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
        {/* Reffered Users*/}
        <Card extra={"w-full p-4 h-full"}>
          <div className="flex flex-col w-full h-full p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Reffered Users
              </h4>
              <span className="text-xs text-gray-600">30</span>
            </div>
            {/**List of Reffered users */}
            <div className="mt-4 flex flex-col gap-4">
              {[
                { username: "JohnDoe", status: "Referred", amount: "GHS 50" },
                { username: "JaneSmith", status: "Pending", amount: "GHS 30" },
                { username: "MikeBrown", status: "Referred", amount: "GHS 70" },
              ].map((user, index) => (
                <div key={index} className="w-full p-4 bg-white p-3 shadow-3xl rounded-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-lg font-bold text-navy-700 dark:text-white">
                        {user.username}
                      </h5>
                    </div>
                    <p className="text-sm text-gray-600">{user.status}</p>
                    <span className="text-sm font-semibold text-navy-700 dark:text-white">
                      {user.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Create Referral Link
              </h4>
              <div className="mt-2 flex items-center">
                <button className="p-2 bg-brand-500 text-white rounded-md mx-2">
                  Generate
                </button>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md dark:!bg-navy-700 dark:shadow-none dark:text-white dark:border-navy-800 active:border-none"
                  placeholder="referral link"
                  readOnly
                />
                <button className="ml-2 p-2 bg-brand-500 text-white rounded-md">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    
  );
};

export default ProfileOverview;

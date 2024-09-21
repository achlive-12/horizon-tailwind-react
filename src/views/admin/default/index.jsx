import { IoDocuments } from "react-icons/io5";
import { MdBarChart} from "react-icons/md";
import Marketplace from "../marketplace";
import Widget from "components/widget/Widget";
import Card from "components/card";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Deposit"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Balance"}
          subtitle={"$574.34"}
        />
      </div>
      <Card extra={"w-full p-2 h-full mt-4"}>
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
      < Marketplace />
    </div>
  );
};

export default Dashboard;

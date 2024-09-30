import { IoDocuments } from "react-icons/io5";
import { MdBarChart} from "react-icons/md";
import Marketplace from "../marketplace";
import Widget from "components/widget/Widget";
import Card from "components/card";
import { useState } from "react";


const Dashboard = () => {
  // State for storing comments
  const [comments, setComments] = useState([
    { name: "John Doe", text: "Successfully withdrew my profits last week. The process was smooth and now I'm ready for the next round!", time: "2 days ago" },
    { name: "Jane Smith", text: "Just withdrew for the third time! This platform has been great so far. Looking forward to the next investment opportunity.", time: "5 days ago" },
    { name: "David Roberts", text: "The withdrawal process was really fast! Got my funds within 24 hours. Ready for the next round!", time: "1 week ago" },
  ]);
  const handlePlayNowClick = () => {
    const gameSection = document.getElementById('invest');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // State for the new comment input
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  // Function to handle posting a new comment
  const handlePostComment = () => {
    if (newComment.trim() && name.trim()) {
      // Add the new comment to the comments array
      const currentTime = new Date().toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true });
      setComments([...comments, { name, text: newComment, time: currentTime }]);
      
      // Clear the input fields
      setNewComment("");
      setName("");
    }
  };
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"GHS 340"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Deposit"}
          subtitle={"GHS 15"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Balance"}
          subtitle={"GHS 355"}
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
            <div className="mt-3 h-2 w-full bg-[#E0E5F2] rounded-full hover:scale-105 transition-transform duration-300">
              <div className="h-full w-[80%] bg-brand-500 rounded-full hover:bg-brand-700 transition-colors duration-300"></div>
            </div>
          </div>
      </Card>
      < Marketplace />
      {/* Comments card */}
      <Card extra={"w-full p-4 h-full mt-4"}>
        <div className="flex flex-col w-full h-full p-4">
          {/* Card header */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              User Comments
            </h4>
          </div>

          {/* Comments section */}
          <div className="mt-4 space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg dark:bg-navy-700">
                <h5 className="font-semibold text-navy-600 dark:text-white">
                  {comment.name}
                </h5>
                <p className="text-gray-500 dark:text-gray-300">
                  {comment.text}
                </p>
                <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">{comment.time}</p>
              </div>
            ))}
          </div>

          {/* Add new comment */}
          <div className="mt-6">
            <h5 className="font-semibold text-navy-600 dark:text-white mb-2">Add a Comment</h5>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 mb-2 border rounded-lg dark:bg-navy-800 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Write your comment..."
              className="w-full p-2 mb-4 border rounded-lg dark:bg-navy-800 dark:text-white"
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handlePostComment}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700"
            >
              Post Comment
            </button>
          </div>
        </div>
      </Card>
      {/* FAQs card */}
      <Card extra={"w-full p-4 h-full mt-4" } id='faq'>
        <div className="flex flex-col w-full h-full p-4" >
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              FAQs
            </h4>
          </div>
          <div className="mt-4 space-y-4">
            {/* FAQ 7 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                What happens if I opt out of an invest?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                You will be refunded your initial investment and any profit(Not only limited to investment returns) made will be forfeited.
              </p>
            </div>
            {/* FAQ 1 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                When can I withdraw my profits?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                Profits are only available for withdrawal when the target for investors is reached.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                How do I gain more?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                Refer and play games to earn more. Each referral fetches you 15% of the
                referee's profit.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                Are there any fees for withdrawals?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                Yes, a minimal transaction fee applies depending on the payment method
                and the network fee at the time of withdrawal.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                How long does it take to process a withdrawal?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                Withdrawals are typically processed within 1-3 business days, depending
                on the payment method and network congestion.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                Can I invest using cryptocurrency?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                No, we do not accept various cryptocurrencies for investment.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h5 className="font-semibold text-navy-600 dark:text-white">
                Is there a limit to how much I can invest?
              </h5>
              <p className="text-gray-500 dark:text-gray-300">
                You can only invest in three firms for now. You can only invest once in any single firm at a time unless you opt out of the current investment.
              </p>
            </div>
            {/* Begin Button */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700"
              onClick={handlePlayNowClick}
            >
              Begin
            </button>
          </div>
        </div>
      </Card>
      

    </div>
  );
};

export default Dashboard;

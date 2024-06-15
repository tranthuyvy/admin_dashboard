import ColumnChartStatistics from "../components/ColumnChartStatistics"
import DashboardStatisGrid from "../components/DashboardStatisGrid"
import PieChartStatistics from "../components/PieChartStatistics"
import RecentOrder from "../components/RecentOrder"
import NewCustomers from "../components/NewCustomers"

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 w-[80%] ml-[18%]">
      <DashboardStatisGrid />
      <div className="flex flex-row gap-4 w-full">
        <ColumnChartStatistics />
        <PieChartStatistics />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrder />
        <NewCustomers />
      </div>
    </div>
  )
}

export default Dashboard

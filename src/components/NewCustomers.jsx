import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCustomersRequest } from "../redux/actions/actions";
import { sortByDate } from "../utils/sort";

const NewCustomers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector(state => state.customers.customers);

  useEffect(() => {
    try {
      dispatch(getAllCustomersRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch])

  return (
    <div className="flex-[0.45] bg-white p-4 rounded-md border border-gray-200">
      <div className="flex justify-between">
        <strong className="text-sub font-medium">Khách hàng mới</strong>
        <p
          onClick={() => navigate('/admin/customers')}
          className="text-sky-600 text-[14px] font-medium cursor-pointer hover:underline"
        >
          More
        </p>

      </div>
      <div className="mt-4 flex flex-col gap-3">
        {customers?.data && sortByDate(customers?.data.filter(customer => customer.username !== "admin"), 'created_at').slice(0, 5).map((customer) => (
          <div
            key={customer?.user_id}
            className="flex items-start"
          >
            <div className="w-[50px] h-[50px] bg-primary rounded-md">
              <img
                className="w-full h-full object-contain"
                src={customer?.avatar || "https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"}
                alt={customer?.username}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{customer?.username}</p>

            </div>
            {customer?.created_at && <div className="text-xs text-gray-400 pl-1.5">{new Date(customer.created_at).toLocaleDateString()}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewCustomers

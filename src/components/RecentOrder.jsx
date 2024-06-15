import { getOrderStatus } from "../constants/Status"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrdersRequest } from "../redux/actions/actions";
import { sortByDate } from "../utils/sort";
import { useNavigate } from "react-router-dom";

const RecentOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector(state => state.orders.orders);

  useEffect(() => {
    try {
      dispatch(getAllOrdersRequest())
    } catch (error) {
      console.error("Error dispatch", error)
    }
  }, [dispatch])

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-md border border-gray-200 flex-1">
      <div className="flex justify-between">
        <strong className="text-sub font-semibold">Đơn hàng gần đây</strong>

        <p
          onClick={() => navigate('/admin/orders')}
          className="cursor-pointer text-sky-600 hover:underline text-[14px] font-semibold"
        >
          More
        </p>

      </div>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead className="text-white font-medium bg-primary">
            <tr className="bg-primary">
              <td className="rounded-s-md">STT</td>
              <td>Hinh Anh</td>
              <td>Ten San Pham</td>
              <td>Total Price</td>
              <td>Date</td>
              <td className="rounded-e-md">Status</td>
            </tr>
          </thead>
          <tbody>
            {orders?.data && sortByDate(orders?.data, 'create_at').slice(0, 3).map((order, index) => (
              <tr key={index} className="cursor-pointer" onClick={() => navigate(`/admin/order/${order.order_id}`)}>
                <td>{index + 1}</td>
                <td className="flex items-center">
                  {[...new Map(order.order_detail.map(item => [item.product.image, item])).values()].map((uniqueItem, index) => (
                    <img
                      key={index}
                      className="w-[60px] mt-[2px] rounded-full shadow-md mr-2"
                      src={uniqueItem.product && uniqueItem.product.image}
                      alt={uniqueItem.product && uniqueItem.product.product_name}
                    />
                  ))}
                </td>
                <td>
                  {order.order_detail.map((item, index) => (
                    <div key={index}>
                      {item.quantity} {item.product && item.product.product_name} ({item.product && item.size}),
                    </div>
                  ))}
                </td>
                <td>{(order.total_price).toLocaleString('en')} VND</td>
                <td>{new Date(order.create_at).toLocaleDateString()}</td>
                <td>{getOrderStatus(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrder

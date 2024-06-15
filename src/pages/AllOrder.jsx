import { getAllOrdersRequest } from "../redux/actions/actions"
import { getOrderStatus } from "../constants/Status"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AllOrder = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.orders)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    try {
      dispatch(getAllOrdersRequest())
    } catch (error) {
      console.error("Error dispatch", error)
    }
  }, [dispatch])

  useEffect(() => {
    const filtered = orders?.data?.filter((order) => {
      const orderDate = new Date(order.create_at).getTime();
      const startDateTimestamp = startDate ? startDate.getTime() : null;
      const endDateTimestamp = endDate ? endDate.getTime() : null;


      if (startDateTimestamp && orderDate < startDateTimestamp) {
        return false;
      }

      if (endDateTimestamp && orderDate > endDateTimestamp) {
        return false;
      }

      if (status && order.status !== parseInt(status)) {

        return false;
      }
      return true;
    });
    setFilteredOrders(filtered || []);

    const total = filtered ? filtered.reduce((acc, order) => acc + order.total_price, 0) : 0;
    setTotalPrice(total);

  }, [orders.data, startDate, endDate, status]);

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setStatus(null);
  }

  return (
    <>
      <div className="ml-[18%] w-[80%] font-RobotoMedium">
        <div className="flex justify-between">
          <div className="p-2 flex items-center justify-center gap-2">
            <label>Ngày bắt đầu</label>
            <DatePicker className="text-center p-[3px] rounded-md border-primary border-[1px]" selected={startDate} onChange={date => setStartDate(date)} />
          </div>

          <div className="p-2 flex items-center justify-center gap-2">
            <label>Ngày kết thúc</label>
            <DatePicker className="text-center p-[3px] rounded-md border-primary border-[1px]" selected={endDate} onChange={date => setEndDate(date)} />
          </div>

          <div className="p-2 flex items-center justify-center gap-2">
            <label>Trạng thái</label>
            <select
              className="p-[3px] rounded-md border-primary border-[1px] text-center"
              value={status || ''}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Tất cả</option>
              <option value="0">Chờ xác nhận</option>
              <option value="1">Đã xác nhận</option>
              <option value="2">Đang thực hiện</option>
              <option value="3">Đang giao</option>
              <option value="4">Đã giao</option>
              <option value="5">Đã hủy</option>
            </select>
          </div>

          <div className="p-2">
            <button
              onClick={() => handleReset()}
              className="text-center text-[14px] bg-primary text-white rounded-md shadow-md uppercase px-5 py-[7px] font-RobotoMedium hover:bg-hoverPrimary transition duration-200 ease-in-out"
            >
              Đặt lại
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">STT</td>
              <td>Hình Ảnh</td>
              <td>Tên Sản Phẩm</td>
              <td>Địa Chỉ</td>
              <td>Tổng Số Lượng</td>
              <td>Thanh Toán</td>
              <td>Ngày Đặt</td>
              <td className="rounded-e-md">Trạng Thái</td>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
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
                <td>{order.customer.address}</td>
                <td>{order.total_quantity}</td>
                <td>{(order.total_price).toLocaleString('en')} VNĐ</td>
                <td>{new Date(order.create_at).toLocaleDateString()}</td>
                <td>{getOrderStatus(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-[80%] ml-[18%] mt-2">
        <div className="flex justify-between font-RobotoMedium">
          <div className="text-primary rounded-md p-2">Số đơn hàng: {filteredOrders ? filteredOrders.length : 0}</div>
          <div className="text-primary rounded-md p-2">Tổng: {totalPrice.toLocaleString('en')} VNĐ</div>
        </div>
      </div>
    </>
  )
}

export default AllOrder

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetailRequest } from "../redux/actions/actions";
import axios from "axios";
import OrderTraker from "../components/Order/OrderTraker";

const ORDER_STATUS_NEXT = {
  0: "Xác Nhận",
  1: "Thực Hiện Món",
  2: "Đang Giao",
  3: "Giao Thành Công",
};

const AdminOrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector(state => state.orderDetail.orderDetail);

  useEffect(() => {
    try {
      dispatch(getOrderDetailRequest(id));
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, id]);

  const handleCancelOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.put(`http://localhost:9999/api/admin/order/${id}/status`, { status: 5 }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(() => { dispatch(getOrderDetailRequest(id)); })
    } catch (error) {
      console.error('Error change order status', error);
    }
  }

  const handleConfirmOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const currentStatus = orderDetail?.status;
      const newStatus = currentStatus + 1;
      axios.put(`http://localhost:9999/api/admin/order/${id}/status`, { status: newStatus }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(() => { dispatch(getOrderDetailRequest(id)); })
    } catch (error) {
      console.error('Error change order status', error);
    }
  };

  const activeStep = orderDetail?.status + 1;

  return (
    <>
      <div className="ml-[18%]">
        <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
          <OrderTraker activeStep={activeStep} />
        </h1>
      </div>
      <div className="flex">
        <div className="flex flex-[0.6] gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-2">
          <div className="w-full ml-5">
            <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Thông Tin Nhận Hàng</h5>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Họ Và Tên:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer?.firstname} {orderDetail?.customer?.lastname}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Địa Chỉ Nhận Hàng:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.address}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Email:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.email}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Số Điện Thoại:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.user.username}</span>
            </p>
          </div>

        </div>
        <div className="flex-[0.4] w-[80%] ml-[20px] mr-[30px] rounded-md shadow-md bg-white mt-2">
          <div className="ml-5">
            <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Chi Tiết Hóa Đơn</h5>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Tổng số lượng:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.total_quantity}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Tổng tiền:</span>
              {orderDetail?.total_price && <span className="text-primary font-RobotoSemibold">{(orderDetail.total_price).toLocaleString('en')} VNĐ</span>}
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Phí vận chuyển:</span>
              <span className="text-primary font-RobotoSemibold">{(20000).toLocaleString('en')} VNĐ</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Thanh toán:</span>
              {orderDetail?.total_price && <span className="text-primary font-RobotoSemibold">{(orderDetail.total_price + 20000).toLocaleString('en')} VNĐ</span>}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">STT</td>
              <td>Hình Ảnh</td>
              <td>Sản Phẩm</td>
              <td>Size</td>
              <td>Số Lượng</td>
              <td>Đơn Giá</td>
              <td className="rounded-e-md">Ngày Đặt</td>
            </tr>
          </thead>
          <tbody>
            {orderDetail?.order_detail && orderDetail.order_detail.map((orderItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="flex items-center">
                  <img
                    className="w-[60px] mt-[2px] rounded-full shadow-md mr-2"
                    src={orderItem?.product.image}
                    alt={orderItem?.product.product_name}
                  />
                </td>

                <td>
                  <p>{orderItem?.product.product_name}</p>
                  <span className="text-[12px]">{orderItem?.product.category.category_name}</span>
                </td>
                <td>{orderItem?.size}</td>

                <td>{orderItem?.quantity}</td>
                <td>{(orderItem.product.price_update_detail[0].price_new).toLocaleString('en')} VNĐ</td>
                <td>{new Date(orderDetail.create_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ml-[18%] w-[80%] flex justify-between">
        <div>

        </div>
        <div className="flex gap-3">
          {orderDetail?.status === 0 &&
            <button
              onClick={() => handleCancelOrder()}
              className="mt-5 bg-main text-white font-RobotoMedium text-[16px] rounded-md p-2 shadow-md hover:bg-hoverRed ease-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-r border-none"
            >
              Hủy Đơn Hàng
            </button>
          }
          {orderDetail?.status < 4 &&
            <button
              className="mt-5 bg-primary text-white font-RobotoMedium text-[16px] rounded-md p-2 shadow-md hover:bg-hoverPrimary ease-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-r border-none"
              onClick={() => handleConfirmOrder()}
            >
              {ORDER_STATUS_NEXT[orderDetail?.status]}
            </button>
          }
        </div>
      </div >



    </>
  )
}

export default AdminOrderDetail

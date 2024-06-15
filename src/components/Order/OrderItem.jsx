import PropTypes from 'prop-types';
import { getOrderStatus } from '../../constants/Status';
import { formatDateTime } from '../../utils/formatDateTime';
import { useNavigate } from 'react-router-dom';

const OrderItem = ({ order }) => {
  const { order_id, total_price, total_quantity, status, create_at, order_detail } = order;
  const navigate = useNavigate();

  return (
    <>
      <div
        className="p-3 shadow-lg rounded-md border-neutral-200 border-2 cursor-pointer"
        onClick={() => navigate(`/order/${order_id}`)}
      >
        <div className='flex justify-end'>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/icon%2Ftruck-delivery.png?alt=media&token=d8a4fa9c-eae7-4918-8d0d-0c54d49cc079"
            alt="truck-delivery"
            className='w-8 h-8 mr-2 -mt-2'
          />

          <div className="flex text-sm lg:text-base items-center">
            <p className="">Thời gian đặt: {formatDateTime(create_at)}</p>
          </div>

        </div>
        <div className="w-full flex items-center justify-between">

          <div className="py-8 ml-1.5 flex justify-center items-center">
            {order_detail.map((orderDetail, index) => (
              <img
                key={index}
                className="w-[100px] rounded-full shadow-md bg-whiteYellow object-cover object-top"
                src={orderDetail?.product?.image}
                alt={orderDetail?.product?.product_name}
                loading="lazy"
              />
            ))}

            <div className='grid grid-rows-2 gap-2'>
              {order_detail.map((orderDetail, index) => (
                <div key={index}>
                  <p className="text-[14px] ml-8 space-y-1">
                    {`${orderDetail?.product?.product_name} (${orderDetail?.size})`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex items-center lg:space-x-5">
            <div className="flex text-sm lg:text-base">
              <p>Tổng số lượng: {total_quantity}</p>
            </div>
            <div className="flex text-sm lg:text-base">
              <p className="text-main ">Thanh toán: {total_price.toLocaleString('en')} VNĐ</p>
            </div>

            <div className="flex text-sm lg:text-base">
              <p className="">{getOrderStatus(status)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderItem

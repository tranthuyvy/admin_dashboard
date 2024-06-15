import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCouponsRequest } from "../redux/actions/actions";
import { getStatus } from "../constants/Status";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCoupons = () => {
  const dispatch = useDispatch();
  const coupons = useSelector((state) => state.coupons.coupons);

  useEffect(() => {
    try {
      dispatch(getAllCouponsRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch])

  console.log("coupons", coupons)

  // const handleShowDialog = () => {
  //   setShowDialog(true);
  // }

  // const handleCloseDialog = () => {
  //   setShowDialog(false);
  // }

  // const handleDeleteCoupon = async (couponId) => {
  //   const confirmDelete = window.confirm(
  //     "Bạn có chắc chắn muốn xóa loại này không?"
  //   );

  //   const token = localStorage.getItem("token");

  //   if (confirmDelete) {
  //     try {

  //       await axios.put(`http://localhost:9999/api/admin/coupon/${couponId}/delete`, null, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       setDeletedCategoryId(couponId);
  //     } catch (error) {
  //       console.error("Error deleting category:", error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">ID</td>
              <td>Hình Ảnh</td>
              <td>Ngày Tạo</td>
              <td>Ngày Kết Thúc</td>
              <td>Giá Trị</td>
              <td>Loại</td>
              <td>Số Lượng</td>
              <td>Người Tạo</td>
              <td>Trạng Thái</td>
              <td className="rounded-e-md">Vô Hiệu Hóa</td>
            </tr>
          </thead>
          <tbody>
            {coupons.data && coupons?.data.map((coupon) => (
              <tr key={coupons.coupon_id}>
                <td>
                  {coupon?.coupon_id}
                </td>
                <td>
                  <img
                    src={coupon?.image || "https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"}
                    alt={coupon?.type}
                    className="w-[68px] object-contain rounded-md bg-primary"
                  />
                </td>
                <td>{new Date(coupon?.created_at).toLocaleDateString()}</td>
                <td>{new Date(coupon?.end_date).toLocaleDateString()}</td>
                <td>{coupon?.minimum_value}</td>
                <td>{coupon?.type}</td>
                <td>{coupon?.quantity}</td>
                <td>{coupon?.quantity}</td>
                <td>{getStatus(coupon?.status)}</td>
                <td>
                  <MdDelete className="cursor-pointer text-primary" fontSize={25} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/admin/create-coupon">
        <div className="fixed right-8 bottom-3">
          <IoIosAddCircle
            fontSize={50}
            className="cursor-pointer text-primary"
          />
        </div>
      </Link>
    </>
  )
}

export default AllCoupons;

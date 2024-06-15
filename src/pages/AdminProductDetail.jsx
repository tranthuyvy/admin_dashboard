import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailRequest } from "../redux/actions/actions";
import { getStatus } from "../constants/Status";

const AdminProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.productDetail.productDetail);

  useEffect(() => {
    try {
      dispatch(getProductDetailRequest(id));
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, id]);

  console.log("productDetail", productDetail)

  return (
    <>
      {productDetail && (
        <div className="flex">
          <div className="flex flex-[0.6] gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-2">
            <div className="flex">

              <div className="flex-[0.6] w-full ml-5">
                <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Thông Tin Sản Phẩm</h5>
                <p className="p-5">
                  <span className="text-primary font-RobotoMedium mr-2">Mã Sản Phẩm:</span>
                  <span className="text-primary font-RobotoSemibold">{productDetail?.product_id}</span>
                </p>
                <p className="p-5">
                  <span className="text-primary font-RobotoMedium mr-2">Tên Sản Phẩm:</span>
                  <span className="text-primary font-RobotoSemibold">{productDetail?.product_name}</span>
                </p>
                <p className="p-5">
                  <span className="text-primary font-RobotoMedium mr-2">Category:</span>
                  <span className="text-primary font-RobotoSemibold">{productDetail?.category.category_name}</span>
                </p>
                {productDetail.price_update_detail[0] && (
                  <p className="p-5">
                    <span className="text-primary font-RobotoMedium mr-2">Đơn Giá:</span>
                    <span className="text-primary font-RobotoSemibold">{(productDetail.price_update_detail[0].price_new).toLocaleString('en')} VNĐ</span>
                  </p>
                )}
                <p className="p-5">
                  <span className="text-primary font-RobotoMedium mr-2">Tạo Bởi:</span>
                  <span className="font-RobotoSemibold">{productDetail?.staff_created.firstname} {productDetail?.staff_created.lastname}</span>
                </p>

                {productDetail?.staff_updated && (
                  <p className="p-5">
                    <span className="text-primary font-RobotoMedium mr-2">Cập Nhật Bởi:</span>
                    <span className="font-RobotoSemibold">{productDetail?.staff_updated.firstname} {productDetail?.staff_updated.lastname}</span>
                  </p>
                )}
                <p className="p-5">
                  <span className="text-primary font-RobotoMedium mr-2">Trạng Thái:</span>
                  {productDetail?.status && <span className="font-RobotoSemibold">{getStatus(productDetail?.status)}</span>}
                </p>
              </div>

              <div className="flex flex-[0.4] justify-center items-center">
                <img
                  src={productDetail?.image}
                  alt={productDetail?.product_name}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex-[0.4] w-[80%] ml-[20px] mr-[30px] rounded-md shadow-md bg-white mt-2">
            <div className="ml-5">
              <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Đánh Giá Sản Phẩm</h5>
              <p className="p-5">
                <span className="text-primary font-RobotoMedium mr-2">Trinh Son:</span>
                <span className="text-primary font-RobotoSemibold">Tuyệt cú mèo</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminProductDetail

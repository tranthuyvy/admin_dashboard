import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsRequest } from "../redux/actions/actions";
import { getStatus } from "../constants/Status";
import { IoIosAddCircle } from "react-icons/io";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import axios from "axios";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products.products);
  const [deletedProductId, setDeletedProductId] = useState(null);

  useEffect(() => {
    try {
      dispatch(getAllProductsRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, deletedProductId]);

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này không?"
    );

    const token = localStorage.getItem("token");

    if (confirmDelete) {
      try {

        await axios.delete(`http://localhost:9999/api/admin/product/${productId}/delete`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDeletedProductId(productId);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">

        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">ID</td>
              <td>Ảnh</td>
              <td>Tên</td>
              <td>Loai San Pham</td>
              <td>Giá San Pham</td>
              <td>Mô Tả</td>
              <td>Trạng Thái</td>
              <td className="rounded-e-md">Action</td>
            </tr>
          </thead>
          <tbody>
            {products?.data && products.data.map((product) => (
              <tr key={product.product_id}>
                <td className="cursor-pointer" onClick={() => navigate(`/admin/product/${product?.product_id}`)}>
                  {product?.product_id}
                </td>
                <td className="cursor-pointer" onClick={() => navigate(`/admin/product/${product?.product_id}`)}>
                  <img
                    src={product?.image}
                    alt={product?.product_name}
                    className="w-[88px] object-cover rounded-md"
                  />
                </td>
                <td className="cursor-pointer" onClick={() => navigate(`/admin/product/${product?.product_id}`)}>{product?.product_name}</td>
                <td>{product?.category?.category_name}</td>
                <td>{product?.price_update_detail[0]?.price_new.toLocaleString('en')}</td>
                <td onClick={() => navigate(`/admin/product/${product?.product_id}`)}>{product?.description && product.description.length > 50 ? `${product?.description.substring(0, 50)}...` : product.description}</td>
                <td>{getStatus(product?.status)}</td>
                <td>
                  <span>
                    <MdModeEditOutline className="cursor-pointer text-primary" fontSize={25} onClick={() => navigate(`/admin/update-product/${product?.product_id}`)} />
                  </span>
                  <span>
                    <MdDelete className="cursor-pointer text-primary" fontSize={25} onClick={() => handleDeleteProduct(product?.product_id)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed right-6 bottom-3">
        <IoIosAddCircle fontSize={50} className="cursor-pointer text-primary" onClick={() => navigate("/admin/create-product")} />
      </div>
    </>
  );
};

export default AllProducts;

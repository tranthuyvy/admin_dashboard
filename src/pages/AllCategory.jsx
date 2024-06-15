import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesRequest } from "../redux/actions/actions";
import { getStatus } from "../constants/Status";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const AllCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [showDialog, setShowDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [deletedCategoryId, setDeletedCategoryId] = useState(null);

  useEffect(() => {
    try {
      dispatch(getAllCategoriesRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, deletedCategoryId])

  const handleShowDialog = () => {
    setShowDialog(true);
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
    setNewCategoryName("");
  }

  const handleAddCategory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:9999/api/admin/category/add', {
        category_name: newCategoryName
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);

      handleCloseDialog();
      dispatch(getAllCategoriesRequest());
    } catch (error) {
      console.error("Error adding category", error);
    }
  }

  const getCategoryNameById = (categoryId) => {
    const category = categories?.data.find(cat => cat.category_id === categoryId);
    return category?.category_name || '';
  }

  const handleShowUpdateDialog = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setNewCategoryName(getCategoryNameById(categoryId));
    setShowUpdateDialog(true);
  }

  const handleCloseUpdateDialog = () => {
    setShowUpdateDialog(false);
    setSelectedCategoryId(null);
    setNewCategoryName("");
  }

  const handleUpdateCategory = async (categoryId) => {
    console.log("update category", categoryId)
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(`http://localhost:9999/api/admin/category/${categoryId}/update`, {
        category_name: newCategoryName
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data);

      setShowUpdateDialog(false);
      setNewCategoryName("");

      dispatch(getAllCategoriesRequest());
    } catch (error) {
      console.error("Error updating category", error);
    }
  }

  const handleDeleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa loại này không?"
    );

    const token = localStorage.getItem("token");

    if (confirmDelete) {
      try {

        await axios.put(`http://localhost:9999/api/admin/category/${categoryId}/delete`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDeletedCategoryId(categoryId);
      } catch (error) {
        console.error("Error deleting category:", error);
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
              <td>Hình Ảnh</td>
              <td>Tên Loại</td>
              <td>Ngày Tạo</td>
              <td>Người Tạo</td>
              <td>Trạng Thái</td>
              <td className="rounded-e-md">Hành Động</td>
            </tr>
          </thead>
          <tbody>
            {categories?.data && categories?.data.map((category, index) => (
              <tr key={category.slug}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <img
                    src={category?.image || "https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"}
                    alt={category?.category_name}
                    className="w-[68px] h-[50px] object-contain rounded-md bg-primary"
                  />
                </td>
                <td>{category?.category_name}</td>
                <td>{new Date(category?.created_at).toLocaleDateString()}</td>
                <td>Tui Nè</td>
                <td>{getStatus(category?.status)}</td>
                <td>
                  <span>
                    <MdModeEditOutline className="cursor-pointer text-primary" fontSize={25} onClick={() => handleShowUpdateDialog(category?.category_id)} />
                  </span>
                  <span>
                    <MdDelete className="cursor-pointer text-primary" fontSize={25} onClick={() => handleDeleteCategory(category?.category_id)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed right-6 bottom-3">
        <IoIosAddCircle fontSize={50} className="cursor-pointer text-primary" onClick={() => handleShowDialog()} />
      </div>

      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Thêm Loại</h2>
            <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full" placeholder="Nhập tên loại" />
            <div className="flex justify-end">
              <button onClick={handleCloseDialog} className="bg-gray-300 px-4 py-2 rounded-md mr-2">Hủy</button>
              <button onClick={handleAddCategory} className="bg-primary text-white px-4 py-2 rounded-md">Thêm</button>
            </div>
          </div>
        </div>
      )}

      {showUpdateDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Cập Nhật Loại</h2>
            <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full" placeholder="Nhập tên loại" />
            <div className="flex justify-end">
              <button onClick={handleCloseUpdateDialog} className="bg-gray-300 px-4 py-2 rounded-md mr-2">Hủy</button>
              <button onClick={() => handleUpdateCategory(selectedCategoryId)} className="bg-primary text-white px-4 py-2 rounded-md">Cập Nhật</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AllCategory

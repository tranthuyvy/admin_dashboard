import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateProductRequest, getProductDetailRequest, getAllCategoriesRequest } from "../redux/actions/actions";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const message = useSelector((state) => state.updateProduct);
  const productDetail = useSelector((state) => state.productDetail.productDetail);
  const categories = useSelector((state) => state.categories.categories)
  const [formData, setFormData] = useState({
    file: '',
    data: {
      product_name: '',
      price: 0,
      description: '',
      status: '',
      category_name: '',
    },
  });
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate()
  const formDataRef = useRef(formData);

  useEffect(() => {
    try {
      dispatch(getProductDetailRequest(id));
      dispatch(getAllCategoriesRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    if (productDetail) {
      setFormData({
        ...formData,
        data: {
          product_name: productDetail?.product_name,
          price: productDetail?.price_update_detail[0]?.price_new,
          description: productDetail?.description,
          status: productDetail?.status,
          category_name: productDetail?.category?.category_name,
        },
      });
      setImageSrc(productDetail?.image);
    }
  }, [productDetail]);

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else if (e.target.name === 'status') {
      const newStatus = e.target.checked ? "Active" : "Unactive";
      setFormData({ ...formData, data: { ...formData.data, status: newStatus } });
    } else {
      setFormData({ ...formData, data: { ...formData.data, [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    if (!formDataRef.current.file) {
      const emptyFile = new File([], '');
      formDataToSend.append('file', emptyFile);
    } else {
      formDataToSend.append('file', formDataRef.current.file);
    }
    formDataToSend.append('data', JSON.stringify(formDataRef.current.data));
    dispatch(updateProductRequest(id, formDataToSend));
  };

  useEffect(() => {
    if (message.code === 202) {
      console.log("Thành công")
      navigate("/admin/products");
    }
  }, [message, navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center ml-[18%]">
        <div className="flex mt-2 justify-center items-center">
          <h2 className="text-main font-RobotoSemibold text-[20px] uppercase">Update Product</h2>
        </div>
        <div className="w-[50%] p-2 rounded-md shadow-md bg-white text-primary mt-5">
          <form
            className="flex flex-col p-5 text-primary gap-5"
            onSubmit={handleSubmit}
          >
            <div className="relative">

              <input
                type="file"
                name="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleChange}
              />
              <div className="bg-gray-200 rounded-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                {formData.file ? (
                  <span className="text-primary font-RobotoMedium">{formData.file.name}</span>
                ) : (
                  <span className="text-primary font-RobotoMedium">Choose File</span>
                )}
              </div>
            </div>
            {formData.file && (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="Please choose file again"
                className="w-full h-[280px] object-contain"
              />
            )}
            {imageSrc && !formData.file && (
              <img
                src={imageSrc}
                alt="Selected file"
                className="w-full h-[280px] object-contain"
              />
            )}
            <div className="flex justify-between">
              <div className="flex-1">
                <label className="text-[14px]">Product Name:</label>
                <input
                  className="border-b-2 p-2"
                  type="text"
                  name="product_name"
                  onChange={handleChange}
                  value={formData.data.product_name}
                />
              </div>
              <div className="flex-1">
                <label className="text-[14px] block">Price:</label>
                <input
                  className="border-b-2 p-2"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={formData.data.price}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex-1">
                <label className="text-[14px] block">Description:</label>
                <textarea
                  className="border-b-2"
                  name="description"
                  onChange={handleChange}
                  value={formData.data.description}
                />
              </div>

              <div className="flex-1">
                <label className="text-[14px] block mb-5">Category:</label>
                <select
                  className="p-2 rounded-md border-none"
                  name="category_name"
                  onChange={handleChange}
                  value={formData.data.category_name}
                >
                  {categories?.data && categories?.data.map((category) => (
                    <option key={category.slug} value={category.category_name}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                name="status"
                onChange={handleChange}
                checked={formData.data.status === "Active"}
              />
              <span className="slider round"></span>
            </label>
            <div className="flex justify-center">
              <button
                className="w-[40%] bg-primary text-white rounded-md shadow-md py-3 uppercase font-RobotoMedium"
                type="submit"
              >
                Cập Nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct

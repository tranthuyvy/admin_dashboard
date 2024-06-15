import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addCouponRequest } from "../redux/actions/actions";

const CreateCoupon = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.addCoupon);
  const [formData, setFormData] = useState({
    file: '',
    data: {
      content: '',
      status: 'Active',
      type: '',
      start_date: '',
      end_date: '',
      quantity: '',
      remaining_amount: '',
      minimum_value: '',
    },
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, data: { ...formData.data, [e.target.name]: e.target.value } });
    }
  };

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, data: { ...formData.data, start_date: date } });
  };

  const handleEndDateChange = (date) => {
    setFormData({ ...formData, data: { ...formData.data, end_date: date } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('file', formData.file);
    formDataToSend.append('data', JSON.stringify(formData.data));
    dispatch(addCouponRequest(formDataToSend));
  };

  useEffect(() => {
    if (message.code === 201) {
      setFormData({
        file: '',
        data: {
          content: '',
          status: 'Active',
          type: '',
          start_date: '',
          end_date: '',
          quantity: '',
          remaining_amount: '',
          minimum_value: '',
        },
      });
      navigate("/admin/coupons")
    }
  }, [message, navigate])

  return (
    <>
      <div className="flex flex-col justify-center items-center ml-[18%]">
        <div className="flex mt-2 justify-center items-center">
          <h2 className="text-main font-RobotoSemibold text-[20px] uppercase">Tạo mã giảm giá</h2>
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
                accept=".jpg, .jpeg, .png"
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
                  <span className="text-primary font-RobotoMedium">Chọn Ảnh</span>
                )}
              </div>
            </div>
            {formData.file && (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="Please select an image"
                className="w-full h-[280px] object-contain"
              />
            )}
            <div className="flex justify-between">
              <div className="flex-1">
                <label className="text-[14px]">Content:</label>
                <input
                  className="border-b-2 p-2"
                  type="text"
                  name="content"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="text-[14px] block">Value:</label>
                <input
                  className="border-b-2 p-2"
                  type="number"
                  name="minimum_value"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex-1 items-center justify-center">
                <label>Ngày bắt đầu</label>
                <DatePicker
                  selected={formData.data.start_date}
                  onChange={handleStartDateChange}
                  className="text-center mt-4 p-[3px] rounded-md border-primary border-[1px]"
                />
              </div>

              <div className="flex-1 items-center justify-center">
                <label>Ngày kết thúc</label>
                <DatePicker
                  selected={formData.data.end_date}
                  onChange={handleEndDateChange}
                  className="text-center mt-4 p-[3px] rounded-md border-primary border-[1px]"
                />
              </div>

            </div>
            <div className="flex justify-between">
              <div className="flex-1">
                <label className="text-[14px] block">Số lượng mã:</label>
                <input
                  className="border-b-2 p-2"
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label className="text-[14px] block mb-3">Loại:</label>
                <select
                  className="p-2 rounded-md border-none"
                  name="type"
                  onChange={handleChange}
                >
                  <option value="van_chuyen">Vận Chuyển</option>
                  <option value="san_pham">Sản Phẩm</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="w-[40%] bg-primary text-white rounded-md shadow-md py-3 uppercase font-RobotoMedium"
                type="submit"
              >
                Tạo mã giảm giá
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCoupon

import { useNavigate } from "react-router-dom";
import './authStyle.css';
import Helmet from "../../components/Helmet/Helmet";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoBack = () => {
    navigate("/login");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:9999/auth/signup', {
        username,
        password,
        role_name: "CUSTOMER",
      });
      const { message, code } = response.data;
      if (code === 201) {
        navigate("/login");
        console.log(message);

      } else {
        console.log("Đăng ký không thành công");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Helmet title="Signup">
      <body className="w-full h-full relative z-[-1]">
        <img
          className="fixed h-full w-full"
          src="https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png"
        />
        <img
          onClick={handleGoHome}
          className="absolute cursor-pointer w-[100px] h-[80px] ml-3 py-[10px] pl-3"
          src="https://www.highlandscoffee.com.vn/vnt_upload/File/11_2023/Red_logo800.png"
          alt="Logo"
        />
        <div
          className="cursor-pointer layout_login absolute flex-col justify-center items-center mt-[10%] ml-[30%] w-[40%] rounded-[15px]"
        >
          <img
            onClick={handleGoBack}
            className="w-[24px] h-[24px] ml-4"
            src="https://icons.veryicon.com/png/o/miscellaneous/arrows/go-back-2.png"
          />
          <h1 className="text-center mb-8 font-bold text-[25px] text-main">
            Thông Tin Đăng Ký
          </h1>

          <div className="input">
            <label className="">Số điện thoại</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="h-8 w-[45%] outline-0 bg-[#ebebeb] p-2 rounded"
            />
          </div>
          <div className="input">
            <label className="">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="h-8 w-[45%] outline-0 bg-[#ebebeb] p-2 rounded"
            />
          </div>
          <div className="btn_submit">
            <button className="w-fit" type="submit" onClick={handleSignup}>
              Đăng Ký
            </button>
          </div>
        </div>
      </body>
    </Helmet>
  );
};

export default Signup;

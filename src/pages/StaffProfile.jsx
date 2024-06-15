import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileRequest } from "../redux/actions/actions";

const StaffProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user.data);

  useEffect(() => {
    dispatch(getUserProfileRequest());

  }, [dispatch])

  return (
    <div className="flex flex-col w-full ml-[15.1%] rounded-md shadow-md bg-white -mt-4">
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-white">
        <div className="relative">
          <div className="lg:px-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-primary"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-main"></div>
            </div>
            <h1 className="uppercase text-center sm:text-left font-RobotoMedium text-primary text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
              User Profile
            </h1>
          </div>
        </div>
        <div className="relative md:w-[55%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png"
            alt="banner"
            className="w-full object-cover object-bottom h-full lg:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-white gap-5 mx-[10%]">
        <div className="relative md:w-[30%] border-primary border-[1px] shadow-lg rounded-xl">
          <div className="flex justify-center">
            <img
              src={user?.avatar || "https://png.pngtree.com/png-clipart/20230914/original/pngtree-christmas-corgi-vector-png-image_12160999.png"}
              alt="avt-cus"
              className="bg-primary rounded-full w-[150px] absolute -top-[80px]"
            />
            <div className="text-center">
              <h1 className="font-RobotoMedium text-primary text-2xl text-center mt-20">{user?.firstname} {user?.lastname}</h1>
              <p className="text-primary font-RobotoMedium text-[14px] my-4">{user?.user?.role?.role_name}</p>
              <p className="text-primary font-RobotoMedium text-[14px] my-4">{user?.address}</p>
            </div>

          </div>

          <div className="text-center my-4">
            <button className="items-center justify-center w-[200px] rounded-md text-primary border-primary border hover:bg-primary hover:text-white py-2.5 px-10 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mb-5 relative md:w-[50%] border-primary border-[1px] shadow-lg rounded-xl p-5">
          <div className="py-[40px] px-7 lg:px-14 w-full">
            <div className="flex justify-center">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">Họ và Tên</div>
                <div className="flex-1 text-right">{`${user?.firstname} ${user?.lastname}`}</div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">Email</div>
                <div className="flex-1 text-right">{user?.email}</div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">Phone</div>
                <div className="flex-1 text-right">{user?.phone}</div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">Birthday</div>
                <div className="flex-1 text-right">{(new Date(user?.birthday)).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">CCCD</div>
                <div className="flex-1 text-right">{user?.cccd}</div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <div className="flex w-full justify-between border-b-[1px] font-RobotoMedium">
                <div className="flex-1 text-left">Ngày làm việc</div>
                <div className="flex-1 text-right">{(new Date(user?.created_at)).toLocaleDateString()}</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default StaffProfile

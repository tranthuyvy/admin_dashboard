import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    window.location.href = "/login";
    localStorage.removeItem("token");
  }

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div className="relative m-[auto]">
        <HiOutlineSearch fontSize={20} className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[500px] border border-gray-300 rounded-md px-4 py-2 pl-9 focus:font-medium focus:text-primary focus:outline-none focus:ring-1 focus:ring-primary transition duration-500 ease-in-out"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`${open && "bg-gray-100"} p-1.5 inline-flex rounded-sm items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100`}
              >
                <HiOutlineBell fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute z-10 w-48 mt-2 origin-top-right right-0 border border-gray-200 divide-y divide-gray-200 outline-none"
                >
                  <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Notification</strong>
                    <div className="mt-2 py-1">
                      Notification Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`${open && "bg-gray-100"} p-1.5 inline-flex rounded-sm items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100`}
              >
                <HiOutlineChatAlt fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute z-10 w-48 mt-2 origin-top-right right-0 border border-gray-200 divide-y divide-gray-200 outline-none"
                >
                  <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Message</strong>
                    <div className="mt-2 py-1">
                      Message Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:ring-2 focus:outline-none focus:ring-neutral-300">
              <span className="sr-only">Open</span>
              <div
                className="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://png.pngtree.com/png-clipart/20230914/original/pngtree-christmas-corgi-vector-png-image_12160999.png")' }}
              >
                <span className="sr-only">ttv</span>
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-md bg-white shadow-md p-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                    onClick={() => navigate("/admin/profile")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                    onClick={() => navigate("/admin/settings")}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={handleLogout}
                    className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>

            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default Header

import {
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineUserGroup,
  HiOutlineServer,
  HiOutlineReceiptTax,
  HiOutlineCog,
}
  from "react-icons/hi";

export const DASHBOARD_SIDEBAR_TOP_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <HiOutlineCube />
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <HiOutlineShoppingCart />
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/admin/customers',
    icon: <HiOutlineUserGroup />
  },
  {
    key: 'category',
    label: 'Category',
    path: '/admin/category',
    icon: <HiOutlineServer />
  },
  {
    key: 'coupons',
    label: 'Coupons',
    path: '/admin/coupons',
    icon: <HiOutlineReceiptTax />
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/admin/settings',
    icon: <HiOutlineCog />
  },
  // {
  //   key: 'logout',
  //   label: 'Logout',
  //   path: '/admin/logout',
  //   icon: <HiOutlineLogin />
  // },
]
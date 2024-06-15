import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Dashboard from "../pages/Dashboard";
import AllProducts from "../pages/AllProducts";
import AllOrder from "../pages/AllOrder";
import AllCustomers from "../pages/AllCustomer";
import AllCategory from "../pages/AllCategory";
import AdminOrderDetail from "../pages/AdminOrderDetail";
import AdminProductDetail from "../pages/AdminProductDetail";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import StaffProfile from "../pages/StaffProfile";
import AllCoupons from "../pages/AllCoupons";
import CreateCoupon from "../pages/CreateCoupon";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<AllProducts />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
      <Route path="/admin/product/:id" element={<AdminProductDetail />} />
      <Route path="/admin/orders" element={<AllOrder />} />
      <Route path="/admin/order/:id" element={<AdminOrderDetail />} />
      <Route path="/admin/customers" element={<AllCustomers />} />
      <Route path="/admin/category" element={<AllCategory />} />
      <Route path="/admin/profile" element={<StaffProfile />} />
      <Route path="/admin/coupons" element={<AllCoupons />} />
      <Route path="/admin/create-coupon" element={<CreateCoupon />} />

    </Routes>
  )
}

export default Routers

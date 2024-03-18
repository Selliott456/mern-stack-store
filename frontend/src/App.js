import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAnalyticsPage from "./admin/AdminAnalyticsPage";
import AdminChatsPage from "./admin/AdminChatsPage";
import AdminCreateProductPage from "./admin/AdminCreateProductPage";
import AdminEditProductPage from "./admin/AdminEditProductPage";
import AdminEditUserPage from "./admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./admin/AdminOrdersPage";
import AdminProductsPage from "./admin/AdminProductsPage";
import AdminUserPage from "./admin/AdminUserPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrdertDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="*" element="404 - Error Page doesnt exist" />

        {/* user protected routes */}
        <Route element={<ProtectedRouteComponent admin={false} />}>
          <Route
            path="user/order-details/"
            element={<UserOrdertDetailsPage />}
          />
          <Route path="user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart" element={<UserCartDetailsPage />} />
          <Route path="/user" element={<UserProfilePage />} />
        </Route>

        {/* Admin protected routes */}
        <Route element={<ProtectedRouteComponent admin={true} />}>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route
            path="/admin/create-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/user" element={<AdminUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

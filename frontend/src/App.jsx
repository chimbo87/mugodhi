import React from "react";
import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Members from "./pages/members/Members";
import Notifications from "./pages/notices/Notifications";
import Payments from "./pages/payments/Payments";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="members" element={<Members/>} />
          <Route path="notifications" element={<Notifications/>} />
          <Route path="payments" element={<Payments/>} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

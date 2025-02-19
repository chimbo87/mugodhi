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
import Admin from "./pages/admn/Admin";
import Notifications from "./pages/notices/Notifications";
import Payments from "./pages/payments/Payments";
import Profile from "./pages/profile/Profile";
import Events from "./pages/events/Events";
import Messaging from "./pages/messaging/Messaging";
import Chatbox from "./pages/messaging/Chatbox";
import Rent from "./pages/records/rent/Rent";
import Offering from "./pages/records/offerings/Offering";
import Pledges from "./pages/records/pledges/Pledges";
import Records from "./pages/records/churchrecords/Records";
import Rentdetails from "./pages/records/rent/Rentdetails";
import Rentreciept from "./pages/records/rent/Rentreciept";
import MemberDetails from "./pages/members/MemberDetails";
import Financials from "./pages/admn/financials/Financials";
import AdminView from "./pages/admn/admnview/AdminView";
import ChurchMembers from "./pages/admn/churchmembers/ChurchMembers";
import RentDetails from "./pages/admn/financials/RentDetails";
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
          <Route path="member-details" element={<MemberDetails/>} />
          <Route path="notifications" element={<Notifications/>} />
          <Route path="payments" element={<Payments/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="events" element={<Events/>} />
          <Route path="messaging" element={<Messaging/>} />
          <Route path="chats" element={<Chatbox/>} />
          <Route path="rent" element={<Rent/>} />
          <Route path="rent-details" element={<Rentdetails/>} />
          <Route path="rent-reciept" element={<Rentreciept/>} />
          <Route path="offerings" element={<Offering/>} />
          <Route path="pledges" element={<Pledges/>} />
          <Route path="records" element={<Records/>} />
        </Route>

        <Route path="/admnistration" element={<Admin/>}>
          <Route index element={<AdminView/>} />
          <Route path="overview" element={<AdminView/>} />
          <Route path="members" element={<ChurchMembers/>} />
          <Route path="financials" element={<Financials/>} />
          <Route path="rent-details" element={<RentDetails/>} />
          {/* <Route path="clients" element={<Clients/>} />
          <Route path="orders" element={<AdmnOrders/>} />
          <Route path="products" element={<Products/>} />
          <Route path="blogs" element={<AdmnBlogs/>} />
          <Route path="support" element={<AdmnSupport/>} />
          <Route path="notifications" element={<AdmnNotifications/>} />
          <Route path="profile" element={<AdmnProfile/>} /> */}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

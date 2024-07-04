import React, { createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
export const DashboardContext = createContext();

const Dashboard = () => {
  const { user } = useLoaderData();
  return (
    <DashboardContext.Provider value={{ user }}>
      <Navbar />
      <Outlet />
    </DashboardContext.Provider>
  );
};

export default Dashboard;

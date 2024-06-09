import React from 'react';
import Layout from '../components/layouts/Layout';
import Table from '../components/common/Table';
import Card from '../components/common/Card';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineToday, MdCalendarMonth } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const DashboardParentPage = () => {

  return (
    <Layout>
      <div className="p-8">
        <div className="pt-2">
          <h1 className="text-primary dark:text-dark-primary text-3xl font-bold text-left">DASHBOARD</h1>
          <h2 className="text-title dark:text-dark-title text-left">Welcome to your dashboard</h2>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
              <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-4"><Card title={"Total Customers"} icon={<FiUsers />} value={"+21%"} month={"Since last month"}/></div>
              <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-4"><Card title={"Sales Today"} icon={<MdOutlineToday />} value={"+21%"} month={"Since last month"}/></div>
              <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-4"><Card title={"Monthly Sales"} icon={<MdCalendarMonth />} value={"+5%"} month={"Since last month"}/></div>
              <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-4"><Card title={"Yearly Sales"} icon={<TbReport />} value={"+43%"} month={"Since last month"}/></div>
            </div>
            <div className="grid grid-rows">
              <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-10 text-contenttext dark:text-dark-contenttext text-sm">loading data</div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4">
            <div className="bg-sidebar-bg dark:bg-secondary-dark-background rounded-md p-6"><Table /></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardParentPage;

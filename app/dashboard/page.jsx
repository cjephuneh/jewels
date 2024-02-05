'use client';

import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card 
            title="Total Users" 
            number="5" 
            detail={{ percentage: "4%", text: "than previous week" }}
            icon="users"
          />
          <Card 
            title="Total Donations" 
            number="$15482675.98" 
            detail={{ percentage: "10%", text: "increase from last month" }}
            icon="donations"
          />
          <Card 
            title="Total Contituents" 
            number="5567" 
            detail={{ percentage: "2%", text: "more than last week" }}
            icon="contacts"
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;

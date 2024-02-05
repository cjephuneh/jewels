import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
    {
      title: "Analytics",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Contituents",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Donations",
          path: "/dashboard/donations",
          icon: <MdAttachMoney />,
        },
      ],
    },
    
    {
      title: "Support",
      list: [
        
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

const Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}>
        <Image
          className={styles.userImage}
          src= "/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Eric Koome</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
        <ul className={styles.list}>
         {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </div>
    )
  }
  
  export default Sidebar

  
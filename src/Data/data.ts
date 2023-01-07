import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare, UilMoneyWithdrawal
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'


export interface ISiderBarData {
    icon: React.ElementType
    heading: string
}

export const SidebarData: ISiderBarData[] = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: 'Products'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    },
];

export interface ICardsData {
    title: string;
    color: IColor
    barValue: number;
    value: string;
    png: any;
    series: ISeries[]
}
interface IColor {
    backGround: string;
    boxShadow: string;
}
interface ISeries {
    name: string;
    data: number[];
}

export const CardsData: ICardsData[] = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];

export interface IUpdatesData {
    img: string
    name: string
    noti: string
    time: string
}

// Recent Update Card Data
export const UpdatesData:IUpdatesData[] = [
    {
      "img": img1,
      "name": "Andrew Thomas",
      "noti": "has ordered Apple smart watch 2500mh battery.",
      "time": "25 seconds ago",
    },
    {
      "img": img2,
      "name": "James Bond",
      "noti": "has received Samsung gadget for charging battery.",
      "time": "30 minutes ago",
    },
    {
      "img": img3,
      "name": "Iron Man",
      "noti": "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      "time": "2 hours ago",
    },
  ];
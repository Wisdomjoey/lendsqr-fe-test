import { Props } from "../Components/LinkTile/linkTile";
import { Stats } from "../Components/StatsCard/statsCard";
import users from '../assets/images/user-friends 1.png';
import user1 from '../assets/images/users 1.png';
import sack from '../assets/images/sack 1.png';
import hand from '../assets/images/handshake-regular 1.png';
import piggy from '../assets/images/piggy-bank 1.png';
import loan from '../assets/images/Group 104.png';
import check from '../assets/images/user-check 1.png';
import times from '../assets/images/user-times 1.png';
import suit from '../assets/images/briefcase 1.png';
import bank from '../assets/images/Group.png';
import coin from '../assets/images/coins-solid 1.png';
import phone from '../assets/images/icon.png';
import gal from '../assets/images/galaxy 1.png';
import cog from '../assets/images/user-cog 1.png';
import scroll from '../assets/images/scroll 1.png';
import chart from '../assets/images/chart-bar 2.png';
import slides from '../assets/images/sliders-h 1.png';
import badge from '../assets/images/badge-percent 1.png';
import clip from '../assets/images/clipboard-list 1.png';
import tire from '../assets/images/tire 1.png';
import icon1 from '../assets/images/icon (4).png';
import icon2 from '../assets/images/icon (3).png';
import icon3 from '../assets/images/icon (2).png';
import icon4 from '../assets/images/icon (1).png';

export const data1: Props[] = [
  {
    prefix: users,
    text: 'Users',
    active: true,
  },
  {
    prefix: user1,
    text: 'Guarantors',
  },
  {
    prefix: sack,
    text: 'Loans',
  },
  {
    prefix: hand,
    text: 'Decision Models',
  },
  {
    prefix: piggy,
    text: 'Savings',
  },
  {
    prefix: loan,
    text: 'Loan Request',
  },
  {
    prefix: check,
    text: 'Whitelist',
  },
  {
    prefix: times,
    text: 'Karma',
  },
];

export const data2: Props[] = [
  {
    prefix: suit,
    text: 'Organisation',
  },
  {
    prefix: loan,
    text: 'Loan Products',
  },
  {
    prefix: bank,
    text: 'Saving Products',
  },
  {
    prefix: coin,
    text: 'Fees and Charges',
  },
  {
    prefix: phone,
    text: 'Transactions',
  },
  {
    prefix: gal,
    text: 'Services',
  },
  {
    prefix: cog,
    text: 'Service Account',
  },
  {
    prefix: scroll,
    text: 'Settlements',
  },
  {
    prefix: chart,
    text: 'Reports',
  },
];

export const data3: Props[] = [
  {
    prefix: slides,
    text: 'Preferences',
  },
  {
    prefix: badge,
    text: 'Fees and Pricing',
  },
  {
    prefix: clip,
    text: 'Audit Logs',
  },
  {
    prefix: tire,
    text: 'System Messages',
  },
];

export const stats: Stats[] = [
  {
    icon: icon1,
    title: 'users',
    stats: 2000,
  },
  {
    icon: icon2,
    title: 'active users',
    stats: 2000,
  },
  {
    icon: icon3,
    title: 'users with loans',
    stats: 2000,
  },
  {
    icon: icon4,
    title: 'users with savings',
    stats: 2000,
  },
];

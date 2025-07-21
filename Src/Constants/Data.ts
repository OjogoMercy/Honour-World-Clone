import Icons from "./Icons";

export const services = [
  {
    id: 1,
    label: "Airtime",
    icon: Icons.phone2,
    color: "#FF9800",
    Navigate: "Airtime",
  },
  {
    id: 2,
    label: "Data",
    icon: Icons.network,
    color: "#0E86E1",
    Navigate: "Data",
  },
  {
    id: 3,
    label: "Cable TV",
    icon: Icons.tv,
    color: "#00BCD4",
    Navigate:"CableTv",
  },
  {
    id: 4,
    label: "Electricity",
    icon: Icons.more,
    color: "#4CAF50",
    Navigate: "Electricity",
  },
  {
    id: 5,
    label: "Education",
    icon: Icons.education,
    color: "#4CAF50",
    Navigate: "Education",
  },
  {
    id: 6,
    label: "Auto Buy",
    icon: Icons.shop,
    color: "#4CAF50",
    Navigate: "AutoBuy",
  },
  {
    id: 7,
    label: "CGWallet",
    icon: Icons.wallet,
    color: "#4CAF50",
    Navigate: "CGWallet",
  },
  {
    id: 8,
    label: "Airtime to Cash",
    icon: Icons.sync,
    color: "#4CAF50",
    Navigate: "AirtimetoCash",
  },
  {
    id: 9,
    label: "Biz Verification",
    icon: Icons.tick,
    color: "#4CAF50",
    Navigate: "BizVerification",
  },
];

export const DATA_BUNDLES = [
  { id: "1", size: "500MB", duration: "30 Days", price: "#110.00" },
  { id: "2", size: "1GB", duration: "30 Days", price: "#220.00" },
  { id: "3", size: "2GB", duration: "30 Days", price: "#440.00" },
  { id: "4", size: "3GB", duration: "30 Days", price: "#660.00" },
  { id: "5", size: "5GB", duration: "30 Days", price: "#1,100.00" },
  { id: "6", size: "10GB", duration: "30 Days", price: "#2,200.00" },
];
export  const transaction = {
  phone: "08076749945",
  network: "MTN",
  amount: "₦2,000.00",
  vendType: "VTU",
  commission: "₦5.00",
  date: "06/05/2023 09:27:07am",
  sender: "08076749945",
  calculatedAmount: "₦1,400.00",
  receiver: "08188404625",
  bank: "Access Bank Plc",
  transactionStatus: "Successful",
  transactionId: "08765442622",
};

import { FaUser } from "react-icons/fa";
import { MdEmail, MdHelp } from "react-icons/md";

const dropdown = [
  { id: 1, title: "Profile", icon: <FaUser />, to: "/profile" },
  { id: 2, title: "Messages", icon: <MdEmail />, to: "/messages" },
  { id: 3, title: "Help", icon: <MdHelp />, to: "/help" },
];

export default dropdown;

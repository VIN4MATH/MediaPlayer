import './sidebar.css';
import logo from "./logo.png";
import { AiFillHome, } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import SideBarItem from './SideBarItem';


const sideBarItems = [
    { name: "Home", link: '/', icon: <AiFillHome /> },
    { name: "Upload", link: '/upload', icon: <AiOutlineCloudUpload /> },
    { name: "About", link: '/about', icon: <BsInfoCircleFill /> },
]

const Sidebar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul className="">
                <img className="logo" src={logo} alt="logo" />
                {sideBarItems.map((item, index) => <SideBarItem name={item.name} link={item.link} icon={item.icon} />)}
            </ul>
        </div>
    )
}

export default Sidebar;
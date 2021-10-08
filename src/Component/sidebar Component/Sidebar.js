import './sidebar.css';
import logo from "../sidebar Component/logo.png";
import { Link } from 'react-router-dom';
import {AiFillHome,} from 'react-icons/ai';
import {BsInfoCircleFill} from 'react-icons/bs';
import {AiOutlineCloudUpload} from 'react-icons/ai';



const Sidebar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul className="">
                <img className="logo" src={logo} alt="logo" />
                <li>
                    <Link  exact to  ="/"><AiFillHome/>Home</Link>
                </li>
                <li>
                    <Link to ="/upload"><AiOutlineCloudUpload/>Upload</Link>
                </li>
                <li>
                    <Link to ="/about"><BsInfoCircleFill/>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
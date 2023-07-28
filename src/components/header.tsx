import { UserCircle2 } from "lucide-react";
import { useContext } from "react";
import { authContext } from "../App";
import { Link } from "react-router-dom";

const Header = () => {
    const session= useContext(authContext);
    
    return (
        <div className="navbar bg-sky-900 text-white items-center flex-none">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl" >Company Logo</Link>
            </div>
            <div className="flex-none">
                {session?.user?(
                    <div className="drawer drawer-end">
                    <input id="profile-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="profile-drawer" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <UserCircle2 className='m-auto'/>
                        </div>
                    </label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="profile-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content shadow-md z-10">
                            <li><Link to="/profile/">Profile</Link></li>
                            <li><Link to="/dashboard/">Dashboard</Link></li>
                            <li><Link to="/" onClick={()=>session.setUser(null)} >Signout</Link></li>
                        </ul>
                    </div>
                </div>
                ):(
                    <a href="/login" title='login'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <UserCircle2 className='m-auto'/>
                        </div>
                    </label>
                    </a>
                )}
                
            </div>
        </div>
    );
}
export default Header;;
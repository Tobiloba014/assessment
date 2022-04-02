import { Routes, Route } from "react-router-dom"
import Login from '../component/login';
import Profile from '../component/profile';
import { Settings } from '../component/settings';
import { About } from '../component/About';
import ResetPassword from '../component/resetpassword';
import ContactUs from '../component/contactus';
import Signup from '../component/Signup';
import App from '../App';
import NotFound from "../component/notfound";
import Home from "../component/secure/home";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/About' element={<About />} />
            <Route path='/SignUp' element={<Signup />} />
            <Route path='/Contact' element={<ContactUs />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )

}
export default MyRoutes
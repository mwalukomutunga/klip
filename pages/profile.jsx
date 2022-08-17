import ContentDetail from "../components/ContentDetail";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Profile = () => {
    const router = useRouter();
    const user = useSelector((state) => state.user);
    useEffect(()=>{
        if(user && user.isLogged && user.isLogged ===true){       
        }else{
          router.push('/login')
        }
      },[user])
    return ( 
        <ContentDetail/>
     );
}
 
export default Profile;
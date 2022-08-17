
import { useEffect } from "react";
import ContentDetail from "../components/ContentDetail";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const columns = ["County", "Sub-County","ward","Name Of Fsc","FSC Code","Year Of Joining","Gender","Age","Phone Number","Selected for Pilot"];

const Home = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(()=>{
      if(user && user.isLogged && user.isLogged ===true){       
      }else{
        router.push('/login')
      }
    },[user])

  return (  
   <ContentDetail phone ={user?.user?.email}/>
  );
};

export default Home;


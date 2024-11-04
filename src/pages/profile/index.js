import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function ProfilePage() {

    const navigate = useNavigate();


    // useEffect(()=>{
    //         setTimeout(()=>{
    //                 navigate('/');
    //         },1500)
    // },[])

    return (
        <div>

            <h1>Hello </h1>
            <Link to='/'>

                <button>Go to home Page</button>
            </Link>
        </div>

    )
}

export default ProfilePage;
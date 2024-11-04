import App from "../../App";
import { Link } from "react-router-dom";


function HomePage(){

    return(
      <>
        <Link to='/profile'>
        <button>Go to profile page</button>
        </Link>
        <Link to='/address'>
        <button>Go to address page</button>
        
        </Link>

        <Link to='/page4'>
        <button>Go to page4 </button>
        
        </Link>

        <Link to='/page5'>
        <button>Go to page5 </button>
        
        </Link>
        <Link to='/page6'>
        <button>Go to Page6 </button>
        
        </Link>
        <App />
      </>
    )

}
export default HomePage;


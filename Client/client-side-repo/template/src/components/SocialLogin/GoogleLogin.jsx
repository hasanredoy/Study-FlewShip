import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const GoogleLogin = () => {
  const {user, signInWithGoogle } = useAuth();
  const userData = {
    name:user?.displayName,
    email:user?.email,
    photo:user?.photoURL,

  }
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success('loggedIn Successfully')
        console.log(res);
        axios.post('https://crud-jwt-server-two.vercel.app/users',userData)
        .then(res=>{
          console.log(res.data);
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn  text-black btn-info">
        Login With <FcGoogle className=" text-2xl"></FcGoogle>{" "}
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GoogleLogin;

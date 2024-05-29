import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const {user, signInWithGoogle } = useAuth();
  
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
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
    </div>
  );
};

export default GoogleLogin;

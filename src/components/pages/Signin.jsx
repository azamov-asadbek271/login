import { useSignup } from "../hooks/useSignup";
import { ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";

function Signin() {
  const { singupWithGoggle } = useSignup();

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <button
          onClick={singupWithGoggle}
          className="btn btn-secondary w-full mb-5"
        >
          <ImGoogle className="text-2xl" />
          <span className="text-2xl">Google</span>
        </button>
        <p className="text-center">
          If you don't have account
          <Link className="link ml-1 text-cyan-600" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;

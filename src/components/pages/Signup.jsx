import { useSignup } from "../hooks/useSignup";
import { ImGoogle } from "react-icons/im";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";

function Signup() {
  const { singupWithGoggle } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <FormInput type="text" label=" Name:" />
        <FormInput type="email" label=" Email:" />
        <FormInput type="password" label=" Password:" />
        <div>
          <button
            onClick={singupWithGoggle}
            className="btn btn-secondary w-full mb-5"
          >
            <ImGoogle className="text-2xl" />
            <span className="text-2xl">Google</span>
          </button>
          <p className="text-center">
            Are you already registered ?{" "}
            <Link className="link text-cyan-600" to="/signin">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

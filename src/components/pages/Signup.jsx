import { useSignup } from "../hooks/useSignup";
import { ImGoogle } from "react-icons/im";

function Signup() {
  const { singupWithGoggle } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <button onClick={singupWithGoggle} className="btn btn-secondary">
        <ImGoogle className="text-2xl" />
        <span className="text-2xl">Google</span>
      </button>
    </div>
  );
}

export default Signup;

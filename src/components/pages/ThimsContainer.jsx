import { FaMoon,FaSun  } from "react-icons/fa";

const colors = ["#ED9455", "#5755FE", "#FB9AD1"];
function ThimsContainer() {
  return (
    <div className="mb-10 py-3 ">
      <div className="aligin-container flex justify-between">
        {/* color */}
        <div className="flex flex-grow gap-2">
          {colors.map((color) => {
            return (
              <div
                key={color}
                className="h-7 w-7 cursor-pointer rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        {/* Tema */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}
          <FaSun className="swap-on fill-current w-9 h-9" />
          {/* moon icon */}
          <FaMoon className="swap-off fill-current w-9 h-9" />
        </label>
      </div>
    </div>
  );
}

export default ThimsContainer;

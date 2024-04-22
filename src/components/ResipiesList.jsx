import { Link } from "react-router-dom";

function ResipiesList({ recipies }) {
  return (
    <div className="flex justify-between  flex-wrap ">
      {recipies.map((res) => {
        return (
          <div key={res.id} className="card w-80 bg-base-100 shadow-xl  mb-5">
            <div className="card-body">
              <Link to={`/singleRecipies/${res.id}`} className="card-title">
                {res.title}
              </Link>
              <p className="flex gap-2">
                {res.ingredients.map((ing) => {
                  return <span key={ing}>{ing},</span>;
                })}
              </p>
            </div>
            <figure>
              <img className="rounded" src={res.image} alt="Shoes" />
            </figure>
          </div>
        );
      })}
    </div>
  );
}

export default ResipiesList
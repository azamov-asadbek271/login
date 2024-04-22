import { Link } from "react-router-dom";

function ResipiesList({ recipies }) {
  return <ul>
   {recipies.map((res) => {
     return (
       <li key={res.id}>
         <Link to={`/singleRecipies/${res.id}`}>
           <h1>{res.title}</h1>
          
         </Link>
       </li>
     );
   })}
  </ul>;
}

export default ResipiesList
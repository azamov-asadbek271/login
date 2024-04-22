import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";


export const loader = async ({params}) => {
const docRef = doc(db, "RecipiesAdd",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
 return null
}


function SingleRecipies() {
    const data = useLoaderData()
    
  return (
    <div>
      {data && (
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={data.image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.method}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleRecipies
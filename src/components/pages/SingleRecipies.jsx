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
    <div>SingleRecipies
        <h2>{data.methods}</h2>
         <img src={data.image} alt="" />
    </div>
  )
}

export default SingleRecipies
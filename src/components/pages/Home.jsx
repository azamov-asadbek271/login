import { useCollection } from "../hooks/useCollection"
import ResipiesList from "../ResipiesList"
function Home() {
  const {data:recipies }= useCollection()
  
 
  return (
    <div>
      <h1>All Recipies</h1>
      {recipies && <ResipiesList recipies={recipies} />}
    </div>
  );
}

export default Home
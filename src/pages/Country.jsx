import { useParams } from "react-router-dom";

function Country() {
  let params = useParams();

  return <div>Country Detail Page for: {params.name}</div>;
}

export default Country;

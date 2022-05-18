import { useParams } from "react-router-dom";

let StudentDetails=()=>{
    const {id}=useParams();
    return(
        <div>
           Hello id:{id}
        </div>
    )
}

export default StudentDetails;
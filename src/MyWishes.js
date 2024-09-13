import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

export const MyWishes = ({text, updatingInInput, deleteWish}) => {
    return(
        <div>
            <p>{text}</p>
            <CiEdit className="icon" onClick={updatingInInput} />
            <MdDeleteForever className="icon" onClick={deleteWish} />
        </div>
    )
}
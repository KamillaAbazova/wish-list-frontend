import axios from "axios";

const getAllWishes = (setWishes) => {
    axios.get("https://wish-list-backend-2.onrender.com")
    .then(({data}) => {console.log(data)
        setWishes(data);
    }
)
}

const addWish = (title, setTitle, setWishes) => {
    axios.post(`https://wish-list-backend-2.onrender.com/saveWishes`, {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllWishes(setWishes)
    })
}

const editWish = (wishId, title, setTitle, setWishes, setEditing) => {
    axios.post(`https://wish-list-backend-2.onrender.com/editWish`, {_id: wishId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllWishes(setWishes)
    })
}

const deleteWish = (_id, setWishes) => {
    axios.post(`https://wish-list-backend-2.onrender.com/deleteWish`, {_id})
    .then((data) => {
        console.log(data)
        getAllWishes(setWishes)
    })
}

export {getAllWishes, addWish, editWish, deleteWish};
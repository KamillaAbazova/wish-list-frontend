
import { useEffect, useState } from 'react';
import './App.css';
import { MyWishes } from './MyWishes';
import { addWish, getAllWishes, editWish, deleteWish } from './FetchWishes';

function App() {
  const [myWishes, setWishes] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [wishId, setWishId] = useState("");

  useEffect(() => {
    getAllWishes(setWishes)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setWishId(_id)
  }

  return (
    <div className="App">
      <h1>Your Wish List for 2025</h1>
      <div className="container">
      <input
      type="text"
      placeholder="Add a wish..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button 
      disabled = {!title}
      onClick={editing ? () => editWish(wishId, title, setTitle, setWishes, setEditing)
        : () => addWish(title,setTitle,setWishes)}>{editing ? "Edit" :"Add"}</button>
      </div>

      {myWishes.map((wish) => <MyWishes text={wish.title} key={wish._id} 
      updatingInInput={() => updatingInInput(wish._id, wish.title)}
      deleteWish={() => deleteWish(wish._id, setWishes)}
      />)}
      
    </div>
  );
}
//https://img.freepik.com/free-photo/top-view-woman-creating-inspiring-vision-board_23-2150104614.jpg?ga=GA1.1.504566826.1724649444
export default App;

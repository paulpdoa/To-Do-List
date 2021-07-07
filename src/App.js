import {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lists from './components/Lists';
import AddList from './components/AddList';

const App = () => {
  const [showAdd,setShowAdd] = useState(false);
  const [lists,setLists] = useState([
    {
      id:1,
      todo:"Wash the dishes",
      day:"Monday"
    },
    {
      id:2,
      todo:"Clean my room",
      day:"Tuesday"
    },
    {
      id:3,
      todo:"Buy food on restaurant",
      day:"Wednesday"
    },
    {
      id:4,
      todo:"Do the laundry",
      day:"Thursday"
    }
  ])
  // add list
  const addList = (list) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newList = {id,...list};

    setLists([...lists,newList])
  }

  // delete list
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  }

  return (
    <div className="container">
      <Navbar openAdd={() => setShowAdd(!showAdd)} changeBtn={showAdd} />
      {showAdd && <AddList addList={addList} />}
      {lists.length > 0 ? <Lists lists={lists} deleteList={deleteList} /> : <h1 className="nothing" style={{ width:"100%", textAlign:"center" }}>Nothing to Show<br/><br/>Click Add List</h1>}
      <Footer />
    </div>
  );
}

export default App;

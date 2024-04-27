import React from "react";
import { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState();

  // helper functions
  function addItem() {
    if (!newItem) {
      alert("please insert item ");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id, newText) {
    const currentItem = items.filter((item) => items.id === id);

    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }
  return (
    <>
      <div className="bg-[#2d4b68] w-screen h-screen flex justify-center items-center ">
        <div className="h-[500px] w-[500px] shadow-2xl rounded-lg bg-[#5de0e2] overflow-auto">
          {/* Header  */}
          <h1 className="p-2 text-neutral-700 text-center font-semibold">
            My Todo List
          </h1>

          {/* Input Field and button  */}
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter your task here"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="w-[230px] h-[36px] m-4 p-2"
            />
            <button
              className="bg-gradient-to-r from-[#F0B9EE] to-[#9EFFE5] w-[100px] h-[36px] rounded-[16px] ml-2 "
              onClick={() => addItem()}
            >
              Add
            </button>
          </div>

          {/* Output  */}
          <ul>
            {items.map((item) => {
              return (
                <div>
                  <li
                    className="m-2 p-2"
                    key={item.id}
                    onClick={() => setShowEdit(item.id)}
                  >
                    {item.value}
                    <button
                      className="bg-gradient-to-r from-[#F0B9EE] to-[#9EFFE5] w-[100px] h-[36px] rounded-[16px] ml-2 "
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>

                  {showEdit == item.id ? (
                    <div>
                      <input
                        className="m-2 p-2"
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                      />
                      <button
                        className="bg-gradient-to-r from-[#F0B9EE] to-[#9EFFE5] w-[100px] h-[36px] rounded-[16px] ml-2 "
                        onClick={() => editItem(item.id, updatedText)}
                      >
                        Update
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;

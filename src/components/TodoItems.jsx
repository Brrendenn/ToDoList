import React, { useState } from "react";
import { motion } from "framer-motion";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, updateTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if(editText.trim() !== ""){
      updateTodo(id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 10}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -10}}
      transition={{duration: 0.3}}
    >
      <div className="flex items-center my-3 gap-2">

        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">

          <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
          {isEditing ? (
            <input
              className="ml-4 border border-gray-300 rounded px-2 py-1 text-sm w-full"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === "Enter") handleSave();
              }}
            />
          ) : (<p className='text-slate-700 ml-4 text-[17px]'>{text}</p>)}    
          {/* <p className='text-slate-700 ml-4 text-[17px]'>{text}</p> */}
        </div>

        {isEditing ? (
          <button
          onClick={handleSave}
          className="text-sm text-green-600 font-medium mr-2"
          >
            Save
          </button>
        ) : (
          <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-orange-600 font-medium mr-2"
          >
            Edit
          </button>
        )}

        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={delete_icon}
          alt=""
          className="w-3.5 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default TodoItems;

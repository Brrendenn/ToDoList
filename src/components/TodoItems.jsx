import React from "react";
import { motion } from "framer-motion";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle}) => {
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
          <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>

        </div>

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

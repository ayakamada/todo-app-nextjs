import Head from "next/head";
import { ReactElement, useState } from "react";

import Footer from "../components/Footer";
// import Toggle from "../components/Toggle";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
// import Todo from "../types/todo.type";
// import useTodos from "../components/hooks/useTodos";
import { useTodoContext } from "@/context/TodoContext";

export default function Home() {
  // const [todo, setTodo] = useState({ title: "", isDone: false });
  const { addTodo } = useTodoContext();

  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (value) => {
    setNewTodo({
      ...newTodo,
      value,
    });
  };

  const handleCheckboxChange = () => {};

  const handleSubmit = () => {
    if (newTodo.value !== "") {
      addTodo(newTodo.value);
    }

    // after submitting clear the input
    setNewTodo({
      ...newTodo,
      value: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Todo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex-1 lg:w-2/3 xl:w-2/5 w-full px-7">
        <div>
          <p className="text-3xl lg:text-4xl text-white font-bold tracking-widest pt-10 sm:pt-16 lg:pt-24 lg:pt-20 pb-6 lg:pb-10">
            TODO
            {/* <Toggle /> */}
          </p>

          <Input
            todo={newTodo}
            rounded
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onSubmit={handleSubmit}
          />

          <TodoList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

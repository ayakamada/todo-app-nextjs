import Head from "next/head";
import { ReactElement, useState } from "react";

import Footer from "@/components/Footer";
import Input from "@/components/Input";
import TodoList from "@/components/TodoList";
import TodoListFilters from "@/components/TodoListFilters";
import useTodos from "@/hooks/useTodos";

export default function Home() {
  const { addTodo } = useTodos();

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
          <p className="text-3xl lg:text-4xl text-white font-bold tracking-widest pt-10 sm:pt-16 lg:pt-24 pb-6 lg:pb-10">
            TODO
            {/* <Toggle /> */}
          </p>

          <Input
            todo={newTodo}
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onSubmit={handleSubmit}
          />

          <TodoList />
          <TodoListFilters />
        </div>
      </div>

      <Footer />
    </div>
  );
}

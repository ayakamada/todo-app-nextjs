import React, { ReactElement, useCallback } from "react";
import { useTheme } from "next-themes";

export default function Input({ todo, onInputChange, onCheckboxChange, onSubmit, onDelete, rounded, readonly }) {
  const { theme } = useTheme();

  const updateInput = useCallback(() => {}, []);
  const updateChecked = useCallback(() => {}, []);
  const handleInputClick = useCallback(() => {}, []);
  const handleSubmit = useCallback((e) => {}, []);

  return (
    <section>
      <div className="absolute top-3 sm:top-4 left-5">
        <div className="relative">
         
          <img
            className={`
            absolute
            top-2
            left-1.5
            pointer-events-none

          `}
            src="/images/icon-check.svg"
            alt="Checkbox image for checkbox input"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`
          text-sm
          sm:text-base
          overflow-ellipsis
          w-full
          focus:outline-none
          py-4
          sm:py-4.5
          pr-8
          pl-14
          sm:pl-16
          dark:bg-dark_veryDarkDesaturatedBlue
          cursor-pointer
          transition
          ease-linear

        `}
          placeholder="Create a new todo.."
          value=""
          onChange=""
          onClick=""
          readOnly={readonly}
          maxLength={125}
          aria-label="Todo"
        />
      </form>
      <a id={`delete`} className="absolute top-0 right-0" onClick="">
        <img
          src="/images/icon-cross.svg"
          className={`
          cursor-pointer
          sm:w-14.5
          sm:h-14.5
          sm:p-5
          w-12
          h-12
          p-4.5
          hover:filter-black
          dark:hover:filter-white
          hover:animate-spin-fast
          visible
          xl:invisible

        `}
          alt="Delete Todo"
        />
      </a>
    </section>
  );
}

import React, { ReactElement, useCallback } from "react";
import { useTheme } from "next-themes";

export default function Input({ todo, onInputChange, onCheckboxChange, onSubmit, onDelete, rounded, readonly }) {
  const { theme } = useTheme();
  console.log(todo);

  const updateInput = useCallback(
    (e) => {
      onInputChange(e.target.value);
    },
    [onInputChange]
  );

  const updateChecked = useCallback(() => {}, []);

  const handleInputClick = useCallback(() => {
    if (!readonly) return;

    // onCheckboxChange(!todo.completed);
  }, [todo]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit]
  );

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
          dark:bg-slate-500
          cursor-pointer
          transition
          ease-linear

        `}
          placeholder="Create a new todo.."
          value={todo.value}
          onChange={updateInput}
          onClick={handleInputClick}
          readOnly={readonly}
          maxLength={125}
          aria-label="Todo"
        />
      </form>

    </section>
  );
}

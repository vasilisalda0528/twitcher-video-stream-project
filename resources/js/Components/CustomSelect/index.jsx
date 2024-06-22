import React from "react";
import Select from "react-select";

import "./styles.css";

const CustomSelect = ({
  name,
  className,
  options = [],
  labelField = "label",
  valueField = "value",
  onChange,
}) => {
  return (
    <Select
      className={`custom-select mt-1 block w-full border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ${className}`}
      name={name}
      options={[{ id: null, title: "--Select--" }, ...options]}
      getOptionLabel={(item) => item[labelField]}
      getOptionValue={(item) => item[valueField]}
      onChange={onChange}
      placeholder="--Select--"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#6366F1",
          primary25: "#6366F1",
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused
            ? "#6366F1"
            : state.isSelected
            ? "#6366F1"
            : "#d4d4d8",
          borderWidth: "1px",
          padding: "3px",
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
          ...styles,
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? "#6366F1"
            : isFocused
            ? "#e7eaff"
            : undefined,
        }),
      }}
    />
  );
};

export default CustomSelect;

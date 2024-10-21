// PasswordForm.jsx
import React, { useRef } from "react";

const PasswordForm = ({
  form,
  handleChange,
  savePassword,
  clearData,
  showPassword,
  passwordref,
  showPass,
}) => {
  return (
    <div className="flex flex-col p-4 text-black gap-8 items-center">
      <input
        value={form.site}
        onChange={handleChange}
        placeholder="Enter website URL"
        type="text"
        name="site"
        className="rounded-full border border-green-500 w-full p-4 py-1"
      />
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <input
          value={form.username}
          onChange={handleChange}
          placeholder="Enter Username"
          type="text"
          name="username"
          className="rounded-full border border-green-500 w-full p-4 py-1"
        />
        <div className="relative">
          <input
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
            type={showPass ? "text" : "password"}
            name="password"
            className="rounded-full border border-green-500 w-full p-4 py-1"
          />
          <span
            className="absolute right-[4px] top-[4px] cursor-pointer"
            onClick={showPassword}
          >
            <img
              className="p-1"
              width={26}
              src={showPass ? "icons/hidden.png" : "icons/eye.png"}
              alt="Toggle visibility"
            />
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={savePassword}
          className=" flex items-center gap-1 bg-green-600 w-fit px-3 py-1 hover:bg-green-500 rounded-lg"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Save
        </button>
        <button
          onClick={clearData}
          className="flex items-center bg-red-600 hover:bg-red-500 w-fit px-3 py-1 gap-1 rounded-lg"
        >
          <lord-icon
            src="https://cdn.lordicon.com/skkahier.json"
            trigger="hover"
          ></lord-icon>
          Clear
        </button>
      </div>
    </div>
  );
};

export default PasswordForm;

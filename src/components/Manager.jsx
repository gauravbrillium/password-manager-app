// Manager.jsx
import { useEffect, useRef, useState } from "react";
import PasswordForm from "./PasswordForm";
import PasswordTable from "./PasswordTable";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const [showPass, setShowPass] = useState(false);

  const getPasswords = async () => {
    const req = await fetch("http://localhost:3000/");
    const passwords = await req.json();
    setpasswordArray(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const showPassword = () => {
    setShowPass((prev) => !prev);
  };

  const savePassword = async () => {
    const newPassword = { ...form, id: uuidv4() };
    setpasswordArray([...passwordArray, newPassword]);
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newPassword),
    });
    setform({ site: "", username: "", password: "" });
  };

  const deletePassword = async (id) => {
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    setform(passwordToEdit);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setform({ site: "", username: "", password: "" });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24"></div>
      <div className="md:mycontainer min-h-[87.4vh]">
        <h1 className="text-3xl font-bold text-center text-white">
          <span className="text-green-700"> &lt;</span>
          Password<span className="text-green-700"> Manager/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          <u>Your own Password Manager</u>
        </p>
        <PasswordForm
          form={form}
          handleChange={handleChange}
          savePassword={savePassword}
          clearData={clearData}
          showPassword={showPassword}
          passwordref={passwordref}
          showPass={showPass}
        />
        <PasswordTable
          passwordArray={passwordArray}
          editPassword={editPassword}
          deletePassword={deletePassword}
        />
      </div>
    </>
  );
};

export default Manager;

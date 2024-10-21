// PasswordRow.jsx
import React from "react";

const PasswordRow = ({ item, editPassword, deletePassword }) => {
  return (
    <tr>
      <td className="py-1 border border-black text-center w-32">
        <a href={item.site} target="_blank" rel="noopener noreferrer">
          {item.site}
        </a>
      </td>
      <td className="py-1 border border-black text-center w-32">
        {item.username}
      </td>
      <td className="py-1 border border-black text-center w-32">
        {item.password}
      </td>
      <td className="justify-center py-1 border border-black text-center w-32">
        <span
          className="cursor-pointer mx-1"
          onClick={() => {
            editPassword(item.id);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/exymduqj.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </span>
        <span
          className="cursor-pointer mx-1"
          onClick={() => {
            deletePassword(item.id);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/hwjcdycb.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </span>
      </td>
    </tr>
  );
};

export default PasswordRow;

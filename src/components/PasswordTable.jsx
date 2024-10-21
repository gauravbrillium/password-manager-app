// PasswordTable.jsx
import React from "react";
import PasswordRow from "./PasswordRow";

const PasswordTable = ({ passwordArray, editPassword, deletePassword }) => {
    return (
        <div className="passwords">
            <h2 className="text-white font-bold text-xl inline-block p-3 mb-2 underline underline-offset-4">
                <u>Your Passwords!</u>
            </h2>
            {passwordArray.length === 0 ? (
                <div className="text-white"> No passwords to show</div>
            ) : (
                <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                    <thead className="bg-green-800">
                        <tr>
                            <th className="py-1">Site</th>
                            <th className="py-1">Username</th>
                            <th className="py-1">Password</th>
                            <th className="py-1">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-green-100">
                        {passwordArray.map((item) => (
                            <PasswordRow key={item.id} item={item} editPassword={editPassword} deletePassword={deletePassword} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PasswordTable;

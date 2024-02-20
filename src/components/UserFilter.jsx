import { useEffect, useState } from "react";

const UserFilter = ({ users }) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([...users]);

    useEffect(() => {
        const filtered = users.filter(
            ({ name, age }) =>
                !enteredName ||
                (name.toLowerCase().includes(enteredName.toLowerCase()) &&
                    (!enteredAge || age.toString().includes(enteredAge)))
        );
        setSelectedUsers(filtered);
    }, [enteredName, enteredAge, users]);
    return (
        <div>
            <h2>Find users</h2>
            <div>
                <p>Start entering user name</p>
                <input
                    type="text"
                    placeholder="name"
                    value={enteredName}
                    onChange={(e) => setEnteredName(e.target.value)}
                />
            </div>
            <div>
                <p>Start entering user age</p>
                <input
                    type="number"
                    placeholder="age"
                    value={enteredAge}
                    onChange={(e) => setEnteredAge(e.target.value)}
                />
            </div>
            <div>
                <table>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>age, years</th>
                    </thead>
                </table>
                <tbody>
                    {selectedUsers.map(({ id, name, age }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    );
};

export default UserFilter;

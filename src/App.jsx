import React from "react";
import { useEffect, useState } from "react";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(allUsers => console.log(allUsers))
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                {users.map(user => (
                    <div className="col-md-6" key={user.id}>

                    </div>
                ))}
            </section>
        </main>
    );
};

export default App;
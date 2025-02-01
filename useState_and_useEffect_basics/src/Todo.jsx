import { useState } from "react";
import { useEffect } from "react";

function Todo() {
    return (
        <div
            style={{
                backgroundColor: "#b2bec3",
                height: "100vh",
            }}
        >
            <Get_ToDo />
        </div>
    );
}

function Get_ToDo() {
    const style = {
        display: "flex",
        justifyContent: "space-evenly",
        gap: 15,
    };

    const [todo, setTodo] = useState(1);
    const [todo_data, setTodo_data] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(
        function () {
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/todos/" + todo).then(
                async (res) => {
                    const rejson = await res.json();
                    setTodo_data(rejson);
                    setLoading(false);
                }
            );
        },
        [todo]
    );

    return (
        <div>
            <div style={style}>
                <button
                    onClick={() => {
                        setTodo(1);
                    }}
                    style={{ color: todo == 1 ? "red" : "black" }}
                >
                    ToDo #1
                </button>
                <button
                    onClick={function () {
                        setTodo(2);
                    }}
                    style={{ color: todo == 2 ? "brown" : "black" }}
                >
                    ToDo #2
                </button>
                <button
                    onClick={function () {
                        setTodo(3);
                    }}
                    style={{ color: todo == 3 ? "blue" : "black" }}
                >
                    ToDo #3
                </button>
                <button
                    onClick={function () {
                        setTodo(4);
                    }}
                    style={{ color: todo == 4 ? "green" : "black" }}
                >
                    ToDo #4
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {loading ? "Loading" : todo_data.title}
            </div>
        </div>
    );
}

export default Todo;

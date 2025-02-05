import React from "react";

// While rendering the list in the react it is important and complsary to give key to the component even though you are not using it
// So when the a particular component is removed or changed so with the help of key react can render it properly and optimise it properly

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

function List_And_Keys() {
    // const items = [
    //     { id: 1, name: "Item 1" },
    //     { id: 2, name: "Item 2" },
    //     { id: 3, name: "Item 3" },
    // ];
    // return <ItemList items={items} />;

    const todo = [
        { key: 1, title: "Go to gym", done: false },
        { key: 2, title: "Project", done: true },
    ];

    const TodoMap = todo.map((todo) => (
        <TodoFunction key={todo.key} title={todo.title} done={todo.done} />
    ));

    function TodoFunction({ key,title, done }) {
        return (
            <div>
                {title} - {done ? "Task Done!" : "Task is incomplete!"}
            </div>
        );
    }

    return <div>{TodoMap}</div>;
}
export default List_And_Keys;

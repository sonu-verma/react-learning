/*
    <div id="parent">
        <div id="child">
            <h1>I am H1</h1>
            <h2>I am H2</h2>
        </div>
    </div>

*/

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement("div", {id:"child1"}, 
            [
                React.createElement("h1", {}, "I am h1"),
                React.createElement("h2", {}, "I am h2"),
            ]
        ),
        React.createElement("div", {id:"child2"}, 
            [
                React.createElement("h1", {}, "I am h1"),
                React.createElement("h2", {}, "I am h2"),
            ]
        ) 
    ]
);


// const element = React.createElement(
//     "h4", 
//     {id:"heading", class:"heading"}, // attributes
//     "hello world from react js file!"
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
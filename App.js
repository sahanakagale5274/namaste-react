// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello form namaste react"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am nested tag"),
    React.createElement("h1", {}, "I am nested tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am nested tag"),
    React.createElement("h1", {}, "I am nested tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

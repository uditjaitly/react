"use strict";

console.log("App.js Javascript is running");

var app = {
    title: "Indecision App",
    subtitles: "This is a subtitle",
    option: ['one', 'two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitles && React.createElement(
        "p",
        null,
        app.subtitles
    ),
    app.option.length > 0 ? React.createElement(
        "p",
        null,
        app.option
    ) : React.createElement(
        "p",
        null,
        " No Options"
    )
);

var user = {
    name: "Udit",
    age: 24
    //location:"Florida"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            location
        );
    }
    return undefined;
}

var userName = "Udit";
var userAge = 24;
var userLocation = "Florida";
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anon"
    ),
    user.age > 18 ? React.createElement(
        "p",
        null,
        "Age:",
        user.age
    ) : React.createElement(
        "p",
        null,
        undefined
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

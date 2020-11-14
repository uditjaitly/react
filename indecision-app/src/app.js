console.log ("App.js Javascript is running")


var app={
    title: "Indecision App",
    subtitles: "This is a subtitle",
    option:['one','two']
};

var template=(
    <div>
        <h1>{app.title}</h1>
        {app.subtitles && <p>{app.subtitles}</p>}
        {app.option.length>0 ? <p>{app.option}</p> : <p> No Options</p>}

    </div>
);





var user={
    name:"Udit",
    age:24,
    //location:"Florida"
};

function getLocation(location){
    if(location){
        return <p>{location}</p>;
    }
    return undefined
}

var userName= "Udit"
var userAge= 24;
var userLocation="Florida"
var template2= (
    <div>
        <h1>{user.name ? user.name : "Anon"}</h1>
        {user.age>18 ? <p>Age:{user.age}</p> : <p>{undefined}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app")
ReactDOM.render(template,appRoot);
console.log ("App.js Javascript is running")


var app={
    title: "Indecision App",
    subtitles: "This is a subtitle",
    option:['one','two']
};
var appRoot = document.getElementById("app")
const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted")
    const task= e.target.elements.task.value;
    if (task!="") {
        app.option.push(task);
    }
    e.target.elements.task.value="";
    render()
}

const remove = () => {
    app.option=[];
    render()
}
const makeDecision = () =>{
    const num= Math.floor(Math.random() * app.option.length);
    alert(num)
}

const render= function (){
    const template = (
    
        <div>
            <h1>{app.title}</h1>
            <button disabled={app.option.length==0}onClick={makeDecision}>What to do?</button>
            <button onClick={remove}>Remove all</button>
            {app.subtitles && <p>{app.subtitles}</p>}
            {app.option.length>0 ? <p>{app.option.length}</p> : <p> No Options</p>}
            
            <ol>
            {
                app.option.map((op)=> {
                    return <p key={op}>Option: {op}</p>
                })
            }
            </ol>


            <form onSubmit={submit}>
                <input type="text" name="task"   />
                <button>Add Option</button>
                
            </form>

        </div>
    );
    ReactDOM.render(template,appRoot)

}



render();


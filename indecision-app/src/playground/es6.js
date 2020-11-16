const user={
    name:"Udit",
    age:24,
    location:"Florida"
    
}
const user2={
    name:"Udit",
    age:24,
    cities:["Florida","California","New York"],
    printPlacesLived : function () {
        const that=this
        return this.cities.map(function(city){
            return that.name + "lived in" + city
        });
    }
}
const template=(
    <div>
        <h1>Name:{user2.name}</h1>
        <p>Age:{user2.age}</p>
        <p>Location:{user2.cities}</p>
        {user2.printPlacesLived()}
    </div>
);

const multiplier={
    nums:[1,2,3],
    multiplyWith:10,
    multiply(){
        return this.nums.map((num)=>{
            return this.multiplyWith * num
        })
    }
}

const template3=(
    <div>
        {multiplier.multiply()}
    </div>
    
);




const getId=document.getElementById("app")

ReactDOM.render(template3,getId)

export default class DataSource{
    constructor(){
        this.data = {};
        this.initialized = false;
    }
    async init(){
        if(localStorage.getItem("data") !== null){
            //we have the data in localstorage, so we need to get the stored data
            this.data = JSON.parse(localStorage.getItem("data"));
        }else{
            //current client not fetched the json yet
            this.data.dogs = await fetch("../json/general.json").then(res => res.json());
            localStorage.setItem("data",JSON.stringify(this.data))
        }
        this.initialized = true;
        return this.data
    }
    getData(){
        if(this.initialized){
            throw "Data source is not initialized.";
        }
        return this.data;
    }
    getDogs(){
        let data = this.getData();
        return data.dogs;
    }
    getDog(id){
        let target = {};
        this.getDogs().map(dog=>{
            if(dog.id == id){
                target = dog
            }
        })
        return target;
    }
    adoptDog(dogId){
        this.getDogs().map(dog =>{
            if(dog.id === dogId){
                dog.isAdopted = true;
                localStorage.setItem("data",JSON.stringify(this.data))
            }
        })
    }
    addDog(dog){
        let _id = 1 + this.getDogs()[ this.getDogs.length - 1].id
        dog.id = _id
        this.getDogs().append(dog);
        console.log(this.data)
        localStorage.setItem("data",JSON.stringify(this.data))
    }

}

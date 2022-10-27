// for form page submit, get dog id and set as adopted.
import DataSource from "./data-source.js";
import {getQueryVariable} from "./utils.js";

// get the dog that being adopted
let petId = getQueryVariable("pet-id");

let dataSource = new DataSource();
dataSource.init();

let formData = {id:petId}
// bind with information input
// for instance, if you are add information of a dog's age, add onChange event on input html with function modifyData("age")
export const modifyData = (attri)=>{
    let target = attri;
    return (val)=>{
        formData[target] = val;
    }
}

export const submitHandler = (e)=>{
    e.preventDefault()
    // logic
    console.log(1)
}
window.submitHandler = submitHandler
// bind with submit button
// if you are bind in form.html, please add event listener with function submitForm("adopt")
// if you are bind in add-dog.html, please add event listener with function submitForm("add")
export const submitForm = (action)=>{
    let datasource = dataSource;
    switch (action){
        case "add":
            // add a dog
            dataSource.addDog(formData);
            break;
        case "adopt":
            // adopt a dog
            dataSource.adoptDog(formData);
            break;
    }
    
}
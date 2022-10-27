import DataSource from "./data-source.js";
import {getQueryVariable} from "./utils.js";

let petId = getQueryVariable("pet");

let dataSource = new DataSource();

async function initPage() {
  let data = await dataSource.init();
  // get detail information
  // console.log(data.dogs);

  // let dog = dataSource.getDog(petId);
  // get the node to insert

  // let image = document.querySelector(".dog-image");
  // let name = document.querySelector(".dog-name");
  // let description = document.querySelector(".description");
  // let dog_sex = document.querySelector(".dog-sex");
  // let age = document.querySelector(".dog-age");
  // let size = document.querySelector(".dog-size");
  // let breed = document.querySelector(".dog-breed");
  // let gift = document.querySelector(".dog-gift");


  //TODO: start render
  let output = "<div class='card-head'>";
  // for (let item of data.dogs) {
  // console.log(data.dogs);
  let item = data.dogs.filter((dog) => dog.id === petId)[0];
  //  if (item.isAdopted == false) {
  //         continue
  //     }
  console.log(item)
  output += `
    
        <img src="${item.imageUrl}" alt="dog" class="dog-image"/>
        <div class="head-content">
          <h2 class="css-3d-text head-3d dog-name">${item.name}</h2>
          <p class="description">
            ${item.personality}
          </p>
        </div>
      </div>
      <div class="card-body">
        <h2 class="css-3d-text body-3d dog-name">${item.name}</h2>
        <div class="body-detail">
          <div class="box box-1">
            <h3 class="dog-sex">Sex:</h3>
            <span class="breed-detail">${item.sex} </span>
          </div>
          <div class="box box-2">
            <h3 class="dog-age">Age:</h3>
            <span class="breed-detail">${item.age} </span>
          </div>
          <div class="box box-3">
            <h3 class="dog-size">Size</h3>
            <span class="breed-detail">${item.size}</span>
          </div>
          <div class="box box-4">
            <h3 class="dog-breed">Breed</h3>
            <span class="breed-detail">${item.breed}</span>
          </div>
          <div class="box box-5">
            <h3 class="dog-gift">Special Gift</h3>
            <span class="breed-detail">${item.special_gift}</span>
          </div>
        </div>
        <a href="./form.html" target="_blank" class="button"
          ><i class="fa-solid fa-paw"></i> ADog Me</a>
           `;


  output += "</div>";
  document.querySelector(".card").innerHTML = output;

}

initPage()

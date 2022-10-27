import DataSource from "./data-source.js";
// index.html page js file
let datasource = new DataSource();
const renderHomePage = async (dataSource) => {
  let data = await dataSource.init();
  let output = "<ul class='x-grid'>";
  for (let item of data.dogs) {
    // add pet it inside the href attri or you can add event listener refresh with url param
    // use map() with id
    if (item.isAdopted == false) {
      continue
    }
    output += `
            <li>
                <div class="maincontainer">
                    <div class="thecard">
                        <div class="thefront">
                            <img class="theimage" src="${item.imageUrl}" alt="${item.breed}">
                            <a href="https://www.xcdc.gov/tb/topic/basics/default.htm" target="_blank"></a>
                        </div>
                       
                            <div class="x-info">
                                <h3>About me!</h3>
                                <p>My age is: ${item.age} </p>
                                <p>I am a ${item.sex}  </p>
                                <p>My size is: ${item.size} </p>
                                <p>My age is: ${item.personality} </p>
                                <p>My breed is a ${item.breed} and my speciality is: ${item.special_gift} </p>
                            <!--<button type="button" id="btn" onclick="window.location.href='./pages/pet-detail.html'"> Read More </button>-->
                            <!-- <button type="button" id="btn${item.id}" value="${item.id}" onclick="sendData()"> Read More </button>-->
                              <a class="read-more-link" href="./pages/pet-detail.html?pet=${item.id}">Read More</a>  
                            <!-- <button  value="${item.id}">Read More</button>-->
                            </div>
                        </div>
                    </div>
                </div>	
            </li>
        `;

  }
  output += "</ul>"
  document.querySelector(".dogs").innerHTML = output;
}
renderHomePage(datasource);

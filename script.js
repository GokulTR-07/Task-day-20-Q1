  var res = fetch("https://api.openbrewerydb.org/v1/breweries")
    .then((data)=>data.json()).then((data1)=>{
      for(var i=0; i<data1.length;i++){
        //console.log(data1[i].name)
        var div = document.createElement("div");
        div.setAttribute("class","box");
        div.innerHTML = `<div class="container">
        <div class="row">
          <div class="col-md-4">
              <div class="card text-center m-3 mt-5">
                <div class="card-body">
                <h2 class="card-title p-2">Brewery</h2>
                <p class="card-text"> Name: ${data1[i].name}</p>
                <p class="card-text">Brewery Type: ${data1[i].brewery_type}</p>
                <p class="card-text">Street: ${data1[i].street}</p>
                <p class="card-text">City: ${data1[i].city}</p>
                <p class="card-text">State: ${data1[i].state}</p>
                <p class="card-text">Country: ${data1[i].country}</p>
                <p class="card-text">Phone: ${data1[i].phone}</p>
              </div>
          </div>
        </div>
      </div>`

      document.body.append(div);

      }
  }).catch((error)=>{
    console.log(error);
  })

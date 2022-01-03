var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)

var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)

fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
.then((d)=>d.json())
.then((data)=>{
    console.log(data)
    console.log(data.length)
    for(let i=0;i<data.length;i++){
        row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-4">
        <div class="card h-100 ">
       <div class="card-header text-center "> <div class="fw-bolder fs-3">${data[i].name}</div><div><BR>
       <div class=" card-body ">
        <div class = " card-text " >
        Domains:${data[i].domains} <BR> 
        Country:${data[i].country} <BR><br>
        <input type="button" value="Official Site" onclick="window.open('${data[i].web_pages}')" id="btn" class="fw-bold"/>
        </div>
        </div>
        </div>`
    }
})
.catch((er)=>{
    console.log("error")
})
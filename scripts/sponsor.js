let sponsordata =  [
  {
    Name: "La Pino's Pizza",
    for: "Food and Beverage Partner",
    Image: "./assets/sponsors/lapinos.png"

  },

  {
    Name: "Zoomcar",
    for: "Commuting Partner",
    Image: "./assets/sponsors/zoomcar.png"

  },

  {
    Name: "Whoosh",
    for: "Fashion Partner",
    Image: "./assets/sponsors/fashion.png"

  },
  {
    Name: "PrepBytes",
    for: "Associate Partner",
    Image: "./assets/sponsors/prepbytes.png"

  },
  {
    Name: "Fiesto.live",
    for: "Media Partner",
    Image: "./assets/sponsors/fiestolive.png"

  },
  {
    Name: "Yellow Diamond",
    for: "Snacks Partner",
    Image: "./assets/sponsors/yellowdiamond.png"

  },
  {
    Name: "Datatrained",
    for: "Education Partner",
    Image: "./assets/sponsors/datatrained.png"

  }

]

teamDiv = document.getElementsByClassName("sponsorDiv")[0]

for(var i=0;i<sponsordata.length;i++){


text = 

`
<div class="sponsor">
<div class="sponsorimage">
<img class="sponsorimage" src="${sponsordata[i].Image}" alt="">
</div>
<div class="teamDetails">
  <h5><b>${sponsordata[i].Name}</b></h5>
  <h5>${sponsordata[i].for}</h5>
</div>
</div> 
`




teamDiv.innerHTML = teamDiv.innerHTML + text


}

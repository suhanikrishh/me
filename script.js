const gallery=document.getElementById("gallery");

const images=[];

// Number of images

for(let i=1;i<=150;i++){

images.push(`images/${i}.jpg`);

}

images.forEach(src=>{

const card=document.createElement("div");

card.className="card";

const img=document.createElement("img");

img.loading="lazy";

img.src=src;

img.onerror=function(){

card.remove();

}

card.appendChild(img);

gallery.appendChild(card);

});

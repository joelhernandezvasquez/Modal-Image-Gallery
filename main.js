function closeModalImage()
  {
    const imageContainer = document.querySelector(".modal-image-container");
    const parentImageContainer = document.querySelector(".image-container");
    const image = document.querySelector("img");


    imageContainer.classList.remove("openModalImage");
    parentImageContainer.removeChild(image);

  }

  function getImage(e)
  {
        const imageContainer = document.querySelector(".modal-image-container");
        const parentImageContainer = document.querySelector(".image-container");

        if(e.target.dataset.image==="image01")
        {
          const imagen = document.createElement("img");
          imagen.src = "img/02_01_slide_nature.jpg";
          imagen.classList.add("zoom");
          parentImageContainer.appendChild(imagen);
          imageContainer.classList.add("openModalImage");
          return;
        }

        if(e.target.dataset.image==="image02")
        {
          const imagen = document.createElement("img");
          imagen.src = "img/beauty_after_the_bust_by_framedbynature-d6yk93b.jpg";
          imagen.classList.add("zoom");
          parentImageContainer.appendChild(imagen);
          imageContainer.classList.add("openModalImage");
          return;
        }
        
        if(e.target.dataset.image==="image03")
        {
          const imagen = document.createElement("img");
          imagen.src = "img/Blue Nature Background15.jpg";
          imagen.classList.add("zoom");
          parentImageContainer.appendChild(imagen);
          imageContainer.classList.add("openModalImage");
          return;
        }
        
        if(e.target.dataset.image==="image04")
        {
          const imagen = document.createElement("img");
          imagen.src = "img/Nature Pics.jpg";
          imagen.classList.add("zoom");
          parentImageContainer.appendChild(imagen);
          imageContainer.classList.add("openModalImage");
          return;
        }
  }
/* ********** Menu ********** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);



  /* ********** ContactForm ********** */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/your@email.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);

  /********** modal2 ***********/

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


/*var img = document.getElementById("myImg1");*/

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img = document.querySelectorAll('.foto').forEach(element => {
  element.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
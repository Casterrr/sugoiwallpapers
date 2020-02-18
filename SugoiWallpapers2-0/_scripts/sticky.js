window.onscroll = () => {myFunction()};

var header = document.getElementById('cabecalho');

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
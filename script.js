var anzahlGegossen = 0;

function giessen() {
  if (anzahlGegossen < 12) {
    anzahlGegossen = anzahlGegossen + 1;
    document.getElementById("bereits-gegossen").innerHTML = anzahlGegossen;
  } else {
    alert("The sunflower is blooming. You won!");
  }

  if (anzahlGegossen == 3) {
    document
      .getElementById("kartenbild")
      .setAttribute("src", "img/Pflanze2.png");
    document.getElementById("benoetigtes-giessen").innerHTML = 6;
  }

  if (anzahlGegossen == 6) {
    document
      .getElementById("kartenbild")
      .setAttribute("src", "img/Pflanze3.png");
    document.getElementById("benoetigtes-giessen").innerHTML = 9;
  }

  if (anzahlGegossen == 9) {
    document
      .getElementById("kartenbild")
      .setAttribute("src", "img/Pflanze4.png");
    document.getElementById("benoetigtes-giessen").innerHTML = 12;
  }

  if (anzahlGegossen == 12) {
    document
      .getElementById("kartenbild")
      .setAttribute("src", "img/Pflanze5.png");
  }
}

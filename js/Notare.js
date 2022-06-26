function openNotare() {
    var x = document.getElementById("class");
    if (x.style.height === "100%") {
        x.style.height = "0";
    } else {
        x.style.height = "100%";
    }
    if (x.style.height === "100%") {
        document.getElementById("a").innerHTML = "Notare&#8593"  
    } else {
        document.getElementById("a").innerHTML = "Notare&#8595" 
    }
  }



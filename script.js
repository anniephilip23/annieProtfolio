function myfunction() {
    var heading1 = document.createElement("h1");
    heading1.style ="font-weight:bold; font-family: cursive;font-size:80px;color:black;"
    heading1.innerHTML ="I'am Annie Philip"
    var heading2 = document.createElement("h5");
    heading2.style ="font-family: cursive;margin:2%; font-size:50px;"
    setTimeout(() => {
        heading2.innerHTML = "Full Stack Developer"
      },1500);

    document.getElementById("div2").appendChild(heading1)
    document.getElementById("div2").appendChild(heading2)

}


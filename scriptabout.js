function myfunction() {
    var divmain1 = document.createElement("div");
    divmain1.className = "row";
    var div1 = document.createElement("div");
    div1.className = "col-sm-3"
    div1.style = "height:100%;width:30%"
    var imag = document.createElement("img")
    imag.src = "Annie.jpeg"
    imag.style = "width:35%; height:20%;border-radius: 50%; margin-top: 20%;margin-right:20%;margin-left:30%;"
    var div2 = document.createElement("div");
    div2.className = "col-sm-9"
    div2.style = "text-align:center;margin-top:5%;"
    var heading1 = document.createElement("h1");
    heading1.style = "font-weight:bold; font-family: cursive;font-size:30px;color:black;"
    var insert = document.createElement("ins");
    insert.innerHTML = "About Me"
    var heading2 = document.createElement("h5");
    heading2.style = "font-family: cursive;margin:2%; font-size:30px; color:black;"
    setTimeout(() => {
        heading2.innerHTML = "I am Full stack Devleoper who loves to transform ideas into reality using code, a Js Enthusiast and a Progressive Web App Developer."
    }, 1500);
    heading1.appendChild(insert)
    div2.appendChild(heading1)
    div2.appendChild(heading2)
    div1.appendChild(imag)
    divmain1.appendChild(div1)
    divmain1.appendChild(div2)
    document.body.appendChild(divmain1)

    var Secdivmain1 = document.createElement("Secdiv");
    Secdivmain1.className = "row";
    var Secdiv1 = document.createElement("Secdiv");
    Secdiv1.className = "col-sm-3"
    Secdiv1.style = "height:100%;width:30%"
    var Secdiv2 = document.createElement("Secdiv");
    Secdiv2.className = "col-sm-9"
    Secdiv2.style = "text-align:center;margin-top:5%;"
    var heading21 = document.createElement("h1");
    heading21.style = "font-weight:bold; font-family: cursive;font-size:30px;color:black;"
    var insert2 = document.createElement("ins");
    insert2.innerHTML = "Contact Me"
    var heading22 = document.createElement("h5");
    heading22.style = "font-family: cursive;margin:2%; font-size:30px; color:black;"
    setTimeout(() => {
        heading22.innerHTML = "Email: anniephilip23@gmail.com"
    }, 2000);
    var heading23 = document.createElement("h5");
    heading23.style = "font-family: cursive;margin:2%; font-size:30px; color:black;"
    setTimeout(() => {
        heading23.innerHTML = "Phone: 9500051160, 6381131213"

    }, 2500);
    heading21.appendChild(insert2)
    Secdiv2.appendChild(heading21)
    Secdiv2.appendChild(heading22)
    Secdiv2.appendChild(heading23)
    Secdivmain1.appendChild(Secdiv1)
    Secdivmain1.appendChild(Secdiv2)
    document.body.appendChild(Secdivmain1)

}



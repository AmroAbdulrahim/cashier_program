// the elemint of classes
let s = document.getElementById("s")
let s2 = document.getElementsByClassName("s2")
let p = document.getElementById("p")
let p2 = document.getElementsByClassName("p2")
let j = document.getElementById("j")
let j2 = document.getElementsByClassName("j2")

// open the menus for aonlly classes
s.onclick = function(){
    if(s2[0].style.display === "block"){ // if the list opened => close it
        s2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:10,
            behavior: "smooth"
        })
    } else {                            // if the list closed => open it
        s2[0].style.display = "block"
        p2[0].style.display = "none"
        j2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:200,
            behavior: "smooth"
        })
    }
}
p.onclick = function(){
    if(p2[0].style.display === "block"){
        p2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:10,
            behavior: "smooth"
        })
    } else {
        p2[0].style.display = "block"
        s2[0].style.display = "none"
        j2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:400,
            behavior: "smooth"
        })
    }
}
j.onclick = function(){
    if(j2[0].style.display === "block"){
        j2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:10,
            behavior: "smooth"
        })
    } else {
        j2[0].style.display = "block"
        p2[0].style.display = "none"
        s2[0].style.display = "none"
        window.scrollTo({
            left:0,
            top:300,
            behavior: "smooth"
        })
    }
}


// access for pizza
let t1 = document.getElementById("t1")
let ppa = document.getElementsByClassName("ppa")
let t2 = document.getElementById("t2")
let ppb = document.getElementsByClassName("ppb")
let t3 = document.getElementById("t3")
let ppc = document.getElementsByClassName("ppc")
let t4 = document.getElementById("t4")
let ppd = document.getElementsByClassName("ppd")

t1.onclick = function(){
    if(ppa[0].style.display === "none"){
        ppa[0].style.display = "block"
    } else{
        ppa[0].style.display = "none"
    }
}
t2.onclick = function(){
    if(ppb[0].style.display === "none"){
        ppb[0].style.display = "block"
    } else{
        ppb[0].style.display = "none"
    }
}
t3.onclick = function(){
    if(ppc[0].style.display === "none"){
        ppc[0].style.display = "block"
    } else {
        ppc[0].style.display = "none"
    }
}
t4.onclick = function(){
    if(ppd[0].style.display === "none"){
        ppd[0].style.display = "block"
    } else {
        ppd[0].style.display = "none"
    }
}


// git the Requests in details

let domm = document.getElementsByClassName("domand")
let st = document.getElementsByClassName("type")
let price = document.getElementById("price")

// the default value to total price
let prc = 0
price.textContent = prc 


//#####################################
let sss 
//#####################################
document.onclick = function(e){
    if(e.target.id === "ss" || e.target.id === "jj"){
        let con = document.createElement("p")
        con.id = "con"
        con.value = e.target.value
        let x = document.createElement("h5")
        x.textContent = "x"
        con.textContent = `${e.target.textContent}  ×`
        domm[0].appendChild(con)
        prc = prc + e.target.value
        price.textContent = prc 
        console.log(e.target.value)

        // console.log(e.target.textContent)
    } else if(e.target.id === "ppa"){
        let con = document.createElement("p")
        con.id = "con"
        con.value = e.target.value
        con.textContent = `${st[0].textContent} ${e.target.textContent}  ×`
        domm[0].appendChild(con)
        prc = prc + e.target.value
        price.textContent = prc 
        console.log(e.target.value)
        
        // console.log(`بيتزا دجاج ${e.target.textContent}`)
    } else if(e.target.id === "ppb"){
        let con = document.createElement("p")
        con.id = "con"
        con.value = e.target.value
        con.textContent = `${st[1].textContent} ${e.target.textContent}  ×`
        domm[0].appendChild(con)
        prc = prc + e.target.value
        price.textContent = prc 
        console.log(e.target.value)

        // console.log(`بيتزا بيبروني ${e.target.textContent}`)
        
    } else if(e.target.id === "ppc"){
        let con = document.createElement("p")
        con.id = "con"
        con.value = e.target.value
        con.textContent = `${st[2].textContent} ${e.target.textContent}  ×`
        domm[0].appendChild(con)
        prc = prc + e.target.value
        price.textContent = prc 
        console.log(e.target.value)

        // console.log(`بيتزا لحم ${e.target.textContent}`)
    
    } else if(e.target.id === "ppd"){
        let con = document.createElement("p")
        con.id = "con"
        con.value = e.target.value
        con.textContent = `${st[3].textContent} ${e.target.textContent}  ×`
        domm[0].appendChild(con)
        prc = prc + e.target.value
        price.textContent = prc 
        console.log(e.target.value)

        // console.log(`بيتزا خضروات ${e.target.textContent}`)
    } else if(e.target.id === "con"){
        e.target.remove()
        prc = prc - e.target.value
        price.textContent = prc
        console.log(price.textContent)
    }
}

let gg = document.getElementById("h3")
let gd = document.getElementsByTagName("button")
console.log(gg)

gd[0].onclick = function(){
    let dat = new Date
    
    gg.textContent = `${dat.getFullYear()}/${dat.getMonth()}/${dat.getDay()} ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`
    console.log(`${dat.getFullYear()}/${dat.getMonth()}/${dat.getDay()} ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`)

}

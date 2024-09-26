var hd = document.getElementById("head1");
hd.style.color = "red"
//hd.innerText="text changed"
hd.innerHTML='<p>changed into p tag.</p>'


//using class name
var list = document.getElementsByClassName("list");
for(i=0;i<list.length;i++){
    list[i].style.color = "green"
}


// using tag name
var tag1 = document.getElementsByTagName("li");
tag1[0].style.backgroundColor = "yellow";

// query selector using tagname
var inp = document.querySelector('input');
inp.placeholder = "type any message here!"

// query selector using classname
var qclass = document.querySelector(".qclass");
qclass.style.backgroundColor="grey"

// next button
var btn = document.querySelector("#qid");
btn.innerText="Submit"
qid.style.backgroundColor="grey"

// next



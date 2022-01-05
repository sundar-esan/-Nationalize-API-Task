var p=document.createElement('div');
p.innerText="FIND THE NATIONALITY OF ANY NAME";
p.style.textAlign="center";
p.style.fontSize="40px";
p.style.fontWeight="bold";
p.style.color="Balck";
document.body.append(p);

var p1= document.createElement('p');
p1.innerText=`This is simple webpage,where you can find the nationality of any name.
Step1 : Enter the name in search bar  then press search button. 
Step2 : Based on the name probability you will get the top two country Id
        as well as probability ratio.`;
 p1.style.fontSize="20px" ;     
 document.body.append(p1);

//this is simple webpage,where you can find the nationality
//of any name
//enter the name in search bar press the search button

//ceating input type search element 
var input=document.createElement('input');
input.setAttribute('type','search');
input.setAttribute('id','nam');
input.style.height="30px";
input.style.fontSize="25px";
document.body.append(input);

//creating button element
var btn = document.createElement('button');
btn.addEventListener('click',function(){getdata();});
btn.innerHTML="search";
btn.style.marginLeft="3px";
btn.style.marginTop="3px";
btn.style.height="30px";
btn.style.fontSize="20px";
btn.style.backgroundColor="lime"
document.body.append(btn);


async function getdata(){

    try {
        let nam = document.getElementById("nam").value;
        console.log(nam);
        let res=await fetch(`https://api.nationalize.io/?name=${nam}`);
        let result=await res.json();
        console.log(result);

        let name = result.name;
        console.log(result.name);
        var div= document.createElement('div');
        div.innerHTML=`Entered Name: ${name}`;
        div.style.fontSize="25px";
        document.body.append(div);

        let count1 =result.country[0].country_id;
        console.log(result.country[0].country_id);
        var div= document.createElement('div');
        div.innerHTML=`Country ID: ${count1}`;
        div.style.fontSize="25px";
        document.body.append(div);

        let prob1 =result.country[0].probability;
        console.log(result.country[0].probability);
        var div= document.createElement('div');
        div.innerHTML=`Probability : ${prob1}`;
        div.style.fontSize="25px";
        document.body.append(div);

        let count2 =result.country[1].country_id;
        console.log(result.country[1].country_id);
        var div= document.createElement('div');
        div.innerHTML=`Country ID : ${count2}`;
        div.style.fontSize="25px";
        document.body.append(div);

        let prob2 =result.country[1].probability;
        console.log(result.country[1].probability);
        var div= document.createElement('div');
        div.innerHTML= `Probability : ${prob2}`;
        div.style.fontSize="25px";
        document.body.append(div);

    }
    catch(error){
        console.log(error);
    
    }
}

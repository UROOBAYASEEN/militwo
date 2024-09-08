let namee=document.getElementById("myname");
let dagree=document.getElementById("mydegree" );
let gender=document.getElementById("mygender");
let emale=document.getElementById("myemale" );
let dob=document.getElementById("mydob");
let nationality=document.getElementById("mynationaloty" );
let job=document.getElementById("myjob" );
let exp=document.getElementById("myexpriance");
let riligion=document.getElementById("myreligion"); // form  input
let button=document.getElementById("button")
let resume=document.getElementById("mainone")

let myname=document.getElementById("namee")
let mydagree=document.getElementById("degree")
let mygender=document.getElementById("gender")
let myemal=document.getElementById("email")
let mydob=document.getElementById("dob")
let mynationality=document.getElementById("nationality")
let myjob=document.getElementById("job")
let myexp=document.getElementById("exp")
let myreligion=document.getElementById("religion")  // resume input
let profilepic=document.getElementById("profile_pic")
let inputfile=document.getElementById("input-file")

inputfile.onchange=function(){
    profilepic.src=URL.createObjectURL(inputfile.files[0])
}
button.addEventListener('click',()=>{
    alert("congratulation resume generate")
  
    
    
    
    let realname=namee.value
    let realdegree=dagree.value
    let reallgender=gender.value
    let realemail=emale.value
    let realldob=dob.value
    let realnationality=nationality.value
    let realjob=job.value
    let realexp=exp.value
    let realreligion=riligion.value

    myname.textContent=`NAME: ${realname}`
    mydagree.textContent=`DEGREE: ${realdegree}`
    mygender.textContent=`GENDER  ${reallgender}`
    myemal.textContent=`EMALE:  ${realemail}`
    mydob.textContent=`DATE OF BIRTH: ${realldob}`
    mynationality.textContent=`NATIONALITY: ${realnationality}`
    myjob.textContent=`JOB:  ${realjob}`
    myexp.textContent=`EXPERIANCE: ${realexp}`
    myreligion.textContent=`RELIGION: ${realreligion}`



})


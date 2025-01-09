const para=document.querySelector(".cnt")
const btn=document.querySelector(".btn")



btn.addEventListener("click",async ()=>{
    const url="https://meowfacts.herokuapp.com/"
    const fact= await fetch(url)
    const data= await fact.json()
    para.textContent=data.data
    console.log(data)
    console.log(data.data)
    console.log(typeof(data))
    console.log("hello")
    
    
   }
)










// const gdata = async ()=>{
//  const url="https://meowfacts.herokuapp.com/"
//  const fact= await fetch(url)
//  const data= await fact.json()
//  console.log(data)
//  console.log(data.data)
//  console.log(typeof(data))
// }
// gdata()

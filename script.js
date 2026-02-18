
const roles=['Software Engineer','Automation Specialist','Full Stack Developer'];
let i=0,j=0;
const el=document.getElementById('typing');
function type(){
 if(j<roles[i].length){el.textContent+=roles[i][j];j++;setTimeout(type,80);}
 else{setTimeout(()=>{el.textContent='';j=0;i=(i+1)%roles.length;type();},1500);}
}
type();

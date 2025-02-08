function validation(){
    let isVaild=true;

    const name=document.getElementById("name").value.trim();
    const mail=document.getElementById("mail").value.trim();
    const pass=document.getElementById("pass").value.trim();
    document.getElementById('nameerr').innerHTML="";
    document.getElementById('mailerr').innerHTML="";
    document.getElementById('passerr').innerHTML="";
    if(name===""){
      document.getElementById('nameerr').innerHTML="not reqired!" ;
      isVaild=false;
    }
    if(mail===""){
      document.getElementById('mailerr').innerHTML="not reqired!" ;
      isVaild=false;
    }
    if(pass===""){
      document.getElementById('passerr').innerHTML=" not reqired!" ;
      isVaild=false;
    }
    
    return isVaild;
  }
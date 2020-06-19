 // do not touch me am the login --start
 var cmdUrl = server('origin')+'/src/js/cmd.json',
 respUrl = server('origin')+'/src/js/resp.json',
 pushOpt = {method:'get'};
 fetch(cmdUrl,pushOpt)
 .then(data=>data.json())
 .then(data=>{cmd = data})

 fetch(respUrl,pushOpt)
 .then(data=>data.json())
 .then(data=>{resp = data})

 function chat(input) {
   valid = input.trim().length;
   found = false;
   cmdVal = Object.values(cmd);
   respVal = Object.values(resp);
   cmdVal.forEach((element, key) => {
     if (element.includes(input)) {
       found = true;
       reply = respVal[key];
     }
   });
   if (!found || !valid) {
     reply = "i don't understand";
   } else {
     span = make("span");
     p = make("p");
     p.innerText = input;
     put(span, p);
     put(grab("text_body"), span);
     addClass([p], ["itRight"]);
   }
   setTimeout(() => {
     span = make("span");
     p = make("p");
     p.innerText = reply;
     put(span, p);
     put(grab("text_body"), span);
     grab("text_body").scrollTo(0,grab("text_body").scrollHeight);
   }, 800);
   grab("text_body").scrollTo(0,grab("text_body").scrollHeight);
 }
 pacth_addEV(grab("send"), "click", () => {
   chat(grab("input").value);
 });
 // do not touch me am the login --end
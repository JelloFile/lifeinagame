var input = document.querySelector("#userinput")
var cont = document.getElementById("cont")
var id = 1
var itemstotal = 0
if(localStorage.getItem("USDollarPocket") == null){
  //if its null, the user never played before/reset all.
  localStorage.setItem("USDollarPocket", 0)
  localStorage.setItem("USDollarBank", 0)
  localStorage.setItem("invRedFish", 0)
  localStorage.setItem("invBlueFish", 0)
  localStorage.setItem("invGreenLimeFish", 0)
}
var inv = {
  usedFishingRod: Number(localStorage.getItem("invUsedFishingRod")),
  redFish:Number(localStorage.getItem("invRedFish")),
  blueFish:Number(localStorage.getItem("invBlueFish")),
  greenLimeFish:Number(localStorage.getItem("invGreenLimeFish")),
}
var money = {
  USDollarPocket: Number(localStorage.getItem("USDollarPocket")),
  USDollarBank: Number(localStorage.getItem("USDollarBank")),
}
//Command Finder

save()

function save(){
  //saves every second
  localStorage.setItem("USDollarPocket", money.USDollarPocket)
  localStorage.setItem("USDollarBank", money.USDollarBank)
  localStorage.setItem("invUsedFishingRod", inv.usedFishingRod)
  localStorage.setItem("invRedFish", inv.redFish)
  localStorage.setItem("invBlueFish", inv.blueFish)
  localStorage.setItem("invGreenLimeFish", inv.greenLimeFish)
  itemstotal = inv.usedFishingRod + inv.redFish + inv.blueFish + inv.greenLimeFish
  setTimeout(save,1000)
}
document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    id++
    playerResp(input.value)
    if(mathcommandinprogress == 1){
      mathcommandplayeranswer = input.value
      setTimeout( mathCommandCheck,1000)
     
    }else{
findCommand(input.value)
    }
  
  
    input.value = ""
    
  }
});
function playerResp(val){

  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='userresponse'>
    <tr>
      <td><h2>You said:</h2><p>${input.value}</p></td>
    </tr>  



  </table><br><br><br><br><br><br><br><br><br><br><br>
  
  `
  opacityChange(id)
  scrollView()
}

var currentthing = 0
function scrollView(){
  document.getElementById(id).scrollIntoView()


}
function opacityChange(i){
  if(currentthing==1||currentthing>1){
    currentthing=0
  }else{
    currentthing=currentthing+0.04
    document.getElementById(i).style = `opacity:${currentthing}`
    setTimeout(function(){opacityChange(i)},10)
  }
  
}

//Commands
function findCommand(command){
  id++


if(command == "/help"){
  setTimeout(helpCommand, 1000)
}else if(command=="/bal"||command == "/money"){
   setTimeout(balCommand, 1000)
}else if(command=="/beg"){
     setTimeout(begCommand, 1000)
  }else if(command=="/credits"){
     setTimeout(creditCommand, 1000)
  }else if(command=="/inv" || command == "/inventory"){
     setTimeout(invCommand, 1000)
  }else if(command == "/version" ||command == "/changelog"){
  setTimeout(versionCommand, 1000)
  }else if(command == "/save" ){
setTimeout(saveCommand, 1000)
}else if(command == "/clear" ){
setTimeout(clearCommand, 1000)
}else if(command == "/shop" ){
setTimeout(shopCommand, 1000)
}else if(command.includes("/shop buy Used Fishing Rod")||command.includes("/buy Used Fishing Rod")){
setTimeout(shopbuyUFRCommand, 1000)
}else if(command == "/shop buy" || command == "/buy" ){
setTimeout(shopbuycommand, 1000)
}else if(command == "/fish" ){
setTimeout(fishCommand, 1000)
}else if(command == "/math" ){
  //inprogress
setTimeout(mathCommand, 1000)
}else if(command == "/clearmydata" || command == "/deletemydata" ){
setTimeout(cleardataCommand, 1000)
}else if(command == "/sell" ){
setTimeout(sellCommand, 1000)
}else if( command == "/sell Red Fish" || command == "/sell red fish"){
setTimeout(sellredFishCommand, 1000)
}else if( command == "/sell Blue Fish" || command == "/sell blue fish"){
setTimeout(sellblueFishCommand, 1000)
}else if( command == "/sell Green Lime Fish" || command == "/sell green lime fish"){
setTimeout(sellgreenlimeFishCommand, 1000)
}else{
  setTimeout(noCommand,1000)

}

}

  //help command
function helpCommand(){ id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}e'class='gameresponse'>
    <tr>
      <td><h2>Help Command</h2><h3>Info Commands</h3>/help - Help Command<br>/credits - Credits of the Game (Images, Staff, etc)<br>/changelog or /version - Check the current version and changelogs<br><h3>Currency-Related Commands</h3><br>/bal or /money - Check how much money you have.<br>/inv or /inventory - Check your inventory<br>/shop - Spend your $$$<br>/shop buy (item) or /buy (item) - buy items needed to progress<br><br><h3> Currency Earning Commands</h3> <br> /beg - Beg to bolster your pocket balance<br>/fish - Fish to get fish<br>/math - Get paid to learn addition and multiplication <br>/sell (item) - I think the name is kinda self explanatory 😂<br><h3>Miscellanous Commands</h3>/save - Saves your game.<br>/clear - Clears all the stuff (Commands/UserInputs)<br>/clearmydata or /deletemydata - Deletes everything you did in the game, including information that you gave us.</td>
    </tr>  



  </table><br><br><br><div id='${id}'></div>
  `
  scrollView()
  currentthing=0
                       document.getElementById(id).style = `opacity:0`
  opacityChange(id+"e")
}




//sell (compliation) command
function sellCommand(){ 
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Sell Command Usage</h2><br><h4 style='margin:0;padding:0;'>/sell [item] - sell an item</h4></td>
    </tr>  



  </table><br><br><br>
  `
  scrollView()
  currentthing=0
 document.getElementById(id).style = `opacity:0`
  opacityChange(id)
}

function sellredFishCommand(){
  if(inv.redFish <= 0){
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td><h2>Scammer get scammed</h2><br><h4 style='margin:0;padding:0;'>You don't have the item. :)</h4></td>
      </tr>  



    </table><br><br><br>`
    scrollView()
      currentthing=0
     document.getElementById(id).style = `opacity:0`
      opacityChange(id)
    
  }else{
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Alright</h2><br><h4 style='margin:0;padding:0;'>You sold a Red Fish for $100</h4></td>
    </tr>  



  </table><br><br><br>`
    inv.redFish = inv.redFish - 1
    money.USDollarPocket = money.USDollarPocket + 100
  scrollView()
  currentthing=0
 document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  }
}
function sellblueFishCommand(){
  if(inv.blueFish <= 0){
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td><h2>Scammer get scammed</h2><br><h4 style='margin:0;padding:0;'>You don't have the item. :)</h4></td>
      </tr>  



    </table><br><br><br>`
    scrollView()
      currentthing=0
     document.getElementById(id).style = `opacity:0`
      opacityChange(id)

  }else{
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Alright</h2><br><h4 style='margin:0;padding:0;'>You sold a Blue Fish for $100</h4></td>
    </tr>  



  </table><br><br><br>`
    inv.blueFish = inv.blueFish - 1
    money.USDollarPocket = money.USDollarPocket + 100
  scrollView()
  currentthing=0
 document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  }
}
function sellgreenlimeFishCommand(){
  if(inv.greenLimeFish <= 0){
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td><h2>Scammer get scammed</h2><br><h4 style='margin:0;padding:0;'>You don't have the item. :)</h4></td>
      </tr>  



    </table><br><br><br>`
    scrollView()
      currentthing=0
     document.getElementById(id).style = `opacity:0`
      opacityChange(id)

  }else{
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Alright</h2><br><h4 style='margin:0;padding:0;'>You sold a Green Lime Fish for $100</h4></td>
    </tr>  



  </table><br><br><br>`
    inv.greenLimeFish = inv.greenLimeFish - 1
    money.USDollarPocket = money.USDollarPocket + 100
  scrollView()
  currentthing=0
 document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  }
}











//bal command
function balCommand(){ 
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Your Money</h2><br><h4 style='margin:0;padding:0;'>Your Pocket Balance (US Dollar): $${money.USDollarPocket}<br>Your Bank Balance (US Dollar): $${money.USDollarBank}</h4></td>
    </tr>  



  </table><br><br><br>
  `
  scrollView()
  currentthing=0
 document.getElementById(id).style = `opacity:0`
  opacityChange(id)
}


//clearallyourdata command
function cleardataCommand(){
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>You sure you wanna delete ya data?</h2><br><button onclick='clearmydata(${id})'>I WANNA DELETE MY DATA!</button><button onclick='clearmydatano(${id})'>Nah, I did a typo...</button></td>
    </tr>  



  </table><br><br><br>
  `
  scrollView()
  opacityChange(id)
}

function clearmydata(e){


  document.getElementById(e).innerHTML = "  <td><h2>Alright.</h2><p>It was nice having you here :(. You'll be teleported out of this life in 5 seconds.</p></td>"
  opacityChange(e)
  setTimeout(clearmydata2,5000)
}
function clearmydata2(){
  localStorage.clear()
  close()
}
function clearmydatano(e){


  document.getElementById(e).innerHTML = "  <td><h2>Alright. Command cancelled.</h2><p>Thanks for not leaving us!</p></td>"
  opacityChange(e)
}
















//math command
 var mathCooldown = 0
var mathcommandinprogress = 0
var mathcommandanswer = 0;
var mathcommandplayeranswer = 0
var mathprizemoney = 0
function mathCommand(){
  id++
    if (mathCooldown > 0){
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
        <tr>
          <td><h2>BRUH... </h2><br><p>This command is on cooldown... Go       touch grass in the meantime. There's <bold>${mathCooldown}</bold> seconds left.</p></td>
        </tr>  



      </table><br><br><br>
    
      `
      scrollView()
      opacityChange(id)
    
    }else{
      mathcommandinprogress=1
      var number1 = Math.floor(Math.random()*50)+1
      var number2= Math.floor(Math.random()*50)+1
      var symbolnumber = Math.floor(Math.random()*2)+1
      var symbol = ""
     
      if(symbolnumber == 1){
        symbol = "+"
        mathprizemoney = Math.floor(Math.random()*10)+1
      }else{
        symbol = "*"
        mathprizemoney = Math.floor(Math.random()*90)+10
      }
      var equation = number1 + symbol + number2
       mathcommandanswer = eval(equation)

      
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'><tr><td><h2>Math Command</h2><p>Your equation is: <bold>${equation}</bold> and just only type the number. No command.</p></td></tr></table><br><br><br>`
      scrollView()
      opacityChange(id)
    }
  
  

}

function mathCommandCheck(){
  id++
  if(mathcommandanswer == mathcommandplayeranswer){
    
     cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'><tr><td><h2>You are...</h2><p>correct! You win <bold>$${mathprizemoney}!</bold> Since you won, there's no cooldown, so you can do /math again!</p></td></tr></table><br><br><br>`
    money.USDollarPocket = money.USDollarPocket + mathprizemoney
    mathcommandinprogress = 0
    scrollView()
    opacityChange(id)
  }else{
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'><tr><td><h2>You are...</h2><p>wrong! The correct answer was ${mathcommandanswer}... Now you have a 15 second cooldown. </p></td></tr></table><br><br><br>`

    
    mathcommandinprogress = 0
    mathCooldown = 15
    mathcommandcooldown()
    scrollView()
    opacityChange(id)
    
  }

}
function mathcommandcooldown(){
  if(mathCooldown <= 0){
    mathCooldown = 0
  }else{
    mathCooldown = mathCooldown - 1
    setTimeout(mathcommandcooldown,1000)
  }
}



// save command

function saveCommand(){
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Your progress is saved.</h2><br><p>BTW, the game autosaves anyway, so you don't need to do /save. If you still don't trust us, you can use this.</p></td>
    </tr></table><br><br><br>`
  scrollView()
  currentthing=0
                       document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  save()}










//clear command
function clearCommand(){
  id++
  cont.innerHTML = ``
  scrollView()
 

}















//version/changelog command
function versionCommand(){ id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Version B0.3</h2><p><i>vB0.3</i> - Hey LAG'ers! We just introduced the /inv command and the /version command, and we are still developing the game. The New Year's in 28 days, and we may not release an update on the new year, so happy advance new year!!!<br><br><i class='caption'>Thanks for reading this. Barely no one comes here :(</i> </td>
    </tr>  



  </table><br><br><br>
  `
  scrollView()
  currentthing=0
                       document.getElementById(id).style = `opacity:0`
  opacityChange(id)
}









//credits command

function creditCommand(){
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Credits</h2><p><a href='https://replit.com/@JelloFile' style='color:skyblue'>@JelloFile</a> - Dev & Creator & PixelArtist </p><p><a href='https://replit.com/@SumeetEaga' style='color:skyblue'>@SumeetEaga</a> - Dev </p><br><br><i class='caption'>Wanna be on the credits? Send some items that YOU want added to @JelloFile's discord, or to his email!</i></td>
    </tr></table><br><br>`
  scrollView()
  opacityChange(id)
}



//fish Command

function fishCommand(){
  if (fishcooldowntimer == 0){
if(inv.usedFishingRod >= 1){
  id++
  var fishresult = Math.floor(Math.random()*2)+1
 var randomfish = Math.floor(Math.random() * 3)+1;
  if(fishresult == 1){
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <th></th><th><h2>You fished up nothin!</h2><p>Turns out the fish wasn't here today...</p><br><br><i class='caption'>Better luck next time.</i></td>
      </th></table><br><br><br><br>`
    scrollView()
    opacityChange(id)
  }else if(fishresult==2){
    if(randomfish==1){
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td style='width:130px;'><h2>You fished</h2></td>      <td style='width:40px;'><h2>up</h2></td>      <td><h2>somethin!</h2></td></tr>
       <tr>
        <td>You fished up a</td><td><img src="https://jellofile.github.io/lifeinagame/sprites/items/fishes/red-fish.png"</td><td>Red Fish!</td>
      </tr>
      </table><br><br><br>`
      inv.redFish++
    }
    if(randomfish==2){
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td style='width:130px;'><h2>You fished</h2></td>      <td style='width:40px;'><h2>up</h2></td>      <td><h2>somethin!</h2></td></tr>

       <tr>
        <td style='width:130px;'>You fished up a</td><td><img src="https://jellofile.github.io/lifeinagame/sprites/items/fishes/blue-fish.png"</td><td>Blue Fish!</td>
      </tr>
      </table><br><br><br>`
      inv.blueFish++
    }
    if(randomfish==3){
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td style='width:130px;'><h2>You fished</h2></td>      <td style='width:40px;'><h2>up</h2></td>      <td><h2>somethin!</h2></td></tr>

         <tr>
          <td style='width:130px;'>You fished up a</td><td><img src="https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/green-lime-fish.png"</td><td>GreenLime Fish!</td>
        </tr>
        </table><br><br><br>`
      inv.greenLimeFish++
    }
    scrollView()
    opacityChange(id)
    
  }
  fishcooldowntimer = 30
  fishcooldown()
  
  }else{
  id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>You don't have a fishing rod!</h2><p>You need a fishing rod to fish.</p><br><br><i class='caption'>You can buy a fishing rod in the shop.</i></td>
    </tr></table><br><br>`
  scrollView()
  opacityChange(id)
}
  }else{
    id++
    cont.innerHTML = cont.innerHTML + `<table id='${id}r'class='gameresponse'>
      <tr>
        <td><h2>This command is on cooldown</h2><p>It has <bold>${fishcooldowntimer}</bold> seconds left on cooldown!</p><br><br><i class='caption'>Spam ain't cool here.</i></td>
      </tr></table><br><br><div id='${id}'></div><br><br>`
    scrollView()
    opacityChange(id+"r")
  }
}




var fishcooldowntimer = 0
function fishcooldown(){
  if(fishcooldowntimer == 0){
    
  }else{
    fishcooldowntimer = fishcooldowntimer - 1
    setTimeout(fishcooldown, 1000)
  }
}




//beg command
var begCooldown = 0
function begCommand(){
  id++
  if(begCooldown > 0){
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td><h2>Sorry, this command is on cooldown!</h2>This command has ${begCooldown} seconds left until you can use it!</td>
    </tr>  </table><br><br><br>`
    opacityChange(id)
    scrollView()  
  }else{
    var resultNumber = Math.floor(Math.random() * 2)+1
    var moneygiven = Math.floor(Math.random()* 100)+1;
var phraseNumber = Math.floor(Math.random()*10)+1
    var phrase = ""
    var personNumber = Math.floor(Math.random()*13)+1
    var person = ""
    if(personNumber == 1){
       person = "Jeff Bezos"
    } else if(personNumber == 2){
       person = "JelloFile"
    }else if(personNumber == 3){
       person = "A random ghost you can see"
    }else if(personNumber == 4){
       person = "Elon Musk"
    }else if(personNumber == 5){
       person = "The CEO of Discord"
    }else if(personNumber == 6){
       person = "@cubinginsider on Youtube"
    }else if(personNumber == 7){
       person = "God Of Codes"
    }else if(personNumber == 8){
       person = "A random millionaire"
    }else if(personNumber == 9){
       person = "Random dude with a ukelule"
    }else if(personNumber == 10){
       person = "Sundar Pichai"
    }else if(personNumber == 11){
       person = "@ElectroGOD"
    }else if(personNumber == 12){
       person = "Your Worst Enemy"
    }else if(personNumber == 13){
       person = "A random dude"
    }
    if(resultNumber == 1 & phraseNumber == 1){
         phrase = `Here's <bold>$${moneygiven}</bold>, now get out of my sight!`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 2){
           phrase = `I've seen 200+ beggars in my lifetime, but I feel nice today. Take <bold>$${moneygiven}</bold>.`
        money.USDollarPocket = money.USDollarPocket + moneygiven
      }else if(resultNumber == 1 & phraseNumber == 3){
         phrase = `just take <bold>$${moneygiven}</bold> :)`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 4){
         phrase = `*drops <bold>$${moneygiven}</bold>* `
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 5){
         phrase = `I'm a rich guy, take <bold>$${moneygiven}</bold>`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 6){
         phrase = `I'm becoming poor cuz of yall. Take <bold>$${moneygiven}</bold>`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 7){
         phrase = `I was a poor guy once. Take <bold>$${moneygiven}</bold> and use it wisely`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 8){
         phrase = `Congratulations, you just won <bold>$${moneygiven}</bold>! `
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 9){
         phrase = `Pay me back soon. Here's <bold>$${moneygiven}</bold>.`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 1 & phraseNumber == 10){
         phrase = `*yawns* *reaches for <bold>${moneygiven} dollars</bold>* *drops it* *runs away*`
      money.USDollarPocket = money.USDollarPocket + moneygiven
    }else if(resultNumber == 2 & phraseNumber == 1){
           phrase = `*ignores you while singing*`
        money.USDollarPocket = money.USDollarPocket + moneygiven
      }else if(resultNumber == 2 & phraseNumber == 2){
             phrase = `I hope you understand that begging will never work, go get a job.`
        
        }else if(resultNumber == 2 & phraseNumber == 3){
           phrase = `I'm poor too :D`
     
      }else if(resultNumber == 2 & phraseNumber == 4){
           phrase = `lol, nah `
     
      }else if(resultNumber == 2 & phraseNumber == 5){
           phrase = `hey dude, im out of money... `

      }else if(resultNumber == 2 & phraseNumber == 6){
           phrase = `I'm poor now because of the poor.`
     
      }else if(resultNumber == 2 & phraseNumber == 7){
           phrase = `I AM IN CRIPPLING DEBT`

      }else if(resultNumber == 2 & phraseNumber == 8){
           phrase = `*runs away*`
      
      }else if(resultNumber == 2 & phraseNumber == 9){
           phrase = `Why u begging for something you'll never get?`

      }else if(resultNumber == 2 & phraseNumber == 10){
           phrase = `stop annoying me peasant`

      }
    var ifgoodornot = ""
    if(resultNumber == 1){
      ifgoodornot = "Your begging scheme worked, good job."
    } if(resultNumber == 2){
      ifgoodornot = "begging is for losers"
    }
    cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>${person}</h2>${phrase}<br>    <br><i class='caption'>${ifgoodornot}</i></td>
</tr>  </table><br><br><br>`
opacityChange(id)
scrollView()    
    begCooldown=15
    begcooldown()
  }
}
function begcooldown(){
  if(begCooldown == 0){
    
  }else{
    begCooldown = begCooldown - 1
    setTimeout(begcooldown, 1000)
  }
}










//shop command

function shopCommand(){
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <td><h2>Shop</h2>
      </tr>  
      <tr>
        <td style='margin:0;padding:0;'><img style='margin:0;padding:0;' src="https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/used-fishing-rod.png"/></td>  <td style='margin:0;padding:0;'>Used Fishing Rod - $500</td></tr>
<tr>
  <td><i class='caption'>to buy these overpriced items, do /shop buy [item]. :)</i></td></tr>

,
    </table><br><br><br>

    `
    currentthing=0
    numberInv = 0
                        document.getElementById(id).style = `opacity:0`
    opacityChange(id)
    scrollView()
}






// SHOP .BUY COMMANDS









//BUY USED FISHING ROD
function shopbuycommand(){
  id++
   cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
        <tr>
          <th style='width:238.72px;'><h2>Buy Command Usage</h2></th>
        </tr>  
        <tr>
          <td style='width:300px;'>/buy [item] || /shop buy [item] - Buy a item from shop</td>
        </tr>


      </table><br><br><br>

      `
  opacityChange(id)
  scrollView()
}
function shopbuyUFRCommand(){
  //buy used fishing rod
  if(money.USDollarPocket >= 500){
    id = id+1
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
      <tr>
        <th style='width:238.72px;'><h2>Confirm Purchase?</h2></th>
      </tr>  
      <tr>
        <td style='width:300px;'>Would you like to buy</td> <td style='margin:0;padding:0;'><img style='margin:0;padding:0;' src="https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/used-fishing-rod.png"/></td>  <td style='margin:0;padding:0;width:800px;'>Used Fishing Rod for $500?</td></tr>
<tr>
  <td><button onclick='changeUFRvar()'>Continue</button></td></tr>


    </table><br><br><br>

    `
    il=id
    buyUFRCheckForOthers()

  }else{
        id = id+1
      cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
          <tr>
            <td><h2>No Money, No Item</h2>
          </tr>  
          <tr>
            <td>You don't have enough money to buy this item, so go find some more.</td></tr>

    
        </table><br><br><br>

        `
  }
    currentthing=0
    numberInv = 0
                        document.getElementById(id).style = `opacity:0`
    opacityChange(id)
    scrollView()

}
var UFRbought = 0
function changeUFRvar(){
  UFRbought = 1
  money.USDollarPocket = money.USDollarPocket - 500
  inv.usedFishingRod++
  currentthing=0
  numberInv = 0
                      document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  scrollView()
  document.getElementById(id).innerHTML = `<tr>
      <td><h2>Successfully Bought!</h2></td>
<tr>`
  
}
var il=""
function buyUFRCheckForOthers(){
  if(id == il){
   setTimeout(buyUFRCheckForOthers, 50)
  }else if(UFRbought == 1){
    
  }else{
    document.getElementById(il).style = `opacity:0`
      opacityChange(il)
     
      document.getElementById(il).innerHTML = `<tr>
          <td><h2>Another command was run.</h2><p>Another command was run, so this action was cancelled.</p></td>
    <tr>`
  }
}


//end of shop.buy commands

























//inv command

function invCommand(){
var invphrases = ""
  var numberInv = 0
//change when needed.
  
if (itemstotal == 0){
  invphrases = "<tr><td>You have no items in your inventory...</td></tr>"
}else{
  if (inv.usedFishingRod > 0){
    invphrases = invphrases + `<tr><td><h3>Items Related to Fishing</h3></td><tr><td style='margin:0;padding:0;'><img src='https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/used-fishing-rod.png'style="width:40px;height:40px;"></td><td style='margin:0;padding:0;'>Used Fishing Rod:</td><td>${inv.usedFishingRod}</td></tr>`
    numberInv++
  }
  if (inv.redFish > 0){
    invphrases = invphrases + `<tr><td style='margin:0;padding:0;'><img src='https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/red-fish.png'style="width:40px;height:40px;"></td><td style='margin:0;padding:0;'>Red Fish:</td><td>${inv.redFish}</td></tr>`
    numberInv++
  }
  if (inv.blueFish > 0){
    invphrases = invphrases + `<tr><td style='margin:0;padding:0;'><img src='https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/blue-fish.png'style="width:40px;height:40px;"></td><td style='margin:0;padding:0;'>Blue Fish:</td><td>${inv.blueFish}</td></tr>`
    numberInv++
  }
  if (inv.greenLimeFish > 0){
    invphrases = invphrases + `<tr><td style='margin:0;padding:0;'><img src='https://jellofile.github.io/lifeinagame/sprites/items/fishingrelated/green-lime-fish.png'style="width:40px;height:40px;"></td><td style='margin:0;padding:0;'>Green Lime Fish:</td><td>${inv.greenLimeFish}</td></tr>`
    numberInv++
  }
}

  
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>Your Inventory</h2>
    </tr>  
${invphrases}


  </table><br><br><br>

  `
  currentthing=0
  numberInv = 0
                      document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  scrollView()
}



//Command No Exist
function noCommand(){id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>That... isn't a valid command</h2><p>Do /help if you're confused!<p></td>
    </tr>  



  </table><br><br><br>

  `
  currentthing=0
                      document.getElementById(id).style = `opacity:0`
  opacityChange(id)
  scrollView()
}



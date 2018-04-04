function shout(text){
  return text.toUpperCase()
}

function whisper(text){
  return text.toLowerCase()
}

function longShout(text1){
  text1 = text1.toUpperCase()
  console.log(`${text1}`)
  
}


function longWhisper(text1){
  text1 = text1.toLowerCase()
  console.log(`${text1}`)
  
}

function sayHiToGrandma(text){
  if(text.toLowerCase() === text){
    return "I can't hear you!"
  }
  elseif(text.toUpperCase() === text){
    return "YES INDEED"
  }
  if(text === "I love you, Grandma."){
    return "I love you, too."
  }
}
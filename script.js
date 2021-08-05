const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.getElementById('search')
const text = document.getElementById('text')
const reset = document.getElementById('reset')

// define more constants and variables here
const defcolor = color.value
const str = text.innerHTML

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === "Display Calculation"){
    calculation.innerHTML = 630610765+parseInt(length.value)
    btn_toggle.innerHTML = "Display Author"
    author.innerHTML = ""
  }else{
    btn_toggle.innerHTML = "Display Calculation"
    author.innerHTML = "630610765 SUPARIDA SILPASITH"
    calculation.innerHTML = ""
  }
}

// more codes for Search and Reset buttons here

search.onclick = () => {
  
  let textspan = ""
  const words = str.split(" ");

  for (let i = 0; i < words.lengthlength; i++) {
    let word = words[i];
    let arr = []
    for(let j = 0; j < words.lengthlength; j++)
    if ((word[i][j].charCodeAt(0) >= 65 && iterator.charCodeAt(0) <= 90) || (word[i][j].charCodeAt(0) >= 97 && iterator.charCodeAt(0) <= 122)) {
      let neww = ""
      neww+= word[i][j]
      arr.push()
      continue
    }
  }

  for(let i = 0; i < words.length; i++){
    if(words[i].length > length.value){
      words[i] = "<span style='color:"+ color.value+ "'>" + words[i] + "</span>";
    }
  }

  for(let i = 0; i < words.length; i++){
    textspan += words[i] + " ";
  }

    text.innerHTML = textspan;
}


reset.onclick = () => {
    text.innerHTML = str;
    length.value = 5
    color.value = defcolor;
}
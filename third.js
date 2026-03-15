const scoreText = document.getElementById("score").innerText
const score = parseInt(scoreText)

const status = document.getElementById("status")
const bar = document.getElementById("bar")

bar.style.width = score + "%"

if(score >= 50){

status.innerHTML = "✔ Pass"
status.className = "pass"

bar.style.background = "#2bb673"

}

else{

status.innerHTML = "✖ Fail"
status.className = "fail"

bar.style.background = "#e53935"

}
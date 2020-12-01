function Calc() {
    let good = true
    a = document.getElementById("a").value*1;
    if (a < 1) {
        alert("Minimal value of Attack is 1")
        good = false
    }
    d = document.getElementById("b").value*1;
    if (d < 1) {
        alert("Minimal value of Defence is 1")
        good = false
    }
    l = document.getElementById("c").value*1;
    if (l < 1) {
        alert("Minimal value of Luck is 1")
        good = false
    }
    h = document.getElementById("d").value*1;
    if (h < 100) {
        alert("Minimal value of HP is 100")
        good = false
    }
    t = document.getElementById("e").value*1;
    if (t < 1) {
        alert("Minimal value of Time is 1")
        good = false
    }
    if (good) {
        reward = Math.floor(4000/((100/t)/(1+(l/100))))
        sup = Math.floor(reward*1.5)
        chance = Math.floor((Math.floor((100+h)/2)*((1000-(d*1.5))/1000))*((1000-a*1.5)/1000))
        control = Math.floor(((h)*(1+a/100)*(1+d/100))/(t*t))
        if (chance <= control) {
            end = 100
        } else { end = Math.floor(control/chance*10000)/100 }
        document.getElementById("chance").innerText = `Chance: ${end}%`;
        document.getElementById("reward").innerText = `Reward: ${reward}-${reward*2} Harem Points\n(Supporter reward: ${sup}-${sup*2} Harem Points)`;
    }
}
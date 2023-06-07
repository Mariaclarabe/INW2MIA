const leia = require("prompt-sync")()

let D
X1 = parseInt(leia("Digite o valor X1 : " ))
Y1 = parseInt(leia("Digite o valor Y1 : " ))
X2 = parseInt(leia("Digite o valor X2 : " ))
Y2 = parseInt(leia("Digite o valor Y2 : " ))

D = Math.sqrt(Math.pow((X2-X1),2)+Math.pow((Y2-Y1),2))


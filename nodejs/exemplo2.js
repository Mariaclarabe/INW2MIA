let p = new Promise (function(cumpriPromessa){
    cumpriPromessa(['Ana','Maria','Maytê','Manuela'])
})

p
.then(valor => valor[0])
.then(valor => console.log(valor))

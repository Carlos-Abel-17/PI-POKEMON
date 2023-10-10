 const validate = (datos)=>{
    let errores = {};
if(!/\.(jpeg|jpg|gif|png|bmp)$/i.test(datos.image)){
    errores.image = '⚠️You must enter a valid image url☹️'
}
if(!datos.name){
    errores.name = '⚠️The name cannot be empty😒'
}
if (datos.name.length >= 12) {
    errores.name = 'It cannot be more than 12 characters 😒'
}
if(datos.attack < 1 || datos.attack > 200){
    errores.attack = '⚠️The attack must be more than 0 ☹️'
}
if(datos.defense < 1|| datos.defense > 250){
    errores.defense = '⚠️ The defense must be more than 0 ☹️'
}
if(datos.speed < 1 || datos.speed > 200){
    errores.speed = '⚠️The speed must be more than 0 ☹️'
}
if (datos.height < 1 || datos.height > 100 ) {
    errores.height = ' ⚠️Height must be more than 0 and less than 100 😕'
}
if (datos.weight < 1 || datos.weight > 100) {
    errores.weight = '⚠️Weight must be more than 0 and less than 100 😕'
}
if(datos.life < 1 || datos.life > 100){
    errores.life = '⚠️Life must be more than 0 and less than 100 😕'
}
if(datos.types.length === 0) {
    console.log(datos.types)
    errores.types = "⚠️Debe tener al menos un tipo el pokemon";
}

if(datos.types.length > 2) {
    errores.types = "⚠️Debe tener como máximo dos tipos el pokemon";
}

return errores
}

export default validate


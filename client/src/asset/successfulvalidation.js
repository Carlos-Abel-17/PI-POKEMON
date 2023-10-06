const successfulvalidation=(datos)=>{
    let access = {};
    if(/\.(jpeg|jpg|gif|png|bmp)$/i.test(datos.image)){
        access.image = 'The ready image 👌'
    }
    if(datos.name){
        access.name = 'The ready name 👌'
    }
    if (datos.name.length >= 12) {
        access.name = ''
    }
    if(!datos.attack < 1 || !datos.attack > 200){
        access.attack = 'The ready attack 👌'
    }
    if(!datos.defense < 1|| !datos.defense > 250){
        access.defense = 'The ready defense 👌'
    }
    if(!datos.speed < 1 || !datos.speed > 200){
        access.speed = 'The ready speed 👌'
    }
    if (!datos.height < 1 || !datos.height > 100 ) {
        access.height = 'The ready height 👌'
    }
    if (!datos.weight < 1 || !datos.weight > 100) {
        access.weight = 'The ready weight 👌'
    }
    if(!datos.life < 1 || !datos.life > 100){
        access.life = 'The ready life👌'
    }
    if(!typeof datos.types === Number){
        access.types = "The ready type 👌"
    }
    return access
}
export default successfulvalidation
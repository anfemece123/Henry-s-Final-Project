export default  function validate (values){
    let errors= {}
    let RegExpressionText = /^[a-zA-Z\s]*$/;  
    let RegExpressionNum= /^[0-9,$]*$/
    let RegExpressionUrl= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    //title

    if(!values.title){
        errors.title= 'Por favor ingresa un title'
    }
    if(!RegExpressionText.test(values.name)){
        errors.title = 'No se permiten números ni caracteres especiales'
    }

    //category

    if(!values.category){
        errors.category= 'Por favor ingresa una category'
    }
    if(!RegExpressionText.test(values.category)){
        errors.category = 'No se permiten números ni caracteres especiales'
    }

    //color
    if(!values.color){
        errors.color= 'Por favor ingresa un color'
    }
    if(!RegExpressionText.test(values.color)){
        errors.color = 'No se permiten números ni caracteres especiales'
    }

    //season

    if(!values.season){
        errors.season= 'Por favor ingresa un season'
    }
    if(!RegExpressionNum.test(values.season)){
        errors.season = 'Solo se permiten numeros'
    }

    //price

    if(!values.price){
        errors.price= 'Por favor ingresa un price'
    }
    if(!RegExpressionNum.test(values.price)){
        errors.price = 'Solo se permiten numeros'
    }

     //size

     if(!values.size){
        errors.size= 'Por favor ingresa un size'
    }
    if(!RegExpressionText.test(values.size)){
        errors.size = 'No se permiten números ni caracteres especiales'
    }

    //gender

    if(!values.gender){
        errors.gender= 'Por favor ingresa un gender'
    }
    if(!RegExpressionText.test(values.gender)){
        errors.gender = 'No se permiten números ni caracteres especiales'
    }

    //stock
    if(!values.stock){
        errors.stock= 'Por favor ingresa un stock'
    }
    if(!RegExpressionNum.test(values.stock)){
        errors.stock = 'Solo se permiten numeros'
    }

    //image
    
    if(!values.image){
        errors.image= 'Por favor ingresa un image'
    }

    if(!RegExpressionUrl.test(values.image)){
        errors.image = 'Url incorrecto'
    }

    



   
    return errors

}
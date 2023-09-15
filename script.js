let btn = document.getElementById('btn')
btn.addEventListener('click',function(){

    try {
        let value = document.getElementById('inputValue').value
        if(value=='')throw 'age connot be blank!!'
        if(isNaN(value)) throw 'age should be a number'
        if(value>80)throw 'age should be less than 80'
        if(value<18)throw 'age should be greater than 18'
        console.log(value)
    } catch (error) {
        alert(error)
    }
    finally{
        console.log('No matter what it is')
    }

})
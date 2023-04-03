const btnGioca = document.getElementById('gioca')
const selectDifficolta = document.getElementById('difficolta')
const htmlMain = document.querySelector('main')
const r = document.querySelector(':root')



btnGioca.addEventListener('click', function(){

    campoMinato();
})

function campoMinato(){

    let valoreDifficolta = parseInt(selectDifficolta.value);

    myFunction_set(valoreDifficolta);
    

    htmlMain.innerHTML = '';


    let divGriglia = document.createElement('div');
    divGriglia.classList.add('griglia');
    htmlMain.append(divGriglia);


   

    for(let i= 1; i<=valoreDifficolta; i++){

        let divCella= document.createElement('div');
        divCella.classList.add('item');
        divCella.innerText = i;

        document.querySelector('.griglia').append(divCella);

        divCella.addEventListener('click', function(){

            console.log(this.innerText)
    
            this.classList.add('clicked')
           
        })
    }

    
}

function myFunction_set(x) {

    x = Math.sqrt(x);
    r.style.setProperty('--numCelle', x);
}


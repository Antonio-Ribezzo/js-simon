/*
CONSEGNA:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//Identifico con una variabile il button "Play"
const btnPlay = document.querySelector('#btnPlay')
//Identifico con una variabile il button "Reload"
const btnReload = document.querySelector('#btnReload')

//Associo un evento al click del button "Play"
btnPlay.addEventListener('click', function(){
    //faccio scomparire il button "Play"
    btnPlay.classList.add('d-none')
    //faccio comparire il button "Reload"
    btnReload.classList.remove('d-none')
    //faccio comparire il titolo
    document.querySelector('#title-1').classList.remove('d-none')
    //faccio comparire il div contenitore
    document.querySelector('#numeri').classList.remove('d-none')

    //Identifico con una variabile il container principale
    const containerMain = document.querySelector('#containerMain')
    //Identifico con una variabile l'elemento del DOM nel quale inserire i numeri
    const divNumeri = document.querySelector('#numeri')
    //Salvo in una variabile il risultato della funzione randomNumbers
    const array = randomNumbers(1,30)
    console.log(array)
    //stampo i numeri random sulla pagina
    for(let i = 0; i<=array.length-1; i++){
    divNumeri.innerHTML+=`
        <h2 class="rounded-circle bg-white p-4 mx-2">${array[i]}</h2>
    `
    }

    //richiamo una funzione che cancella il contenuto della pagina dopo 3 secondi
    setTimeout(function(){erase()}, 3000)

    //dopo 4 secondi parte una funzione che mi fa apparire il prompt
    setTimeout(function(){
        const firstNum = parseInt(prompt('inserisci il primo numero che ricordi'))
        const secondNum = parseInt(prompt('inserisci il secondo numero che ricordi'))
        const thirdNum = parseInt(prompt('inserisci il terzo numero che ricordi'))
        const fourthNum = parseInt(prompt('inserisci il quarto numero che ricordi'))
        const fifthNum = parseInt(prompt('inserisci il quinto numero che ricordi'))

        let arrayPrompt = []
        //inserisco in un array i numeri digitati dall'utente
        arrayPrompt.push(firstNum,secondNum,thirdNum,fourthNum,fifthNum)
        
        //contatore: con il ciclo stampo solo i numeri contenuti nell'array di numeri casuali creato all'inizio
        let counter = []

        for(let i = 0; i<=4; i++){
            if(arrayPrompt.includes(array[i])){
                containerMain.innerHTML+=`
                    <h2 class="rounded-circle bg-success text-white p-4 mx-2">${array[i]}</h2>
                `
                console.log(array[i])
                counter.push(1)
            }else{
                continue
            }
        }

        //faccio comparire il titolo-2 contenitore
        document.querySelector('#title-2').classList.remove('d-none')

        //Conteggio numeri indovinati
        containerMain.innerHTML += `<h3 class="text-uppercase mt-2">totale numeri indovinati: <span class="rounded-circle bg-success text-white p-3 mx-2">${counter.length}</span></h3>`

        //faccio comparire il button "Reload"
        containerMain.innerHTML += `<button id="btnReload2" class="btn btn-danger mt-4">Reload</button>`
        const btnReload2 = document.querySelector('#btnReload2')
        btnReload2.addEventListener('click', function(){
            //reload page
            window.location.reload()
        })
    },4000)
})

//Associo un evento al click del button "Reload"
btnReload.addEventListener('click', function(){
    //reload page
    window.location.reload()
})

// FUNCTIONS
//Genero una funziona che genera un array di 5 numeri casuali e unici
function randomNumbers(min, max){
    let array = []
    let i = 0
    while(i<=4){
        let num = Math.floor(Math.random() * max) + min;
        if(!array.includes(num)){
            array.push(num)
        }
        else{
            continue
        }
        i++
    }
    return array
}


//Genero una funzione che rende invisibili alcuni elementi del dom
function erase(){
    //faccio scomparire il button "Reload"
    btnReload.classList.add('d-none')
    //faccio scomparire il titolo
    document.querySelector('#title-1').classList.add('d-none')
    //faccio scomparire il div contenitore
    document.querySelector('#numeri').classList.add('d-none')
}

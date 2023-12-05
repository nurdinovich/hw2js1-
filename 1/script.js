const title = document.getElementById('content')
const input = document.getElementById('input')


const aCountry = [
{
    Country:'Kyrgstan',
    number: '+996',
    Flag:'https://www.advantour.com/img/kyrgyzstan/symbolics/kyrgyzstan-flag_sm.jpg' 
},
{
    Country:'Uzbekistan',
    number: '+998',
    Flag:'https://masterflag.ru/img/info-flagi/world/uzbek.gif' 
},
{
    Country:'Таджикистан',
    number: '+992',
    Flag:'https://www.calend.ru/img/content/i3/3593.jpg'
},
{
    Country:'Турция',
    number: '+90',
    Flag:'https://masterflag.ru/img/info-flagi/world/turkey_flag.gif'
},
{
    Country:'Панама',
    number: '+507',
    Flag:'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_panama_new.jpg' 
},
{
    Country:'Польша',
    number: '+48',
    Flag:'https://img.freepik.com/premium-photo/poland-country-flag-on-wavy-silk-fabric-background-panorama-illustration_532963-1213.jpg'   
},
{
    Country:'Перу',
    number: '+51',
    Flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1200px-Flag_of_Peru_%28state%29.svg.png' 
},
{
    Country:'Россия',
    number: '+7',
    Flag:'https://www.advantour.com/russia/images/symbolics/russia-flag.jpg' 
},
{
    Country:'Сан-Марино',
    number: '+378',
    Flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_San_Marino_%28pre_2011%29.svg/200px-Flag_of_San_Marino_%28pre_2011%29.svg.png' 
},
{
    Country:'Саудовская Аравия',
    number: '+966',
    Flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_San_Marino_%28pre_2011%29.svg/200px-Flag_of_San_Marino_%28pre_2011%29.svg.png' 
},

]
input.addEventListener('input', (e) =>{
    console.log(e.target.value);
    const value = e.target.value
    const searchCountry = []
    for (let ii = 0; ii < aCountry.length; ii++) {
        const element = aCountry[ii];
        if (value === element.number) {
            searchCountry.push(element)
        }
        
    }
    for (let i = 0; i < searchCountry.length; i++) {
        const element = searchCountry[i];
        title.innerHTML += `<div class="blok">
                        <img src="${element.Flag}" alt="">
                        <h1>${element.Country}</h1>
                        <h2>${element.number}</h2>
                        </div>`
    }
})

    



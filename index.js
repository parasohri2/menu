function card(img, name, price) {
    let a = document.createElement('div')
    a.id = "ff";
    //a.appendChild(`${this.image}`)
    a.innerHTML = `<img src="${img}"> <div><h3>item name is ${name} and price is ${price}</h3></div>`
    let bod = document.querySelector('.content')
    bod.appendChild(a);
    console.log("edf");
}
let d = new card('site/pavbhaji.jpg', 'pavbhaji', '100')
let e = new card('site/rajmachawal.jpg', 'rajmachawal', 'full- 60 , half :40')
let f = new card('site/kadhi-chawal-1.webp', 'kadhi chawal', 'full- 60 , half :40')
let g = new card('site/friedmomo.webp', 'friedmomo', 'half:45 full: 90')
let h = new card('site/steammomo.webp', 'steam momo', 'half:40 full: 80')
let i = new card('site/bananashake.webp', 'banana shake', '50 ')
let j = new card('site/chocoshake.webp', 'chocolateshake', '70')
let k=new card('site/oreoshake.webp','oreo shake','60')
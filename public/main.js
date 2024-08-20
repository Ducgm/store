const product = [
    {
        id: 0,
        Image: "./assets/assets/pro/cat.jpg",
        title: " Catrang",
        price: 240,

    },
    {
        id: 1,
        Image: "./assets/assets/pro/devu.jpg",
        title: "Minino",
        price: 500,

    },
    {
        id: 2,
        Image: "./assets/assets/pro/Kit.jpg",
        title: " Wiskat",
        price: 100000,

    },
    {
        id: 3,
        Image: "./assets/assets/pro/OIP.jpg",
        title: "Royal Canin",
        price: 180,

    },
    {
        id: 4,
        Image: "./assets/assets/pro/CA.jpg",
        title: "Nature cat",
        price: 120,

    },

    {
        id: 5,
        Image: "./assets/assets/pro/1243.jpg",
        title: "Nutrience",
        price: 120,

    },
    {
        id: 6,
        Image: "./assets/assets/pro/flex.jpg",
        title: "Flexcat",
        price: 120,

    },
    {
        id: 7,
        Image: "./assets/assets/pro/reflex.jpg",
        title: "Reflex ",
        price: 120,

    },

];

const categories = [...new Set(product.map((item) => { return item }))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { Image, title, price } = item;

    return (
        `<div class='box'>

    <div class='img-box'>
    <img class='images' src=${Image}></img>
    </div>

    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>` + "<button  onclick='MoreInfo(" + (i++) + ")'>More Info </button>" +
        `</div> </div>`
    )


}).join('')


var cart = [];

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function displaycart(a) {
    let j = 0; total = 0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("count2").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$ " + 0 + " .00";
    if (cart.length == 0) {
        document.getElementById('cart-item').innerHTML = "your cart is empty";

    } else {
        document.getElementById('cart-item').innerHTML = cart.map((item) => {
            var { Image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + " .00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${Image}>
                </div>
                
                <p style='font-size:12px;'>${title}</p>
                <h2  style='font-size:15px;' >$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            )

        }).join('')
    }
}



const side = document.getElementById("side");
const mcart = document.getElementById("mobile");
const mycard = document.getElementById("root");
const close = document.getElementById("close");
if (mcart) {

    mcart.addEventListener('click', () => {
        side.style.display = 'block';
        side.style.width = '100%';
        mycard.style.display = 'none'

        close.style.display = 'block'
        mcart.style.display = 'none'


    })

}

if (close) {

    close.addEventListener('click', () => {
        side.style.display = 'none';

        mycard.style.display = 'block'
        mcart.style.display = 'block'
        close.style.display = 'none'
    })

}

const product = [
    {
        id: 0,
        Image: 'img/product1/1.jpg',
        title: 'NIKKE',
        price: 90,
        sizes: [38, 39, 40, 41, 42],
    },

    {
        id: 1,
        Image: 'img/product2/1.jpg',
        title: 'NIKKE',
        price: 90,
        sizes: [38, 39, 40, 41, 42],
    },

    {
        id: 2,
        Image: 'img/product3/1.jpg',
        title: 'NIKKE',
        price: 100,
        sizes: [38, 39, 40, 41, 42],
    },

    {
        id: 3,
        Image: 'img/product4/1.jpg',
        title: 'NIKKE',
        price: 90,
        sizes: [38, 39, 40, 41, 42],
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {id, Image, title, price, sizes} = item;
    return(
        `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${Image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <div class="rata">
        ${sizes.map((size) => `
          <div class='btn'>
            <button onclick='addtocart(${id}, "${size}")'>${size}</button>
          </div>
        `)
        .join('')}
        </div>
      </div>
    </div>`
  );
}).join('');

const cart =[];

function addtocart(a, sizes) {
    const { id, Image, title, price } = categories[a];
    cart.push({ id, Image, title, price, sizes });
    displaycart();
  }

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let total=0;
    const cartContainer = document.getElementById('cartItem');
    const cartCount = document.getElementById('count');
    const cartTotal = document.getElementById('total');
    if(cart.length==0){
    cartContainer.innerHTML = "Your cart is empty";
    cartTotal.innerHTML = "$ 0.00";
    }
    else{
        cartContainer.innerHTML = cart.map((item, index) => {
            const { Image, title, price, sizes } = item;
            total += price;
            cartTotal.innerHTML = `$ ${total.toFixed(2)}`;
            return (
                `<div class='cart-item'>
                  <div class='row-img'>
                    <img class='rowing' src=${Image}>
                  </div>
                  <p style='font-size: 12px;'>${title}</p>
                  <p style='font-size: 12px;'>Size: ${sizes}</p>
                  <h2 style='font-size: 15px;'>$ ${price.toFixed(2)}</h2>
                  <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
              );
            }).join('');
          }
        
          cartCount.innerHTML = cart.length;
        }
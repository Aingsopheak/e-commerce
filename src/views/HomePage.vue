<template>
<div class="home">
<div class="homeCover">
  <div class="cover-info">
    <button>Order Now</button>
  </div>

  <img src="https://s3-alpha.figma.com/hub/file/2367804072/08b1423b-eff2-43ac-b939-e27a3ef2bea8-cover.png" alt="" style="width: 100%;height: 100%;">
</div>

<div class="product-section">
  <div class="product-title-container">
    <h1>Products</h1>
  </div>

  <div class="product-display-container">

    <div class="product-cell">
      <img src="./../assets/img/71T5NVOgbpL._AC_UF1000,1000_QL80_.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">iPhone 14 Pro Max</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$1000.00</p>
          </div>
      </div>
    </div>
    
    <div class="product-cell">
      <img src="./../assets/img/5.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name"> iPhone 13</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$2500.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src="./../assets/img/4.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">samsung galaxy s22</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$1200.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src="./../assets/img/2.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">Apple iPad Pro 11</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$1100.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src="./../assets/img/1.webp" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">Galaxy Tab S8 Ultra</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$900.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src=".\..\assets\img\6512622_sd.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">Samsung Galaxy Z Fold4</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$1800.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src=".\..\assets\img\Untitled.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">iPad Pro 12.9</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$1300.00</p>
          </div>
      </div>
    </div>

    <div class="product-cell">
      <img src=".\..\assets\img\ipad-pro-11-0-2021-1626759914.jpg" alt="" style="width: 80%;height: 70%;">
      <div class="product-info">
          <p id="product-name">iPad pro 3</p>
          <div class="price-container">
            <p>Price</p>
            <p class="product-price">$600.00</p>
          </div>
      </div>
    </div>
  
  </div>
</div>
</div>

<div class="footer">
<div>
  <div class="logo">BRAND</div>

  <div class="category-container">
    <router-link class="category" to="/">Home</router-link>
        <router-link class="category" to="/women">Apple</router-link>
        <router-link class="category" to="/men">Samsung</router-link>
        <router-link class="category" to="/about">About</router-link>
  </div>

  <div class="creditCard-container">
    <img src="./../assets/img/visaIcon.svg" alt="">
    <img src="./../assets/img/mastercard.svg" alt="">
  </div>

</div>

<div>
  <p>Stay In Touch! Join our Newsletter.</p>
  <div class="relative">
    <input type="text" class="w-[460px] h-[45px] rounded-full text-stone-900 pl-[20px]" placeholder="Email" >
    <button class="absolute h-[45px] rounded-full w-[100px] bg-gray-400 right-0">Subscribe</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
    font-family: 'Inter', sans-serif;
    width: 100%;
    display: block;
}
  
.homeCover {
    position: relative;
    display: flex;

    width: 100%;
    height: 100vh;

    background-image: linear-gradient(to top, #3185C9 , #319EC9);
    color: white;
}

.homeCover img {
    position: absolute;
    z-index: 0;
    width: 70%;
    right: 0;

}

.cover-info {
    z-index: 1;
    margin-top: 15%;
    margin-left: 127px;
    width: 45%;
}

.cover-info h1 {
    font-size: xxx-large;
}

.cover-info p {
    margin-top: 30px;
    font-size: large;
}

.cover-info button {
    background-color: #b2da5c;
    margin-top: 50px;
    width: 150px;
    height: 50px;
    color: white;
    font-size: large;

    border: none;
    border-radius: 7px;
}

/* Product */

.product-section {
    display: block;
    width: 100%;
}
.logo {
  display: flex;
  color: #f8f8f8;
  font-size: 30px;
  font-family: "Hjet", sans-serif;
  text-decoration: none;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0em 0.6em;
  font-size: 3em;
  letter-spacing: 0.1em;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently*/
}

.product-title-container {
    display: flex;

    
    font-size: xxx-large;
    font-weight: 600;

    width: 100%;
    height: 136px;
    
    text-align: center;


}

.product-title-container h1 {
    margin-top: 30px;
    margin: auto;
}

.product-display-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: auto;
    width: 1500px;
    height: 700px;
    padding-left: 50px;
    padding-right: 50px;

    justify-content: space-between;
}

.product-cell {
    width: 320px;
    height: 309px;
    background-color: #D9D9D9;
    border-radius: 10px;
}

.product-cell img {
    margin-top: 10px;
}

.product-info {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
}
.product-info #product-name {
    text-align: center;
    font-weight: 500;
}

.price-container {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
}

/* Footer */
.footer {
    /* position: relative; */
    background-color: #08225b;
    height: 150px;
    font-family: 'Inter', sans-serif;
    color: white;
    width: 100%;

    padding: 30px;

    display: flex;
    justify-content: space-between;
}

.logo-footer {
    display: inline-block;
    margin-top: 2%;
/* margin-left: 20px; */
}

.category-container {
    display: inline-block;
    margin: auto;
}


.category {
    color: white;
    display: inline-block;
    margin-left: 20px;
    font-weight: 300;
}

.creditCard-container {
    margin-top: 15px;
}

.creditCard-container img {
    display: inline-block;
    margin-right: 20px;

}
@media (min-width: 1024px) {
    .home {
        min-height: 100vh;
        /* display: flex; */
        align-items: center;
    }
}
</style>

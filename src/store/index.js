import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Apple iPhone 14 Pro Max",
        src: require("@/assets/img/women/1.jpeg"),
        price: 1134.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Deep Purple",
        brand: "Apple",
        gender: "women",
        id: 1,
      },

      {
        title: "Apple iPhone SE",
        src: require("@/assets/img/women/2.jpeg"),
        price: 1379.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Red",
        brand: "Apple",
        gender: "women",
        id: 2,
      },
      {
        title: "Apple iPhone 12",
        src: require("@/assets/img/women/3.jpeg"),
        price: 859.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Purple",
        brand: "Apple",
        gender: "women",
        id: 3,
      },
      {
        title: "Apple iPhone XR",
        src: require("@/assets/img/women/4.jpeg"),
        price: 224.39,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Black",
        brand: "Apple",
        gender: "women",
        id: 4,
      },
      {
        title: "Apple iPhone 11 Pro",
        src: require("@/assets/img/women/5.jpeg"),
        price: 399.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Space Gray",
        brand: "Apple",
        gender: "women",
        id: 5,
      },
      {
        title: "Apple iPhone 14",
        src: require("@/assets/img/women/6.jpeg"),
        price: 849.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Blue",
        brand: "Apple",
        gender: "women",
        id: 6,
      },
      {
        title: "Apple iPhone 12",
        src: require("@/assets/img/women/7.jpeg"),
        price: 365.73,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Blue",
        brand: "Apple",
        gender: "women",
        id: 7,
      },
      {
        title: "Apple iPhone 14 Pro Max",
        src: require("@/assets/img/women/8.jpeg"),
        price: 579.99,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Space Black",
        brand: "Apple",
        gender: "women",
        id: 8,
      },
      {
        title: "Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/9.jpeg"),
        price: 400.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Blue",
        brand: "Apple",
        gender: "women",
        id: 9,
      },

      {
        title: "Apple iPhone 13, 128GB, Midnight - Unlocked (Renewed)",
        src: require("@/assets/img/women/10.jpeg"),
        price: 579.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Midnight",
        brand: "Apple",
        gender: "women",
        id: 10,
      },
      {
        title: "Apple iPhone 12 Pro, 128GB, Pacific Blue - Fully Unlocked (Renewed)",
        src: require("@/assets/img/women/11.jpeg"),
        price: 525.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Pacific Blue",
        brand: "Apple",
        gender: "women",
        id: 11,
      },
      {
        title: "iPhone 13 Pro Max, 128GB, Graphite - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/12.jpeg"),
        price: 920.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Graphite",
        brand: "Apple",
        gender: "women",
        id: 12,
      },
      {
        title: "Apple iPhone 12 Pro Max 5G, US Version, 128GB, Graphite - Unlocked (Renewed)",
        src: require("@/assets/img/women/13.jpeg"),
        price: 675.99,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Graphite",
        brand: "Apple",
        gender: "women",
        id: 13,
      },
      {
        title: "Apple iPhone 11 Pro Max, 256GB, Space Gray - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/14.jpeg"),
        price: 580.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Space Gray",
        brand: "Apple",
        gender: "women",
        id: 14,
      },
      {
        title: "Tbest iPhone 11 Unlocked U Landvo Ip12 Pro 6.26In Screen Face Recognition Dual Card Dual Standby Smart Phone 1 8Gb Black (Gold)",
        src: require("@/assets/img/women/15.jpeg"),
        price: 93.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Gold",
        brand: "Apple",
        gender: "women",
        id: 15,
      },
      {
        title: "Apple iPhone 11, 64GB, White - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/16.jpeg"),
        price: 379.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "White",
        brand: "Apple",
        gender: "women",
        id: 16,
      },
      {
        title: "iPhone 13 Pro, 128GB, Graphite - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/17.jpeg"),
        price: 824.99,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Graphite",
        brand: "Apple",
        gender: "women",
        id: 17,
      },
      {
        title: "iPhone 13, 128GB, Pink - Unlocked (Renewed Premium)",
        src: require("@/assets/img/women/18.jpeg"),
        price: 668.00,
        description:
          " The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Pink",
        brand: "Apple",
        gender: "women",
        id: 18,
      },
    ],
    men: [
      {
        title: "SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender",
        src: require("@/assets/img/men/1.jpeg"),
        price: 999.99,
        description:
          "Available at a lower price from other sellers that may not offer free Prime shipping.",
        type: "Phone",
        color: "Lavender",
        brand: "SAMSUNG",
        gender: "men",
        id: 19,
      },
      {
        title: "SAMSUNG Galaxy A14 4G LTE (128GB + 4GB) Unlocked Worldwide (Only T-Mobile/Mint/Metro USA Market) 6.6",
        src: require("@/assets/img/men/2.jpeg"),
        price: 146.99,
        description:
          "Save up to $401.00 on your new device with Amazon.com Gift Card credit when you trade in your old device",
        type: "Phone",
        color: "Silver (SM-A145M/DS)",
        brand: "SAMSUNG",
        gender: "men",
        id: 20,
      },
      {
        title: "Samsung Galaxy S10e, 128GB, Prism Black - Unlocked (Renewed)",
        src: require("@/assets/img/men/3.jpeg"),
        price: 130.00,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Prism Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 21,
      },
      {
        title: "Samsung Galaxy S20 5G, 128GB, Cosmic Gray - Verizon (Renewed)",
        src: require("@/assets/img/men/4.jpeg"),
        price: 193.00,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Cosmic Gray",
        brand: "SAMSUNG",
        gender: "men",
        id: 22,
      },
      {
        title: "SAMSUNG Galaxy S23 Cell Phone, Factory Unlocked Android Smartphone, 128GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Phantom Black",
        src: require("@/assets/img/men/5.jpeg"),
        price: 699.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Phantom Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 23,
      },
      {
        title: "SAMSUNG Galaxy Buds Pro 2 [2022] (SM-R510) - (Gray)",
        src: require("@/assets/img/men/6.jpeg"),
        price: 113.00,
        description:
          "ACTIVE NOISE CANCELLATION: Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
        type: "earphone",
        color: "Gray",
        brand: "SAMSUNG",
        gender: "men",
        id: 24,
      },
      {
        title: "SAMSUNG Galaxy Tab A7 Lite 8.7",
        src: require("@/assets/img/men/7.jpeg"),
        price: 119.99,
        description:
          "LIGHT AND PORTABLE: With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids",
        type: "ipad",
        color: "white",
        brand: "SAMSUNG",
        gender: "men",
        id: 25,
      },
      {
        title: "Samsung Galaxy S20 FE 5G, 128GB, Cloud Navy - Unlocked (Renewed)",
        src: require("@/assets/img/men/8.jpeg"),
        price: 197.00,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Cloud Navy",
        brand: "SAMSUNG",
        gender: "men",
        id: 26,
      },
      {
        title: "Samsung Galaxy S21 5G, US Version, 128GB, Phantom White - Unlocked (Renewed)",
        src: require("@/assets/img/men/9.jpeg"),
        price: 248.00,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "PHANTOM WHITE",
        brand: "SAMSUNG",
        gender: "men",
        id: 27,
      },
      {
        title: "SAMSUNG Galaxy S21 Ultra G998U 5G ",
        src: require("@/assets/img/men/10.jpeg"),
        price: 389.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "Phantom Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 28,
      },
      {
        title: "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed)",
        src: require("@/assets/img/men/11.jpeg"),
        price: 279.00,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "Phone",
        color: "PHANTOM GRAY",
        brand: "SAMSUNG",
        gender: "men",
        id: 29,
      },
      {
        title: "Samsung Galaxy A13 5G Cell Phone, AT&T GSM Unlocked Android Smartphone, 64GB",
        src: require("@/assets/img/men/12.jpeg"),
        price: 119.99,
        description:
          "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        type: "phone",
        color: "Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 30,
      },
      {
        title: "OnePlus 11 5G | 16GB RAM+256GB",
        src: require("@/assets/img/men/13.jpeg"),
        price: 799.99,
        description:
          "New Design: The OnePlus 11 comes in two color ways - Green & Black. The circular camera module is bold and elegant, designed to stand out with its chrome accents and curved glass.",
        type: "Phone",
        color: "Titan Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 31,
      },
      {
        title: "Samsung Galaxy S21+ 5G, US Version, 128GB, Phantom Violet - Unlocked (Renewed)",
        src: require("@/assets/img/men/14.jpeg"),
        price: 274.00,
        description:
          "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
        type: "Phone",
        color: "Phantom Violet",
        brand: "SAMSUNG",
        gender: "men",
        id: 32,
      },
      {
        title: "SAMSUNG Galaxy S23 Ultra Cell Phone",
        src: require("@/assets/img/men/15.jpeg"),
        price: 999.99,
        description:
          "CAPTURE THE NIGHT IN LOW LIGHT: Whether you’re headed to a concert or romantic night out, there’s no such thing as bad lighting with Night Mode; Galaxy S23 Ultra lets you capture epic content in any setting with stunning Nightography",
        type: "Phone",
        color: "Phantom Black",
        brand: "SAMSUNG",
        gender: "men",
        id: 33,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
},
  },
  modules: {},
});

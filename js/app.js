const menu = [
  {
    id: 1,
    title: "Pide",
    category: "Food",
    price: 8.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/pide1.jpg.webp",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Lahmacun",
    category: "Food",
    price: 6.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/featured4-1200x800.jpg.webp",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 12,
    title: "Tea",
    category: "Drink",
    price: 1.99 + "$",
    img:
      "https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-3.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 13,
    title: "Ayran ( Buttermilk)",
    category: "Drink",
    price: 2.99 + "$",
    img:
      "https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-4.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 14,
    title: "Rakı",
    category: "Drink",
    price: 5.99 + "$",
    img:
      "https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-7.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 3,
    title: "Borek",
    category: "Food",
    price: 4.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/borek.jpg.webp",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Gozleme",
    category: "Food",
    price: 5.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/gozleme.jpg.webp",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Islak Burger",
    category: "Food",
    price: 10.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/featured1-1200x800.jpg.webp",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Midye Dolma",
    category: "Food",
    price: 2.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/midyedolmas2.jpg.webp",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Kunefe",
    category: "Desserts",
    price: 10.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/kunefe.jpg.webp",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Baklava",
    category: "Desserts",
    price: 11.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/baklava.jpg.webp",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Halka Tatlisi",
    category: "Desserts",
    price: 3.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/halkatatlisi1.jpg.webp",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Turkish Delight",
    category: "Desserts",
    price: 13.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/turkishdelight2.jpg.webp",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 11,
    title: "Salep",
    category: "Drink",
    price: 3.99 + "$",
    img:
      "https://www.willflyforfood.net/wp-content/uploads/2016/02/salep.jpg.webp",
    desc: `Red bean paste dessert, serving with honey.`,
  },

];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();

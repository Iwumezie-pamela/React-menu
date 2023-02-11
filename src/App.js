import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [getMenu, setGetMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  
  const menuElements = getMenu.map((menu) => {
    return <Menu key={menu.id} {...menu} />;
  });

  const filterItems = (category) => {
    if (category === "all") {
      setGetMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setGetMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />

        <div className="section-center">{menuElements}</div>
      </section>
    </main>
  );
}

export default App;

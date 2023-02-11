import React from "react";

const Menu = (props) => {
  const { id, title, price, img, desc } = props;

  return (
    <article className="menu-item"key={id}>
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4 className="title">{title}</h4>
          <h4 className="price"> ${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;

// {
//   id: 1,
//   title: 'buttermilk pancakes',
//   category: 'breakfast',
//   price: 15.99,
//   img: './images/item-1.jpeg',
//   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
// },

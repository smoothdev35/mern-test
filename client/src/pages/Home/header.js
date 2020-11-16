import React, { useState } from "react";

export default function Header() {
  const items = [
    {
      id: '1',
      value: "Home",
      target:'/'
    },
    {
      id: '2',
      value: "Sectors",
      target:'#'
    },
    {
      id: '3',
      value: "Screener",
      target:'#'
    },
    {
      id: '4',
      value: "Login",
      target:'/Login'
    }
  ];

  return (
    <header>
      <div className="logo-small"></div>
      <nav>
        <ul>
          <FillMenu items={items} />
        </ul>
      </nav>
    </header>
  );

  function FillMenu(props) {
    const listItems = props.items.map((item, index) => {
      return (
        <li key={item.id}>
          <a href={item.target}>{item.value}</a>
        </li>
      );
    });
    return (listItems)
  }
}

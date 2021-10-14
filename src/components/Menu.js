import { Beverages, chinease, snacks } from './Data';

import './menu.css';
function Menu() {
  return (
    <>
      <section className="menu-hero flex justify-center items-center text-white font-bold text-4xl mb-5">
        Menu
      </section>
      <section className="container1">
        <div className="flex1">
          <div>
            <h4>Chinease</h4>
            <ul className="menu-list">
              {chinease.map((elm, i) => {
                return (
                  <li className="menu-sub-list">
                    <h5>{elm.name}</h5>
                    <p>{elm.price}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ml-20">
            <h4>Snacks</h4>
            <ul className="menu-list">
              {snacks.map((elm, i) => {
                return (
                  <li className="menu-sub-list">
                    <h5>{elm.name}</h5>
                    <p>{elm.price}</p>
                  </li>
                );
              })}
            </ul>
            <h4>Beverages</h4>
            <ul className="menu-list">
              {Beverages.map((elm, i) => {
                return (
                  <li className="menu-sub-list">
                    <h5>{elm.name}</h5>
                    <p>{elm.price}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

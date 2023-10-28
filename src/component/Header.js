import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <ManageSearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <div className="span nav__itemLineOne">Hello Guest</div>
          <div className="span nav__itemLineTwo">Sign In</div>
        </div>

        <div className="nav__item">
          <div className="span nav__itemLineOne">Your</div>
          <div className="span nav__itemLineTwo">Shop</div>
        </div>

        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          <div className="span nav__itemLineTwo nav__basketCount">0</div>
        </div>
      </div>
    </div>
  );
}

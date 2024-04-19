import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Header from "./Header";
import filterMenuItems from "./filterMenuItems"
import MenuItemsList from './MenuItemsList';
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const siteWrapper = (
  <div className="site-wrapper">
      <Header></Header>
      <div className="main-section">
        <div className="container">
          <MenuItemsList menuItems={filterMenuItems("همه موارد")} categoryName="همه موارد"></MenuItemsList>
          <MenuItemsList menuItems={filterMenuItems("پیش غذا")} categoryName="پیش غذا"></MenuItemsList>
          <MenuItemsList menuItems={filterMenuItems("غذای اصلی")} categoryName="غذای اصلی"></MenuItemsList>
          <MenuItemsList menuItems={filterMenuItems("دسر")} categoryName="دسر"></MenuItemsList>
          <MenuItemsList menuItems={filterMenuItems("نوشیدنی گرم")} categoryName="نوشیدنی گرم"></MenuItemsList>
          <MenuItemsList menuItems={filterMenuItems("نوشیدنی سرد")} categoryName="نوشیدنی سرد"></MenuItemsList>
        </div>
      </div>
      <Footer></Footer>
  </div>
);

root.render(siteWrapper);
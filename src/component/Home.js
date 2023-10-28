import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              id="001"
              title='Dell Inspiron 14 5425 Ryzen 5 5625U 14" (1920 x 1200) TOUCHSCREEN'
              price="399"
              rating={5}
              img="https://i.ebayimg.com/images/g/~vAAAOSwNZ1i-q44/s-l500.jpg"
            />

            <Product
              id="002"
              title='Lenovo Legion 5 15.6" WQHD 165Hz Gaming Laptop R7-7735HS 16GB RAM 512GB RTX 4060'
              price="899"
              rating={4}
              img="https://i.ebayimg.com/images/g/kO4AAOSw8~xlPArk/s-l500.jpg"
            />
          </div>
          <div className="home__row">
            
          <Product
              id="003"
              title='OnePlus 10T 5G 128GB Moonstone Black T-Mobile Unlocked Smartphone - Brand New.'
              price="299"
              rating={4}
              img="https://i.ebayimg.com/images/g/RlQAAOSwhRhkuYfh/s-l1600.jpg"
            />
            
            <Product
              id="004"
              title='Samsung Galaxy S21 5G 128GB Gray Smartphone'
              price="265"
              rating={5}
              img="https://i.ebayimg.com/images/g/QTYAAOSw~DRhL8qO/s-l1600.jpg"
            />
            
            <Product
              id="005"
              title='Garmin Forerunner 945 GPS Sport Watch (Black)'
              price="299"
              rating={2}
              img="https://i.ebayimg.com/images/g/O2oAAOSwEaNlDboc/s-l1600.jpg"
            />
          </div>
          <div className="home__row">
            
          <Product
              id="006"
              title='AMD Ryzen 5 5600X 6-core 12-thread Desktop Processor'
              price="129"
              rating={3}
              img="https://i.ebayimg.com/images/g/h9UAAOSwpPNlLMxt/s-l500.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

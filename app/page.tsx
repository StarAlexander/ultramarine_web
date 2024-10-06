import { ProductCard } from "./productCard";
import styles from "./page.module.css";
import img from "../public/1.webp"
export default function Home() {
  const data = {
    price:891,
    oldPrice:2520,
    firm:"MIXIT",
    description:"Шампунь для волос и бальзам восковой",
    imgSrc:img,
    rating:4.8
  }
  return (
    <div className={styles["products-grid"]}>
      <ProductCard price={data.price} oldPrice={data.oldPrice} firm={data.firm}
      imgSrc={data.imgSrc} rating={data.rating} description={data.description}/>
      <ProductCard price={data.price} oldPrice={data.oldPrice} firm={data.firm}
      imgSrc={data.imgSrc} rating={data.rating} description={data.description}/>
      <ProductCard price={data.price} oldPrice={data.oldPrice} firm={data.firm}
      imgSrc={data.imgSrc} rating={data.rating} description={data.description}/>
      <ProductCard price={data.price} oldPrice={data.oldPrice} firm={data.firm}
      imgSrc={data.imgSrc} rating={data.rating} description={data.description}/>
      <ProductCard price={data.price} oldPrice={data.oldPrice} firm={data.firm}
      imgSrc={data.imgSrc} rating={data.rating} description={data.description}/>
    </div>
  );
}

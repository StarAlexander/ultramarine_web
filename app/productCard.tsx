import Image from "next/image"
import star from "../public/star.svg"
import cart from "../public/cart.svg"
import { StaticImageData } from "next/image"
import styles from  "./page.module.css"

type props = {
    price:number
    oldPrice?:number
    firm:string,
    imgSrc:StaticImageData,
    description:string
    rating:number
}

export const ProductCard = ({
    price,
    oldPrice,
    firm,
    imgSrc,
    description,
    rating
}: props) => {
    return (
        <div className={styles["product-card"]}>
            <div className={styles["pr-image-container"]}>
            <Image className={styles["product-image"]} src={imgSrc} width={500} height={500} alt="product img"/>
            </div>
            <div className={styles["desc-container"]}>
            <div className={styles["prices"]}>
                <p className={styles["actual-price"]}>{price}₽</p>
                <p className={styles["old-price"]}>{oldPrice}₽</p>
            </div>
            <div className={styles["firm-desc"]}>
                <p className={styles["firm"]}>{firm}</p>
                <p className={styles["desc"]}>{description}</p>
            </div>
            <div className={styles["rating"]}>
                <Image className={styles["star"]} src={star} width={5} height={5} alt="star"/>
                <p>{rating}</p>
            </div>
            </div>
            
            <button className={styles["submit-order"]}>
                <Image className={styles["cart"]} src={cart} width={15} height={15} alt="cart"/>
                Add to cart
            </button>
        </div>
    )
}
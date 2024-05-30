import MiniPricebox from '../FruitPrices/MiniPricebox/MiniPricebox'
import styles from './FeaturedProduct.module.scss'

export default () => {
    return (
        <div className={styles.container}>
            <MiniPricebox src='Product Image.png' title='Green Apple' price='$14.99' sale='$20.99' redSale/>
            <MiniPricebox src='Image.png' title='Fresh Indian Malta' price='$20.00' />
            <MiniPricebox src='Image (1).png' title='Chinese cabbage' price='$12.00' />
            <MiniPricebox src='Image (2).png' title='Green Lettuce' price='$9.00' />
            <MiniPricebox src='Image (3).png' title='Eggplant' price='$34.00' />
        </div>
        )
}
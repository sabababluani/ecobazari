import styles from './FruitPrices.module.scss'
import MiniPricebox from './MiniPricebox/MiniPricebox'

export default () => {
    return (
        <div className={styles.wrapper}>
            <MiniPricebox src='Product Image.png' title='Green Apple' price='$14.99' sale='$20.99' redSale/>
            <MiniPricebox src='Image.png' title='Fresh Indian Malta' price='$20.00' />
            <MiniPricebox src='Image (1).png' title='Chinese cabbage' price='$12.00' />
            <MiniPricebox src='Image (2).png' title='Green Lettuce' price='$9.00' />
            <MiniPricebox src='Image (3).png' title='Eggplant' price='$34.00' />
            <MiniPricebox src='Image (4).png' title='Big Potatoes' price='$20.00' />
            <MiniPricebox src='Image (5).png' title='Corn' price='$12.00' />
            <MiniPricebox src='Image (6).png' title='Fresh Cauliflower' price='$12.00' />
            <MiniPricebox src='Image (7).png' title='Green Capsicum' price='$9.00' sale='$20.99' redSale/>
            <MiniPricebox src='Image (8).png' title='Green Chili' price='$34.00' />
        </div>
    )
}
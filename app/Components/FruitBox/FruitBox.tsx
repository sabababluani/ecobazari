import Box from './Box/Box'
import styles from './FruitBox.module.scss'


export default () => {
    return (
        <div className={styles.wrapper}>
            <Box src='image 1.png' title='Fresh Fruit'/>
            <Box src='image 1 (1).png' title='Fresh Vegetables'/>
            <Box src='image 1 (2).png' title='Meat & Fish'/>
            <Box src='image 1 (3).png' title='Snacks'/>
            <Box src='image 1 (4).png' title='Beverages'/>
            <Box src='image 1 (5).png' title='Beauty & Health'/>
            <Box src='image 1 (6).png' title='Bread & Bakery'/>
            <Box src='image 1 (7).png' title='Baking Needs'/>
            <Box src='image 1 (8).png' title='Cooking'/>
            <Box src='image 1 (9).png' title='Diabetic Food'/>
            <Box src='image 1 (10).png' title='Dish Detergents'/>
            <Box src='image 1 (11).png' title='Oil'/>
        </div>
    )
}
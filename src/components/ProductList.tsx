import { Colors } from '@/src/constants/Colors';
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { Product } from '../types';

type ProductTypeProps = {
    product: Product;
};

const ProductListItem = ({ product }: ProductTypeProps) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    src={product.image || "https://via.placeholder.com/150"}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: "white",
        flex: 1,
        maxWidth: "50%",
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        marginVertical: 10,
    },
    price: {
        fontWeight: "bold",
        color: Colors.light.tint,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});
export default ProductListItem;

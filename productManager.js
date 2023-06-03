// Creación de la clase

class ProductManager {
    constructor() {
        this.products = [];
    }

// Método para agregar un producto al array "products"

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const productRequired = [title, description, price, thumbnail, code, stock];
        const allRequired = productRequired.every(items => items);

        if (!allRequired) {
            console.log("Todos los campos son obligatorios, por favor completar correctamente");
            return;
        }

        const productExist = this.products.some(product => product.code === code);

        if (productExist) {
            console.log("El código del producto agregado ya existe");
            return;
        }

        if (this.products === 0) {
            product.id = 1
        } else {
            product.id = this.products.length + 1
        }
 
        this.products.push(product);
    }

// Método para obtener los productos actuales en el array "products" 

    getProducts = () => {
        return this.products;
    }

// Método para obtener productos según su id generado en el array "products" 

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(product => product.id === idProduct);

        if (productIndex === -1) {
            console.log("Not found");
            return;
        }

        const productAdd = () => this.products.includes(idProduct);

        if(productAdd) {
            console.log(`Producto agregado correctamente con el ID: ${idProduct}`);
            return;
        }
    }

    
};

// Dejo por acá unos ejemplos para ejecutar el código por la terminal

const manejadorProductos = new ProductManager();

manejadorProductos.addProduct ('Remera Nike', 'Remera color negra', 1000, 'https://deportesliverpool.es/66183-large_default/nike-ca-ar5004-010-logo-grande-ne-bl-999.jpg', 'Nike01', 45 );

manejadorProductos.addProduct ('Remera Adidas', 'Remera color rojo', 1100, 'https://woker.vteximg.com.br/arquivos/ids/173456-1000-1000/6ED5954-000.jpg', 'Adidas01', 38 );

manejadorProductos.addProduct ('Remera Puma', 'Remera color gris', 850, 'https://f.fcdn.app/imgs/49e899/www.lacancha.uy/lcanuy/59f2/original/catalogo/586667_10_1/2000-2000/remera-puma-essentials-logo-tee-remera-puma-essentials-logo-tee.jpg', 'Puma01', 32 );

// En este caso puse un 'code' ya existente para demostrar que funciona la validación
manejadorProductos.addProduct ('Remera Pumba', 'Remera color gris claro', 950, 'https://f.fcdn.app/imgs/49e899/www.lacancha.uy/lcanuy/59f2/original/catalogo/586667_10_1/2000-2000/remera-puma-essentials-logo-tee-remera-puma-essentials-logo-tee.jpg', 'Puma01', 30 );

// En este caso omiti el 'thumbnail' para mostrar que la validación de los campos obligatorios funciona
manejadorProductos.addProduct ('Remera Puma', 'Remera color gris', 850, 'Puma01', 32 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);
manejadorProductos.getProductById(4);


console.log(manejadorProductos.getProducts());
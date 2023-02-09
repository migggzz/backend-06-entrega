import fs from 'fs';


export class ProductManager {
    constructor(filename) {
      this.filename=filename;
      this.products = [];
      this.idCounter = 1;
    }

    //regresa el array de productos
    getProducts() {
      return this.products;
    }

    readFile() {
      fs.readFile(this.filename, 'utf-8', (err, data) => {
        if (err) throw err;
        this.products = JSON.parse(data);
        console.log('sent to array')
      });
    }

    // funcion para generar id esto es otra manera de hacerlo, yo lo hice metiendo el contador en el constructor
    generateId() {
        counter = this,products.length;
        if (counter ==0) {
            return 1;
        } else {
            return (this.products[count-1].id)+1;
        }
    }
  // funcion para agregar un producto al array
    addProduct=  (title, description, price, thumbnail, code, stock) => {

     //validar que los datos no esten vacios antes de hacer push al array
      if(!title||!description||!price||!thumbnail||!code||!stock){
        console.log("Faltan datos para agregar el producto");
        return undefined;
      }

        //revisa que el codigo no exista en el array
      if (this.products.find(p => p.code === code)) {
        console.log("El producto ya existe, no se puede agregar");
        return undefined;
      }

      // si cumple con todo lo anterior, hacemos push al array
      this.products.push({
        id: this.idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock});
        
      this.idCounter++;
      fs.writeFileSync(this.filename, JSON.stringify(this.products, null, 2))
    }

    // funcion para buscar un producto por id
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log("Product not found.");
        return undefined;
      }
      return product;
    }
  }
 //abajo es el codigo para probar las funciones
  export  function pruebaDesafio(productManager){
  // const productManager = new ProductManager('products.json');
   productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
   productManager.addProduct("producto prueba1", "Este es un producto prueba1", 201, "Sin imagen1", "poiwer", 26);
   productManager.addProduct("producto prueba2", "Este es un producto prueba1", 201, "Sin imagen1", "456453", 26);
   productManager.addProduct("producto prueba3", "Este es un producto prueba1", 201, "Sin imagen1", "dfgsgh",44 );
  console.log(productManager.getProducts());
  // console.log(productManager.getProductById(1));
 }

 export default {ProductManager, pruebaDesafio};

//  const productManager = new ProductManager('products.json');
//  productManager.readFile();
//  console.log(productManager.getProducts());

//  pruebaDesafio();


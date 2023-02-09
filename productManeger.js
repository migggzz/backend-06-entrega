import fs from 'fs';


export default class ProductManager {
  constructor(path) {
    this.path = path;
    this.id = 0;
    this.products = [];
    this.readFile();
  }

  readFile() {
    try {
      this.products = JSON.parse(fs.readFileSync(this.path, 'utf8'));
      this.id = this.products.length;
    } catch (err) {
      console.error(err);
    }
  }

  writeFile() {
    fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf8');
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if(!title||!description||!price||!thumbnail||!code||!stock){
        console.log("Faltan datos para agregar el producto");
        return undefined;
      }

        //revisa que el codigo no exista en el array
      if (this.products.find(p => p.code === code)) {
        console.log("El producto ya existe, no se puede agregar");
        return undefined;
      }
    const product = {
      id: ++this.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(product);
    this.writeFile();

    return product;
  }

  getProduct(id) {
    return this.products.find(product => product.id === id);
  }

  getProducts(id) {
    return this.products;
  }

  updateProduct(id, product) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return;

    this.products[index] = { ...this.products[index], ...product };
    this.writeFile();

    return this.products[index];
  }

  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return;

    const deletedProduct = this.products.splice(index, 1);
    this.writeFile();

    return deletedProduct[0];
  }
}






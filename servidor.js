import express from 'express';
const app = express();
const PORT = 8080;
import ProductManager from './productManeger.js';
import pruebaDesafio from './pruebaDesafio.js';

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});



app.get('/products', (req, res) => {

    const productManager = new ProductManager('products.json');
    productManager.readFile();
    // pruebaDesafio(productManager);
    const {limit} = req.query;
    const productosArr = productManager.getProducts();
    if(limit){
        console.log(limit)
        let arr1 = []
        for (let i = 0; i < limit; i++) {
            arr1.push(productosArr[i])
            console.log({arr1})
        }
        res.send(arr1);
    }
    
     else res.send({...productosArr});

})



app.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`);
});
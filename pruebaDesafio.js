 //abajo es el codigo para probar las funciones
 export default function pruebaDesafio(productManager){

    productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
    productManager.addProduct("producto prueba1", "Este es un producto prueba1", 201, "Sin imagen1", "poiwer", 26);
    productManager.addProduct("producto prueba2", "Este es un producto prueba1", 201, "Sin imagen1", "456453", 26);
    productManager.addProduct("producto prueba3", "Este es un producto prueba1", 201, "Sin imagen1", "dfgsgh",44 );
   console.log(productManager.getProducts());
   // console.log(productManager.getProductById(1));
  }
 
 
  
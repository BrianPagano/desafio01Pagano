class ProductManager {

    constructor() {
        this.products = []
        this.id = 1
    }

    addProduct(title,description,price,thumbnail,code,stock) {
      const newProduct = {
        id: this.id++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      }

      //Valido que todos los campos son obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        return console.log("Todos los campos son obligatorios. Producto no agregado.")
      }

      //valido si ya existe el code
      const codeExist = this.products.find(product => product.code === code)
      if (codeExist) {
        return this.id-- & console.log (`El producto con code: ${code} ya existe, por favor seleccione otro`)}
      this.products.push(newProduct)
    }

    getProducts () {
       return this.products
    }

    getProductByID (id){
    const findID = this.products.find(product => product.id === id)
      if (findID) return findID
      console.log ('Not Found')
    }
}


const productManager = new ProductManager()
productManager.addProduct('producto prueba1', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
productManager.addProduct('producto prueba2', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
productManager.addProduct('producto prueba3', 'Este es un producto prueba', 200, 'sin imagen', 'abc1234', 25)
productManager.addProduct('producto prueba4', 'Este es un producto prueba', 200, 'sin imagen', 'abc1234', 25)

//obtener los productos agregados
console.log (productManager.getProducts())

//buscar por id
console.log (productManager.getProductByID(3))

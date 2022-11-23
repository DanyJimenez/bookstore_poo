function requiredParam (param){
    throw new Error(param + " es requerido")
}



class Book {
    #title
    #author
    #price 
    #stock 
    #id
    
    constructor({
        title,
        author,
        price = requiredParam("price"),
        stock = requiredParam("stock"),
        id
    }={}) {          //  ={} significa que el objeto puede estar vacío
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#stock = stock;
        this.#id = id;
    }
    getInfo() {
        let info = `Título: ${this.#title}, Autor: ${this.#author}, Precio: ${this.#price}, ID: ${this.#id},`

        if(this.#stock > 0){
            info += ` Existencias: ${this.#stock} `
        }else {
            info += ` No disponible`
        }

        console.log(info)
    }
    //GETTERS Y SETTERS => Están casi en desuso
    /*
    get price(){
        return this.#price
    }
    set price(new_price){
        this.#price = new_price
    }
    get title(){
        return this.#title
    }
    get author(){
        return this.#author
    }
    get stock(){
        return this.#stock
    }
    get id(){
        return this.#id
    }
    */
}

class Comic extends Book {
    //Propiedades y atributos nuevos
    #illustrator
    #vol

    constructor({title, author, price, stock, id , illustrator, vol}={}){              // ={} significa que el objeto puede estar vacio
        super({title,author,price,stock,id})
        this.#illustrator = illustrator
        this.#vol = vol;
    }
    
    getInfo(){
        let info = `Ilustrador: ${this.#illustrator.toString()}, Volumen: ${this.#vol}`
        super.getInfo()
        console.log(info)
    }
      
}
const book1 = new Book({
    id: 1,
    stock: 44,
    title: "El viejo y el mar",
    price: 40000,
    author: "Ernest Hemingway",
})
//console.log(book1.getInfo());


const book2 = new Book({
   stock: 0,
   title: "La peste",
   author: "Albert Camus",
   price: 50000,
   id: 2
    
})

const comic1 = new Comic({
    id: 1,
    vol: 2,
    illustrator: ["J.J", "H.H"],
    price: 15000,
    title: "Batman, the killing joke",
    stock: 11,
    author: "Bob Kane",
    
});

const book3 = new Book({
    title: "El río del tiempo",
    author: "Fernando Vallejo",
    price: 25000,
    stock: 0,
    id: 3,
});

Object.seal(book1);

const book4 = new Book ({
    title: "La historia de la fealdad",
    author: "Umberto Eco",
    price: 90000,     // En caso de que falten la información de precio y stock aparecerá un error
    stock:0
})

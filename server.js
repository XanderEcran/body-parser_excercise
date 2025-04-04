const express =require("express");
const bodyParser = require ("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [
    // {id: 1, name: "Ayam Geprek", price: 15000},
    // {id: 2, name: "Bakso Komplit", price: 27000},
    {id: 1, name: "Kopi Tubruk", price: 10000},
    {id: 2, name: "Teh Manis", price: 8000},
];

app.get("/products", (req, res) => {
    res.json({
        status: "success",
        data: products
    });
});

app.post("/products", (req, res) => {
    const{name, price} = req.body;
    if (!name || !price === undefined){
        return res.status(400).json ({
            status: "error",
            message: "Field 'name' dan 'price' wajib diisi"
        });
    }
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json ({
        status: "success",
        data: newProduct
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di https://localhost:${port}`);
});
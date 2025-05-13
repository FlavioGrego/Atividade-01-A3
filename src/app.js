const express = require('express');
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/clients', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get( "/" , (req, res, next) =>{ 
    //res.setHeader( 'Content-type' , 'application/json')
    res.send( { "resposta" : "Sejam bem-vindos à nossa Lojinha" } )
 } )
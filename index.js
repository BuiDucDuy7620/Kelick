const express = require("express");
const router = require("./Router/router.js");
const mongoose = require("mongoose");
const app = express();
const cors=require('cors')
const path=require('path')
const db = "mongodb+srv://buiducduy:Buiducduy%4007062000@cluster0.fugtbzu.mongodb.net/kelick";

//
// var swaggerUi = require('swagger-ui-express')
// var fs = require('fs')
// var jsyaml = require('js-yaml');
// var spec = fs.readFileSync('swagger.yml', 'utf8');
// var swaggerDocument = jsyaml.safeLoad(spec);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//

const PORT = process.env.PORT || 3000;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{console.log('ket noi db thanh cong');});
app.use(cors())
app.options('*',cors())

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use('/static', express.static(path.join(__dirname, 'public')))

router(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

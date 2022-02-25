var express = require("express");
var mongoose = require("mongoose");
var { graphqlHTTP } = require("express-graphql");
require('dotenv/config');//access .env file
var schemaJS = require("./js/schema");//import schema.js
var resolverJS = require("./js/resolver");//import resolver.js

//Connect to the database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database!")
}).catch(err => {
    console.log(err);
    console.log("Connection failed!")
});

//Create GraphQL HTTP Object
gqlHTTP = graphqlHTTP({
    schema: schemaJS.schema,
    rootValue: resolverJS.resolver,
    graphiql: true
})

//Create Express Server with GraphQL
var app = express();

app.use("/gql" , gqlHTTP);







//Run the Server
app.listen(process.env.PORT , () => {
    console.log(`Express GraphQL server running at PORT : ${process.env.PORT}`)
});
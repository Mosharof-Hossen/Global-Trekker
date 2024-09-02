const express = require('express');
const cors = require("cors")
require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const user = process.env.USER;
const password = process.env.PASSWORD;
console.log(user, password);

const uri = `mongodb+srv://${user}:${password}@clustergotravel.bziur.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGoTravel`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const spotsCollection = client.db("spotsDB").collection("spots");
        const countryCollection = client.db("spotsDB").collection("countryName");


        app.get("/spots", async (req, res) => {
            const cursor = spotsCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get("/country", async (req, res) => {
            const cursor = countryCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get("/spot/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await spotsCollection.findOne(query);
            res.send(result)
        })

        app.get("/spots/:email", async (req, res) => {
            const email = req.params.email;
            const query = { userEmail: email };
            const cursor = spotsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get("/country-spots/:country", async (req, res) => {
            const country = req.params.country;
           
            const query = { countryName: country };
            const cursor = spotsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.put("/update/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const data = req.body;
            const updateSpot = {
                $set: {
                    averageCost: data.averageCost,
                    countryName: data.countryName,
                    description: data.description,
                    location: data.location,
                    photoUrl: data.photoUrl,
                    seasonality: data.seasonality,
                    spotName: data.spotName,
                    totalVisitorsPerYear: data.totalVisitorsPerYear,
                    travelTime: data.travelTime
                }
            }
            const result = await spotsCollection.updateOne(query, updateSpot);
            res.send(result)
        })



        app.post("/spot", async (req, res) => {
            const spot = req.body;
          
            const result = await spotsCollection.insertOne(spot);
            res.send(result)
        })

        app.delete("/delete/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await spotsCollection.deleteOne(query);
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Go Travel Server Running..");
})

app.listen(port, () => {
    console.log("Server is running on port", port);
})
//Providing endpoint to fetch data from this api

const app = require('express')();

const PORT = 8080;


const exploreData = [
    {"img":"https://links.papareact.com/5j2",
    "location":"London","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/1to",
    "location":"Manchester","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/40m",
    "location":"Liverpool","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/msp",
    "location":"York","distance":"4-hour drive"},
    {"img":"https://links.papareact.com/2k3",
    "location":"Cardiff","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/ynx",
    "location":"Birkenhead","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/kji",
    "location":"Newquay","distance":"6-hour drive"},
    {"img":"https://links.papareact.com/41m",
    "location":"Hove","distance":"2-hour drive"}
]

const cardsData = [
    {"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},
    {"img":"https://links.papareact.com/q7j","title":"Unique stays"},
    {"img":"https://links.papareact.com/s03","title":"Entire homes"},
    {"img":"https://links.papareact.com/8ix","title":"Pet allowed"}
]


app.get('/exploredata', (req, res) =>{
    res.status(200).send({
    exploreData,
    cardsData
    })
})

app.listen(
    PORT,
    () => console.log(`its alive on port ${8080}`)
    )
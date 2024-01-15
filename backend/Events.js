// Events.js
(function () {
    class Events {
        // ... class definition ...
        constructor() {
            this.events = {};
        }

        on(eventName, callback) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(callback);
        }

        trigger(eventName) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(callback => callback());
                this.logEventToMongo(eventName);
                this.logEventToFile(eventName);
            }
        }

        off(eventName) {
            delete this.events[eventName];
        }

        logEventToMongo(eventName) {

            // Connect to MongoDB and insert event document
            // (Replace with your MongoDB connection logic)
            const MongoClient = require('mongodb').MongoClient;
            const uri = "youruri";
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

            client.connect(err => {
                const collection = client.db("EventsLog").collection("events");
                const event = { event: eventName, triggerTime: new Date() };
                collection.insertOne(event, (err, result) => {
                    if (err) console.error(err);
                    else console.log("Event logged to MongoDB:", result.insertedId);
                });
                client.close();
            });
        }

        logEventToFile(eventName) {
            const fs = require('fs');
            const timestamp = new Date().toISOString();
            const logEntry = `${eventName} --> ${timestamp}\n`;
            fs.appendFile('app.log', logEntry, (err) => {
                if (err) console.error(err);
                else console.log("Event logged to app.log");
            });
        }
    }

    window.Events = Events; // Assign class to global window object within IIFE
})();




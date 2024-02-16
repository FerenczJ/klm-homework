import express from "express";
import appRoot from 'app-root-path';
import fs from 'node:fs'
import {Airport, LatitudeDirection, LongitudeDirection} from "./model";

const app = express()
app.disable('etag')

const airportFile = fs.readFileSync(`${appRoot}/src/airports.txt`, 'utf8')
const airports: Airport[] =
    airportFile.split('\n')
        .map(line => {
            return line.split(':')
        })
        .map(line => {
            const airport : Airport = {
                icao: line[0],
                iata: line[1] !== "" ? line[1] : undefined,
                name: line[2],
                location: {
                    city: line[3],
                    country: line[4],
                    coordinates: {
                        latitude: {
                            degrees: Number(line[5]),
                            minutes: Number(line[6]),
                            seconds: Number(line[7]),
                            direction: line[8] as LatitudeDirection
                        },
                        longitude: {
                            degrees: Number(line[9]),
                            minutes: Number(line[10]),
                            seconds: Number(line[11]),
                            direction: line[12] as LongitudeDirection
                        }
                    },
                    altitude: Number(line[13])
                }
            }
            return airport
        })
        .filter(airport => {
            return airport.name != ""
        })

app.get('/airports/:code', (req, res) => {
    // wait for a couple of seconds to simulate a slow api
    setTimeout(() => {
        const airport = airports.find((element) => {
            return element.iata?.toUpperCase() == req.params.code.toUpperCase()
        })
        if (airport) {

            res.status(200)
                .header('Content-Type', 'application/json')
                .json(airport)
        } else {
            res.status(404)
                .json({message: `airport with code ${req.params.code} was not found!`})
        }
    }, Math.random() * 1000 + 1000)
})

app.get('/airports', (req, res) => {
    setTimeout(() => {
        const query = req.query['query'] as string
        let filteredAirports = airports

        if (query) {
            filteredAirports = airports.filter((element: Airport) => {
                return element.name?.toUpperCase().includes(query.toUpperCase()) || element.location?.city?.includes(query)
            }) as Airport[]
        }

        res.status(200)
            .header('Content-Type', 'application/json')
            .json(filteredAirports)
    }, Math.random() * 1000 + 1000)
})

/** Swagger ui */
app.get('/api', (req: express.Request, res: express.Response) => {
    res.sendFile(`${appRoot}/src/api/index.html`);
});
app.use('/swagger-ui', express.static(`${appRoot}/node_modules/swagger-ui-dist`));
app.use('/swagger-initializer.js', express.static(`${appRoot}/src/api/swagger-initializer.js`));
app.use('/airports-api.yaml', express.static(`${appRoot}/src/api/airports-api.yaml`));

app.listen(3000, () => {
    console.log(`Airports API listening on port ${3000}`)
})
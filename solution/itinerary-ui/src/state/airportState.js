import { atom, selector } from 'recoil';

export const airportsState = atom({
    key: 'airportsState',
    default: [{ name: "BUD", iata: "BUD" }, { name: "LAX", iata: "LAX" }, { name: "GOT", iata: "GOT" }, { name: "BCN", iata: "BCN" }],
});

export const selectedAirportsState = atom({
    key: 'selectedAirportsState',
    default: [],
});

export const airportsSelector = selector({
    key: 'airportsSelector',
    get: ({ get }) => {
        const airports = get(airportsState);
        const selectedAirports = get(selectedAirportsState);
        return airports.filter(x => !selectedAirports.map(y => y.iata).includes(x.iata))
    },
});


import { atom, selector } from 'recoil';

export const airportsState = atom({
    key: 'airportsState',
    default: [],
});

export const selectedAirportsState = atom({
    key: 'selectedAirportsState',
    default: []
});

export const airportsSelector = selector({
    key: 'airportsSelector',
    get: ({ get }) => {
        const airports = get(airportsState);
        const selectedAirports = get(selectedAirportsState);
        return airports.filter(x => !selectedAirports.map(y => y.iata).includes(x.iata))
    },
});


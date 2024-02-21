import { atom, selector } from 'recoil';

export const calculationState = atom({
    key: 'calculationState',
    default: { distance: 0, fare: 0, tax: 0, },
});
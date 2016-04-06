'use strict';

import { createSelector } from 'reselect';

const musicians = state => state.musicians;
const bands = state => state.bands;

/* replace with ORM for scalability */
export const merged = createSelector(
  musicians, bands, (musicians, bands) => {
    musicians.forEach(m => m.band = bands.filter(b => b.id === m.band)[0]);
    return musicians;
  }
);

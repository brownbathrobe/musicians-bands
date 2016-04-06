'use strict';

let defaultState = [
  { "id": "1", "first_name": "Corey", "last_name": "Taylor", "band": "3" },
  { "id": "2", "first_name": "Rodrigo", "last_name": "Sanchez", "band": "1" },
  { "id": "3", "first_name": "Gabriella", "last_name": "Quintero", "band": "1" },
  { "id": "4", "first_name": "Richard", "last_name": "Baker", "band": "2" }
];

export default function musicians(state = defaultState, action) {
  return defaultState;
};

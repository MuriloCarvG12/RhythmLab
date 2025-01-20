// This file contains all the data on the beats that will be used to generate sheets in our game!



const rhythm_easy = [
    { type: 'Whole Note', color: '#FF5733', time: 1000}, // color orange
    { type: 'Half Note', color: '#ff12ef', time: 500}, // color pink
  ]

const rhythm_medium = [
  { type: 'Whole Note', color: '#FF5733', time: 1000}, // color orange
  { type: 'Half Note', color: '#ff12ef', time: 500}, // color pink
  { type: 'Quarter Note', color: '#5733FF', time: 250} // color blue 
]

const rhythm_hard = [
  { type: 'Whole Note', color: '#FF5733', time: 1000}, // color orange
  { type: 'Half Note', color: '#ff12ef', time: 500}, // color pink
  { type: 'Quarter Note', color: '#5733FF', time: 250}, // color blue  
  { type: 'Eighth Note', color: '#FFC300', time: 125}, // color  yellow 
]

export default {rhythm_easy, rhythm_medium, rhythm_hard}
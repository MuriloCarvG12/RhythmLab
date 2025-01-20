// This file contains all the data on the beats that will be used to generate sheets in our game!



const rhythm_easy = [
    { type: 'Whole Note', duration: 'Whole Note', time: 1000},
    { type: 'Half Note', duration: "Half Note", time: 500},
  ]

const rhythm_medium = [
  { type: 'Whole Note', duration: 'Whole Note', time: 1000},
  { type: 'Half Note', duration: "Half Note", time: 500},
  { type: 'Quarter Note', duration: "Half Note", time: 250}
]

const rhythm_hard = [
  { type: 'Whole Note', duration: 'Whole Note', time: 1000},
  { type: 'Half Note', duration: "Half Note", time: 500},
  { type: 'Quarter Note', duration: "Quarter Note", time: 250},
  { type: 'Eighth Note', duration: "Eighth Note", time: 125},
]

export default {rhythm_easy, rhythm_medium, rhythm_hard}
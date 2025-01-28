// This file contains all the data on the beats that will be used to generate sheets in our game!



const rhythm_easy = [
    { type: 'Whole Note', color: '#700aff', time: 1000, image:'../.././public/note_durations_symbols/whole_note.png'}, // color purple
    { type: 'Half Note', color: '#ff12ef', time: 500, image:'../.././public/note_durations_symbols/half_note.png'}, // color pink
  ]

const rhythm_medium = [
  { type: 'Whole Note', color: '#700aff', time: 1000, image:'../.././public/note_durations_symbols/whole_note.png'}, // color purple
  { type: 'Half Note', color: '#ff12ef', time: 500, image:'../.././public/note_durations_symbols/half_note.png'}, // color pink
  { type: 'Quarter Note', color: '#5733FF', time: 250, image:'../.././public/note_durations_symbols/quarter_note.png'} // color blue 
]

const rhythm_hard = [
  { type: 'Whole Note', color: '#700aff', time: 1000, image:'../.././public/note_durations_symbols/whole_note.png'}, // color purple
  { type: 'Half Note', color: '#ff12ef', time: 500, image:'../.././public/note_durations_symbols/half_note.png'}, // color pink
  { type: 'Quarter Note', color: '#5733FF', time: 250, image:'../.././public/note_durations_symbols/quarter_note.png'}, // color blue  
  { type: 'Eighth Note', color: '#FFC300', time: 125, image:'../.././public/note_durations_symbols/eighth_note.png'}, // color  yellow 
]

export default {rhythm_easy, rhythm_medium, rhythm_hard}
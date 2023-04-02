const mongoose = require('mongoose')

const data_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    student_no: {
        type: Number,
        required: true
    },
    is_hosteler: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    why_Euphony: {
        type: String,
        // required: true
    },
    previous_exp: {
        type: String,
        // required: true
    },
    what_music_is_for_you: {
        type: String,
        // required: true
    },
    meaning_of_Euphony: {
        type: String,
        // required: true
    },
    achievement: {
        type: String,
        // required: true
    },
    have_you_learn_music: {
        type: Boolean,
        // required: true
    },
    favourite_singer_band: {
        type: String,
        required: true
    },
    type_of_song_you_like: {
        type: String,
        required: true
    }
})
const data_Model = mongoose.model('list_of_students', data_schema)
module.exports = data_Model;
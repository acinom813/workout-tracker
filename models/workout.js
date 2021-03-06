const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is required."
            },
            distance: {
                type: Number,
            },
            duration:{
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }

        }
    ]
}, {
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
  });


WorkoutSchema
  .virtual('totalDuration')
  .get(function () {
      let total = 0;
      for(let i=0; i<this.exercises.length; i++) {
          total = total + this.exercises[i].duration
      }
      return total
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
const router = require("express").Router();
const {Workout} = require ("../models");


    router.post("/api/workouts", (req, res) => {
        Workout.create ({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.updateOne({_id: params.id}, {$push:{exercises:body}}
        )

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })

        .catch(err => {
            res.json(err);
        });
    });
    router.get("/api/workouts/range", (req, res) => {
        Workout.find()
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });

    });

    router.delete("/api/workouts", ({ body }, res) => {
        Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    module.exports = router;
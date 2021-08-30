const express = require('express');

const exerciseController = require('../controllers/exerciseController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',
  exerciseController.getExercises,
  (req, res) => {
    console.log('THIS IS RES LOCALS EXERQ', res.locals.exerciseQuery);
    res.status(200).json(res.locals.exerciseQuery);
  },
);

router.get('/history',
  exerciseController.getHistory,
  (req, res) => res.status(200).json(res.locals.drillQuery),
);

router.post('/exercise',
  exerciseController.createNewExercise,
  (req, res) => res.status(200).json(res.locals.newExercise),
);

router.post('/signup',
  userController.createUser,
  (req, res) => res.status(201).json(res.locals.newUsersQuery),
);

router.post('/login',
  userController.verifyUser,
  (req, res) => res.status(200).json({}),
);

module.exports = router;

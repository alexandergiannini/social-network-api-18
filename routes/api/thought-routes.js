const router = require('express').Router();

const { createThought, addReaction, deleteThought, removeReaction, getAllThoughts, getThoughtById, updateThought } = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:id/reactions')
    .post(addReaction)
    

router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;

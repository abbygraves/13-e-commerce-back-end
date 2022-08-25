const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// TODO: GET ALL TAGS
router.get('/', (req, res) => {
  // .findAll
  // be sure to include its associated Product data
});



// TODO: GET SINGLE TAG BY `ID`
router.get('/:id', (req, res) => {
  // .findOne
  // be sure to include its associated Product data
});



// TODO: CREATE NEW TAG
router.post('/', (req, res) => {
  // .create
});



// TODO: UPDATE A TAG BY `ID`
router.put('/:id', (req, res) => {
  // .update a tag's name by its `id` value
});



// TODO: DELETE A TAG BY `ID`
router.delete('/:id', (req, res) => {
  // .destroy
});

module.exports = router;

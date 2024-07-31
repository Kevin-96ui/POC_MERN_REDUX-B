const express = require('express');
const router = express.Router();
const { getrootadmins, getrootadmin, createrootadmin, deleterootadmin, updaterootadmin } = require('../Controller/rootadmin.controller.js');

router.get('/', getrootadmins);
router.get('/:id', getrootadmin);
router.post('/', createrootadmin);
router.delete('/:id', deleterootadmin);
router.put('/:id', updaterootadmin);

module.exports = router;

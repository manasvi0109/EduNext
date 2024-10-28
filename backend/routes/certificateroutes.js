const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

router.post('/upload', certificateController.uploadExcel);
router.get('/:id', certificateController.getCertificateById);
router.get('/download/:id', certificateController.generateCertificatePDF);

module.exports = router;

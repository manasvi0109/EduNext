const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const certificateRoutes = require('./routes/certificateroutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/certificates', certificateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import React, { useState } from 'react';
import { uploadExcel } from '../api';

const AdminDashboard = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        await uploadExcel(formData);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AdminDashboard;


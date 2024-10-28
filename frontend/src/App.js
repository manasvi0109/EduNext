import React from 'react';
import AdminDashboard from './components/admindashboard';
import CertificateViewer from './components/certificateviewer';

function App() {
    return (
        <div>
            <h1>Certificate Verification System</h1>
            <AdminDashboard />
            <CertificateViewer />
        </div>
    );
}

export default App;

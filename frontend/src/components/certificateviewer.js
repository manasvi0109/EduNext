import React, { useState } from 'react';
import { getCertificate, downloadCertificate } from '../api';

const CertificateViewer = () => {
    const [certificateId, setCertificateId] = useState('');
    const [certificate, setCertificate] = useState(null);

    const fetchCertificate = async () => {
        const { data } = await getCertificate(certificateId);
        setCertificate(data);
    };

    const handleDownload = async () => {
        await downloadCertificate(certificateId);
    };

    return (
        <div>
            <input value={certificateId} onChange={(e) => setCertificateId(e.target.value)} />
            <button onClick={fetchCertificate}>Fetch Certificate</button>
            {certificate && (
                <div>
                    <h2>{certificate.studentName}</h2>
                    <p>{certificate.internshipDomain}</p>
                    <button onClick={handleDownload}>Download</button>
                </div>
            )}
        </div>
    );
};

export default CertificateViewer;

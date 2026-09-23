function verifyCertificate() {
    const certificateNumber = document.getElementById("certificateNumber").value.trim().toUpperCase();
    const result = document.getElementById("result");

    const certificates = {
        "CERT001": {
            name: "Lt. Allan Egwelle",
            course: "DTOC",
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        }
    };

    if (certificates[certificateNumber]) {
        const certificate = certificates[certificateNumber];

        result.innerHTML = `
            <h3>Certificate Verified Successfully!</h3>
            <p><strong>Certificate No:</strong> ${certificateNumber}</p>
            <p><strong>Name:</strong> ${certificate.name}</p>
            <p><strong>Course:</strong> ${certificate.course}</p>
            <p><strong>Date Issued:</strong> ${certificate.dateIssued}</p>
            <p><strong>Institution:</strong> ${certificate.institution}</p>
        `;
    } else {
        result.innerHTML = "Certificate Not Found.";
    }
}

  function verifyCertificate() {
    const certificateNumber = document.getElementById("certificateNumber").value.trim().toUpperCase();
    const result = document.getElementById("result");

    const certificates = {
        "CERT001": {
            name: "RO/15053 Capt Moses Atweta",
            course: "DTOC",
		   Intake: "01/26",
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

       "CERT002": {
            name: "RO/13523 Lt Josesh Mwesige",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	  "CERT003": {
            name: "RO/17011 Lt Dennis Niwagaba",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	  "CERT004": {
            name: "RO/18220 Lt Allan Egwele",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	  "CERT005": {
            name: "RO/18300 Lt Ochwo Omukaga",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	  "CERT006": {
            name: "RA/191435 S/Ggt Tumwetabe Saison",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },
	   
	  "CERT007": {
            name: "RA/208992 Sgt Muheirwe Everesto",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	   "CERT008": {
            name: "RA/229363 Cpl Ebulu Micheal",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },

	    "CERT009": {
            name: "RA/210073 L/Cpl Atamba Amos",
           course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },
	    "CERT010": {
            name: "RA/230091 L/Cpl Mayebe Simon",
            course: "DTOC",
		   Intake: "01/26"
            dateIssued: "September 2026",
            institution: "IPSO-TC"
        },
        
        "CERT002": {
            name: "RA/286486 PTE Natuhweza Mohammed",
            course: "DTOC",
            dateIssued: "September 2026",
            institution: "IPSO-TC"
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

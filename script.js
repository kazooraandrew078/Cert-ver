const certificates = {    "CERT001": {        serviceNumber: "RO/15053",        rank: "Capt",        name: "Moses Atweta"    },
    "CERT002": {        serviceNumber: "RO/13523",        rank: "Lt",        name: "Joseph Mwesige"    },
    "CERT003": {        serviceNumber: "RO/17011",        rank: "Lt",        name: "Dennis Niwagaba"    },
    "CERT004": {        serviceNumber: "RO/18220",        rank: "Lt",        name: "Allan Egwele"    },
    "CERT005": {        serviceNumber: "RO/18300",        rank: "Lt",        name: "Ochwo Omukaga"    },
    "CERT006": {        serviceNumber: "RA/191435",        rank: "S/Sgt",        name: "Tumwetabe Saison"    },
    "CERT007": {        serviceNumber: "RA/208992",        rank: "Sgt",        name: "Muheirwe Everesto"    },
    "CERT008": {        serviceNumber: "RA/229363",        rank: "Cpl",        name: "Ebulu Micheal"    },
    "CERT009": {        serviceNumber: "RA/210073",        rank: "L/Cpl",        name: "Atamba Amos"    },
    "CERT010": {        serviceNumber: "RA/230091",        rank: "L/Cpl",        name: "Mayebe Simon"    },
    "CERT011": {        serviceNumber: "RA/232820",        rank: "L/Cpl",        name: "Kagudemungalo Mesach"    },
    "CERT012": {        serviceNumber: "RA/239769",        rank: "L/Cpl",        name: "Kato Abdulhakim"    },
    "CERT013": {        serviceNumber: "RA/254204",        rank: "L/Cpl",        name: "Jemba Chrispus Pius"    },
    "CERT014": {        serviceNumber: "RA/258614",        rank: "L/Cpl",        name: "Loum Benard Achola"    },
    "CERT015": {        serviceNumber: "RA/260542",        rank: "L/Cpl",        name: "Okopor Micheal"    },
    "CERT016": {        serviceNumber: "RA/261851",        rank: "L/Cpl",        name: "Otim Emmanuel"    },
    "CERT017": {        serviceNumber: "RA/265050",        rank: "L/Cpl",        name: "Ewanyu Joel Sadric Baiwa"    },
    "CERT018": {        serviceNumber: "RA/281648",        rank: "L/Cpl",        name: "Tusuubira Samson"    },
    "CERT019": {        serviceNumber: "RA/285314",        rank: "L/Cpl",        name: "Golya Kefa"    },
    "CERT020": {        serviceNumber: "RA/300780",        rank: "L/Cpl",        name: "Acwici Emmily"    },
    "CERT021": {        serviceNumber: "RA/300913",        rank: "L/Cpl",        name: "Amunyos Paskal"    },
    "CERT022": {        serviceNumber: "RA/301397",        rank: "L/Cpl",        name: "Kwemoi Jabeth"    },
    "CERT023": {        serviceNumber: "RA/301418",        rank: "L/Cpl",        name: "Lodonga Micheal"    },
    "CERT024": {        serviceNumber: "RA/301725",        rank: "L/Cpl",        name: "Njunoha Fred"    },
    "CERT025": {        serviceNumber: "RA/301737",        rank: "L/Cpl",        name: "Nuwamanya Aaron"    },
    "CERT026": {        serviceNumber: "RA/243850",        rank: "Pte",        name: "Chelangat Isaac"    },
    "CERT027": {        serviceNumber: "RA/251569",        rank: "Pte",        name: "Lumansi Kevin"    },
    "CERT028": {        serviceNumber: "RA/253483",        rank: "Pte",        name: "Olanya Richard"    },
    "CERT029": {        serviceNumber: "RA/253812",        rank: "Pte",        name: "Aupal Cryspus Emmanuel"    },
    "CERT030": {        serviceNumber: "RA/255937",        rank: "Pte",        name: "Ogole Daniel"    },
    "CERT031": {        serviceNumber: "RA/259775",        rank: "Pte",        name: "Malinga Denis"    },
    "CERT032": {        serviceNumber: "RA/263383",        rank: "Pte",        name: "Kisakye Aisha Namboga"    },
    "CERT033": {        serviceNumber: "RA/267357",        rank: "Pte",        name: "Etamu Morris"    },
    "CERT034": {        serviceNumber: "RA/269144",        rank: "Pte",        name: "Turyamwesimira K Redstuart"    },
    "CERT035": {        serviceNumber: "RA/273402",        rank: "Pte",        name: "Businge Darlson"    },
    "CERT036": {        serviceNumber: "RA/274666",        rank: "Pte",        name: "Aluma Gilbert"    },
    "CERT037": {        serviceNumber: "RA/274720",        rank: "Pte",        name: "Amecho Jesca"    },
    "CERT038": {        serviceNumber: "RA/275675",        rank: "Pte",        name: "Eliba Denis"    },
    "CERT039": {        serviceNumber: "RA/275908",        rank: "Pte",        name: "Sunday Godwil"    },
    "CERT040": {        serviceNumber: "RA/278922",        rank: "Pte",        name: "Otubo Derrick"    },
    "CERT041": {        serviceNumber: "RA/280387",        rank: "Pte",        name: "Kamurungi Rose"    },
    "CERT042": {        serviceNumber: "RA/281948",        rank: "Pte",        name: "Atwiziire Clare"    },
    "CERT043": {        serviceNumber: "RA/284864",        rank: "Pte",        name: "Chelangat Linda"    },
    "CERT044": {        serviceNumber: "RA/286486",        rank: "Pte",        name: "Natuhweza Mohammed"    },
    "CERT045": {        serviceNumber: "RA/289933",        rank: "Pte",        name: "Kazoora Andrew"    },
    "CERT046": {        serviceNumber: "RA/292598",        rank: "Pte",        name: "Agaba Juspus Guma"    },
    "CERT047": {        serviceNumber: "RA/295873",        rank: "Pte",        name: "Omoding Vicent"    }};

function verifyCertificate() {
    const certificateNumber = document        .getElementById("certificateNumber")        .value        .trim()        .toUpperCase();
    const result = document.getElementById("result");
    if (certificates[certificateNumber]) {
        const certificate = certificates[certificateNumber];
        result.innerHTML = `            <h3>Certificate Verified</h3>
            <p><strong>CERT. NUMBER:</strong> ${certificateNumber}</p>
            <p><strong>SERVICE NUMBER:</strong> ${certificate.serviceNumber}</p>
            <p><strong>NAME:</strong> ${certificate.name}</p>
            <p><strong>RANK:</strong> ${certificate.rank}</p>
            <p><strong>COURSE ATTENDED:</strong>            Digital Tactical Operations Centre (DTOC)</p>
            <p><strong>INTAKE:</strong> 01/26</p>
            <p><strong>INSTITUTION:</strong>            UPDF- IPSO-TC Singo</p>
            <p><strong>DATE ISSUED:</strong> Sep 26</p>
            <br>
            <p><strong>ISSUING OFFICER:</strong></p>
            ${                certificateNumber === "CERT004" ||                certificateNumber === "CERT045"                ? '<img src="MB KIMUKU.png" alt="MB KIMUKU Signature" style="width:180px;">'                : ''            }
            <p><strong>NAME:</strong> MB KIMUKU</p>
            <p><strong>RANK:</strong> Lt. Col</p>
            <p><strong>APPOINTMENT:</strong> Chief Instructor</p>        `;
    } else {
        result.innerHTML = `            <p style="color:red;">                Certificate not found. Please check the certificate number.            </p>        `;    }}

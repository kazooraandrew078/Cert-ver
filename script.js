function verifyCertificate() {
   const certificateNumber =
document.getElementById("certificateNumber").value.trim().toUpperCase();
   if(certificateNumber === "CERT001") {
document.getElementById("result").innerHTML =
      "Certificate Verified successfully";
   } else {
document.getElementById("result").innerHTML =
      "certificate Not Found.";
   }
}
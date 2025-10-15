// Selected template
let selectedTemplate = "template1";

// Update template when user selects
const templateSelect = document.getElementById("template");
templateSelect.addEventListener("change", () => {
  selectedTemplate = templateSelect.value;
  generateBiodata(); // Update preview
});

// Profile Image Handling
let profileImageData = "";
document.getElementById("profileImage").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      profileImageData = evt.target.result;
      generateBiodata(); // Update preview with image
    }
    reader.readAsDataURL(file);
  }
});

// Generate Live Preview
function generateBiodata() {
  const output = document.getElementById("output");
  const formInputs = Array.from(document.querySelectorAll("#biodataForm input, #biodataForm select"));
  
  const fields = formInputs.map(i => {
    if(i.type === "file") return ""; // Skip file input
    return `<p><strong>${i.placeholder}:</strong> ${i.value}</p>`;
  }).join("");

  output.innerHTML = `
    ${profileImageData ? `<img src="${profileImageData}">` : ''}
    <div class="${selectedTemplate}">
      ${fields}
    </div>
  `;
}

// Download PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'pt', 'a4');
  let y = 50;

  // Template Styles
  switch(selectedTemplate){
    case "template1": doc.setTextColor("#e91e63"); doc.setFont("helvetica","bold"); break;
    case "template2": doc.setTextColor("#1976d2"); doc.setFont("helvetica","normal"); break;
    case "template3": doc.setTextColor("#b8860b"); doc.setFont("times","bold"); break;
    case "template4": doc.setTextColor("#388e3c"); doc.setFont("helvetica","italic"); break;
    case "template5": doc.setTextColor("#d32f2f"); doc.setFont("courier","bold"); break;
    case "template6": doc.setTextColor("#9c27b0"); doc.setFont("helvetica","normal"); break;
    case "template7": doc.setTextColor("#ffffff"); doc.setFont("helvetica","bold"); doc.setFillColor(33,33,33); doc.rect(0,0,595,842,'F'); break;
  }

  doc.setFontSize(20);
  doc.text("Shaadi Biodata", 40, y);
  y += 40;

  // Add Profile Image
  if(profileImageData){
    doc.addImage(profileImageData, 'JPEG', 400, 20, 120, 90); // Rectangle image
  }

  doc.setFontSize(12);
  const outputText = document.getElementById("output").innerText.split('\n');
  outputText.forEach(line => {
    doc.text(line, 40, y);
    y += 20;
  });

  doc.save("Biodata.pdf");
}

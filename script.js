function generateBiodata() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const height = document.getElementById('height').value;
  const education = document.getElementById('education').value;
  const occupation = document.getElementById('occupation').value;
  const photo = document.getElementById('photo').files[0];
  const template = document.getElementById('template').value;

  let photoURL = '';
  if(photo) {
    photoURL = URL.createObjectURL(photo);
  }

  let templateHTML = '';

  switch(template){
    case 'template1':
      templateHTML = `
      <div style="border:2px solid gold; padding:15px; border-radius:10px; font-family: 'Playfair Display', serif;">
        <h2>${name}</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo">` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    case 'template2':
      templateHTML = `
      <div style="border:2px solid teal; padding:15px; border-radius:10px; font-family: Arial, sans-serif;">
        <h2 style="text-align:center;">${name}</h2>
        ${photoURL ? `<div style="text-align:center;"><img src="${photoURL}" alt="Photo"></div>` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    case 'template3':
      templateHTML = `
      <div style="border:4px solid #ff7f50; padding:20px; border-radius:15px; background: linear-gradient(to right, #ffe4e1, #fffacd);">
        <h2 style="color:#ff4500;">${name}</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo">` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    case 'template4':
      templateHTML = `
      <div style="border:2px double navy; padding:15px; border-radius:10px; font-family: Arial, sans-serif;">
        <h2>${name}</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo">` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    case 'template5':
      templateHTML = `
      <div style="border:2px dotted purple; padding:20px; border-radius:15px; background-color:#fff0f5; font-family: 'Cursive', sans-serif;">
        <h2 style="color:purple;">${name}</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo">` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    case 'template6':
      templateHTML = `
      <div style="border:2px solid gray; padding:20px; display:grid; grid-template-columns: 1fr 1fr; gap:15px; border-radius:10px; font-family: Arial, sans-serif;">
        ${photoURL ? `<div><img src="${photoURL}" alt="Photo"></div>` : ''}
        <div>
          <h2>${name}</h2>
          <p><strong>DOB:</strong> ${dob}</p>
          <p><strong>Height:</strong> ${height}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Occupation:</strong> ${occupation}</p>
        </div>
      </div>`;
      break;
    case 'template7':
      templateHTML = `
      <div style="border:2px solid gold; padding:20px; border-radius:10px; background-color:#2c2c2c; color:white; font-family: Arial, sans-serif;">
        <h2 style="color:gold;">${name}</h2>
        ${photoURL ? `<img src="${photoURL}" alt="Photo">` : ''}
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
      </div>`;
      break;
    default:
      templateHTML = `<p>Template coming soon...</p>`;
  }

  document.getElementById('biodataPreview').innerHTML = templateHTML;
}

const API_BASE = "http://ergast.com/api/f1";
const fetchDriversButton = document.getElementById('fetchDrivers');
const responseFormat = document.getElementById('responseFormat');
const limitInput = document.getElementById('limitInput');
const offsetInput = document.getElementById('offsetInput');
const driversOutput = document.getElementById('driversOutput');

// JSONP callback handler
function handleJSONPResponse(data) {
  displayDrivers(data.MRData.DriverTable.Drivers);
}

// Display drivers
function displayDrivers(drivers) {
  driversOutput.innerHTML = ""; // Clear previous output
  drivers.forEach(driver => {
    const card = document.createElement('div');
    card.className = 'driver-card';

    card.innerHTML = `
      <h3>${driver.givenName} ${driver.familyName}</h3>
      <p><strong>Date of Birth:</strong> ${driver.dateOfBirth}</p>
      <p><strong>Nationality:</strong> ${driver.nationality}</p>
      <p><strong>Player ID:</strong> ${driver.driverId}</p>
    `;
    driversOutput.appendChild(card);
  });
}

// Fetch driver information with pagination
fetchDriversButton.addEventListener('click', async () => {
  const format = responseFormat.value; // json, jsonp
  const limit = limitInput.value || 30; // Default to 30 if not set
  const offset = offsetInput.value || 0; // Default to 0 if not set
  let url = `${API_BASE}/drivers.${format}?limit=${limit}&offset=${offset}`;

  try {
    if (format === 'jsonp') {
      // Create a <script> tag for JSONP
      const script = document.createElement('script');
      script.src = `${url}&callback=handleJSONPResponse`;
      document.body.appendChild(script);
      return;
    }

    const response = await fetch(url);
    const jsonData = await response.json();
    displayDrivers(jsonData.MRData.DriverTable.Drivers);
  } catch (error) {
    driversOutput.innerHTML = '<span class="error">Error fetching driver information</span>';
  }
});
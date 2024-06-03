function convertToDays() {
    let age = parseInt(document.getElementById('age').value);
    let days = age * 365;
  
    document.getElementById('result').innerText = `Your age in days is approximately: ${days}`;
  }
  
for(let i = 0; i <= 5; i++) {
  if (i === 0) {
      document.write('<option value="' + i + '" selected>' + i + '</option>');
  } else {
      document.write('<option value="' + i*10 + '">' + i*10 + '</option>');
  }
};

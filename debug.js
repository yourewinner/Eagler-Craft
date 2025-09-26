<script>
  document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var selectedItems = [];
    var checkboxes = document.querySelectorAll('input[name="selectedItems"]:checked');
    checkboxes.forEach(function(checkbox) {
      selectedItems.push(checkbox.value);
    });

    var formData = new FormData();
    selectedItems.forEach(function(item) {
      formData.append('selectedItems', item);
    });

    var scriptUrl = 'https://script.google.com/a/macros/newheightsacademy.org/s/AKfycbzTKJvnHSQn_GJjr_uIN8hd61FY0bGQvmTXMuAccgeDlhsjN_MwKJRhZYfh8cQnLJEkxw/exec'; // Paste your copied URL here

    fetch(scriptUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert(data); // Display success message
      // Optionally, clear the form or redirect
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting data.');
    });
  });
</script>

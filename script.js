 // Get all checkboxes and the progress bar elements
 const checkboxes = document.querySelectorAll('.task-checkbox');
 const progressBar = document.getElementById('progress-bar');
 const progressPercent = document.getElementById('progress-percent');

 // Function to update the progress bar and percentage
 function updateProgress() {
     const totalTasks = checkboxes.length;
     const completedTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

     const progressPercentage = (completedTasks / totalTasks) * 100;

     // Update progress bar width and percentage text
     progressBar.style.width = progressPercentage + '%';
     progressBar.innerText = Math.round(progressPercentage) + '%';
     progressPercent.innerText = Math.round(progressPercentage) + '%';
 }

 // Attach event listeners to each checkbox to update progress on change
 checkboxes.forEach(checkbox => {
     checkbox.addEventListener('change', updateProgress);
 });
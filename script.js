document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    const startDate = new Date(new Date().getFullYear(), 0, 1); // 1st January of the current year
    const endDate = new Date(new Date().getFullYear(), 11, 31); // 31st December of the current year
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

    const updateProgressBar = () => {
        const currentDate = new Date();
        const elapsedDays = (currentDate - startDate) / (1000 * 60 * 60 * 24) + 1;
        const progressPercent = (elapsedDays / totalDays) * 100;
        
        progressBar.style.width = `${progressPercent}%`;
        progressText.textContent = `Progresso: ${Math.floor(elapsedDays)} de ${totalDays} dias (${progressPercent.toFixed(2)}%)`;
    };

    // Update the progress bar initially and then every day
    updateProgressBar();
    setInterval(updateProgressBar, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
});

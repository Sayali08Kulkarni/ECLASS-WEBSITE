document.getElementById('playButton').addEventListener('click', function() {
    const dateInput = document.getElementById('datePicker').value;
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoContainer = document.getElementById('videoContainer');

    // Map of dates to video URLs
    const videoMap = {
        '2024-10-01': 'video1.mp4', // Replace with your video paths
        '2024-10-02': 'video2.mp4',
        '2025-03-01': 'video3.mp4',
        '2025-03-01': 'video4.mp4',
        // Add more dates and corresponding video paths as needed
    };

    // Check if the selected date has a corresponding video
    if (videoMap[dateInput]) {
        videoSource.src = videoMap[dateInput];
        videoPlayer.load(); // Load the new video
        videoContainer.style.display = 'block'; // Show the video container
        videoPlayer.play(); // Play the video
    } else {
        alert('No video available for the selected date.');
        videoContainer.style.display = 'none'; // Hide the video container
    }
});
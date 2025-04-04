 // Video Background Rotation
 document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-background video');
    const videoControls = document.querySelectorAll('.video-controls button');
    let currentVideoIndex = 0;
    const videoCount = videos.length;
    let videoInterval;
    
    // Function to switch video
    function switchVideo(index) {
        // Remove active class from all videos and controls
        videos.forEach(video => video.classList.remove('active'));
        videoControls.forEach(control => control.classList.remove('active'));
        
        // Add active class to selected video and control
        videos[index].classList.add('active');
        videoControls[index].classList.add('active');
        currentVideoIndex = index;
    }
    
    // Auto-rotate videos every 8 seconds
    function startVideoRotation() {
        videoInterval = setInterval(() => {
            currentVideoIndex = (currentVideoIndex + 1) % videoCount;
            switchVideo(currentVideoIndex);
        }, 8000);
    }
    
    // Manual control click handler
    videoControls.forEach((control, index) => {
        control.addEventListener('click', () => {
            clearInterval(videoInterval);
            switchVideo(index);
            startVideoRotation();
        });
    });
    
    // Start the rotation
    startVideoRotation();
    
    // Pause on hover (optional)
    const videoHeader = document.querySelector('.video-header');
    videoHeader.addEventListener('mouseenter', () => {
        clearInterval(videoInterval);
    });
    
    videoHeader.addEventListener('mouseleave', () => {
        startVideoRotation();
    });
    
    // Fallback for mobile autoplay
    videos.forEach(video => {
        video.addEventListener('click', () => {
            video.play();
        });
    });
    
    // Your existing activity button and other JavaScript...
    const buttons = document.querySelectorAll('.activity-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content-area').forEach(area => {
                area.classList.remove('active');
            });
            
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            document.getElementById(`${category}-content`).classList.add('active');
        });
    });
    
    // Set first button as active by default
    buttons[0].click();
});

document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-background video');
    const videoControls = document.querySelectorAll('.video-controls button');
    let currentVideoIndex = 0;
    const videoCount = videos.length;
    let videoInterval;
    
    // Function to switch video
    function switchVideo(index) {
        // Remove active class from all videos and controls
        videos.forEach(video => video.classList.remove('active'));
        videoControls.forEach(control => control.classList.remove('active'));
        
        // Add active class to selected video and control
        videos[index].classList.add('active');
        videoControls[index].classList.add('active');
        currentVideoIndex = index;
    }
    
    // Auto-rotate videos every 8 seconds
    function startVideoRotation() {
        videoInterval = setInterval(() => {
            currentVideoIndex = (currentVideoIndex + 1) % videoCount;
            switchVideo(currentVideoIndex);
        }, 8000);
    }
    
    // Manual control click handler
    videoControls.forEach((control, index) => {
        control.addEventListener('click', () => {
            clearInterval(videoInterval);
            switchVideo(index);
            startVideoRotation();
        });
    });
    
    // Start the rotation
    startVideoRotation();
    
    // Pause on hover (optional)
    const videoHeader = document.querySelector('.video-header');
    videoHeader.addEventListener('mouseenter', () => {
        clearInterval(videoInterval);
    });
    
    videoHeader.addEventListener('mouseleave', () => {
        startVideoRotation();
    });
    
    // Fallback for mobile autoplay
    videos.forEach(video => {
        video.addEventListener('click', () => {
            video.play();
        });
    });
    
    // Your existing activity button and other JavaScript...
    const buttons = document.querySelectorAll('.activity-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content-area').forEach(area => {
                area.classList.remove('active');
            });
            
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            document.getElementById(`${category}-content`).classList.add('active');
        });
    });
    
    // Set first button as active by default
    buttons[0].click();
});
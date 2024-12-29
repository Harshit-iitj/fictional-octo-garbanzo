document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const checkpoints = document.querySelectorAll(".timeline-checkpoint"); // Selecting the checkpoint dots
    let activeIndex = 0; // Index of the first visible item
    const visibleItemsCount = 2; // Number of visible items at a time

    // Function to handle scroll events
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.9; // 90% of the viewport height

        timelineItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;

            // Determine if the item should be visible
            if (index >= activeIndex && index < activeIndex + visibleItemsCount) {
                if (itemPosition < triggerPoint) {
                    item.classList.add("visible");
                    item.classList.remove("fade-out");
                }
            } else {
                if (item.classList.contains("visible")) {
                    item.classList.add("fade-out");
                    item.classList.remove("visible");
                }
            }
        });

        // Adjust the active index based on scroll direction
        const firstItem = timelineItems[activeIndex];
        const lastItem = timelineItems[activeIndex + visibleItemsCount - 1];
        if (firstItem.getBoundingClientRect().top < -50) {
            activeIndex++;
        } else if (lastItem.getBoundingClientRect().bottom > windowHeight + 50) {
            activeIndex--;
        }

        activeIndex = Math.max(0, Math.min(activeIndex, timelineItems.length - visibleItemsCount));

        // Update the checkpoint dots visibility as the user scrolls
        checkpoints.forEach((checkpoint, index) => {
            const checkpointPosition = checkpoint.getBoundingClientRect().top;
            if (checkpointPosition < windowHeight * 0.9) {
                checkpoint.classList.add("checkpoint-visible");
            } else {
                checkpoint.classList.remove("checkpoint-visible");
            }
        });
    };

    // Initial check and add event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

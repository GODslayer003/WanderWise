const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);
document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.book-now-btn');

        bookButtons.forEach(button => {
            button.addEventListener('click', () => {
                const featureCard = button.closest('.feature-card');
                const featureType = featureCard.dataset.feature; // Get the data-feature attribute
    
                alert(`You clicked to book a ${featureType}! (This would lead to a booking page)`);
    
                // In a real application, you might do something like:
                // window.location.href = `/booking/${featureType}`;
            });
        });
    });


// NEW: Interactivity for Travel Tools & Management Features
const launchToolButtons = document.querySelectorAll('.launch-tool-btn');
launchToolButtons.forEach(button => {
    button.addEventListener('click', () => {
        const toolCard = button.closest('.tool-card');
        const toolType = toolCard.dataset.tool; // Get the data-tool attribute

        let message = '';
        let action = '';

        // Customize messages based on the tool type
        switch (toolType) {
            case 'journals':
                message = 'Opening your travel journals...';
                action = 'open journal entry interface';
                break;
            case 'budget-calculator':
                message = 'Launching the budget calculator...';
                action = 'start budget planning';
                break;
            case 'hotel-booking':
                message = 'Redirecting to hotel booking options...';
                action = 'search for hotels';
                break;
            case 'trip-planner':
                message = 'Accessing your trip planner...';
                action = 'create/view itinerary';
                break;
            case 'souvenir-system':
                message = 'Managing your souvenir list...';
                action = 'add/view souvenirs';
                break;
            default:
                message = `Launching ${toolType} tool...`;
                action = 'perform generic action';
        }

        alert(`${message}\n(This would lead to a dedicated page to ${action}.)`);

        // In a real application, you might do something like:
        // window.location.href = `/${toolType}`;
        // or open a modal:
        // openToolModal(toolType);
    });
});




// REVISED: Interactivity for Trending Places Carousels (Both sections)

    // Function to handle carousel scrolling for a given carousel and its buttons
    const setupCarousel = (carouselSelector, prevBtnSelector, nextBtnSelector) => {
        const carousel = document.querySelector(carouselSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);

        if (!carousel || !prevBtn || !nextBtn) {
            console.warn(`Carousel elements not found for selectors: ${carouselSelector}, ${prevBtnSelector}, ${nextBtnSelector}`);
            return; // Exit if elements are not found
        }

        const scrollAmount = 200;

        prevBtn.addEventListener('click', () => {
            carousel.scrollTo({
                left: carousel.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollTo({
                left: carousel.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        });

        // Make each place card clickable within this carousel
        const placeCards = carousel.querySelectorAll('.place-card');
        placeCards.forEach(card => {
            card.addEventListener('click', (event) => {
                event.preventDefault();
                const placeId = card.dataset.placeId;
                const placeName = card.querySelector('.place-name').innerText;
                alert(`You clicked on a place card (#${placeId}: ${placeName}) in the ${carouselSelector.replace('.', '')} carousel. (This would take you to a detailed page about ${placeName}).`);
            });
        });
    };

    // Setup the first Trending Places carousel
    setupCarousel('.places-carousel', '.places-prev-btn', '.places-next-btn');

    // Setup the NEW Trending Natural Places carousel
    setupCarousel('.natural-places-carousel', '.natural-prev-btn', '.natural-next-btn');

// Optional: Make each place card clickable as well
const placeCards = document.querySelectorAll('.place-card');
placeCards.forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const placeId = card.dataset.placeId;
        const placeName = card.querySelector('.place-name').innerText;
        alert(`You clicked on Trending Place #${placeId}: ${placeName} (This would take you to a detailed page about ${placeName}).`);
        // window.location.href = `/places/${placeId}`; // In a real app
    });
});
// NEW: Interactivity for Traveler Stories & Comments Section
const tabButtons = document.querySelectorAll('.tab-button');
const commentGrids = document.querySelectorAll('.comments-grid');
const showAllStoriesToggle = document.getElementById('showAllStoriesToggle');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tab buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const targetTab = button.dataset.tab;

        // Hide all comment grids
        commentGrids.forEach(grid => grid.classList.remove('active-tab'));

        // Show the target comment grid
        document.querySelector(`.comments-grid.${targetTab}-stories`).classList.add('active-tab');
    });
});

// Handle the "Show All Stories" toggle (example functionality)
showAllStoriesToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        alert('Showing all stories! (In a real app, this might load more comments or expand the view.)');
        // Implement logic to load/show all comments
    } else {
        alert('Hiding some stories. (Reverting to default view.)');
        // Implement logic to revert to default view
    }
});

// Make action links clickable
const actionLinks = document.querySelectorAll('.comment-action .action-link');
actionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert(`You clicked to: "${link.innerText}" (This would navigate to a detailed travel story or guide).`);
        // Example: window.location.href = '/travel-story-details';
    });
});

// NEW: Interactivity for Top Lists Section
const listItemCards = document.querySelectorAll('.top-lists-section .list-item-card');
listItemCards.forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const itemName = card.querySelector('h4').innerText;
        const categoryTitle = card.closest('.top-list-category').querySelector('.category-title').innerText;
        alert(`You clicked on "${itemName}" from the "${categoryTitle}" list! (This would take you to a detailed page about ${itemName}).`);
    });
});

const viewMoreLinks = document.querySelectorAll('.top-lists-section .view-more-link');
viewMoreLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const categoryTitle = link.closest('.top-list-category').querySelector('.category-title').innerText;
        alert(`You clicked "View more" for "${categoryTitle}"! (This would navigate to a full list page for this category).`);
    });
});
// NEW: Interactivity for Contact Us Section
const emailUsBtn = document.getElementById('emailUsBtn');
if (emailUsBtn) { // Ensure the button exists before adding listener
    emailUsBtn.addEventListener('click', () => {
        const subject = encodeURIComponent('Inquiry from WanderWise Website');
        const body = encodeURIComponent('Hello WanderWise Team,\n\nI am writing to you from your website...');
        window.location.href = `mailto:support@wanderwise.com?subject=${subject}&body=${body}`;
    });
} else {
    console.warn('Email Us button not found. ID "emailUsBtn" might be missing or incorrect.');
}

const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // No preventDefault here, as we want the links to actually navigate
        const platform = link.querySelector('i').className.replace('fab fa-', '').replace('fa-', ''); // Extracts platform name
        alert(`Opening ${platform} profile... (This will actually open in a new tab due to target="_blank")`);
    });
});

// NEW: Interactivity for Discover Your Next Adventure Section

    // 1. Featured Travel Guides Carousel
    const guidesCarousel = document.querySelector('.featured-guides-carousel');
    const guidePrevBtn = document.querySelector('.guide-prev-btn');
    const guideNextBtn = document.querySelector('.guide-next-btn');

    if (guidesCarousel && guidePrevBtn && guideNextBtn) {
        const guideScrollAmount = 250; // Adjust scroll amount for guide cards

        guidePrevBtn.addEventListener('click', () => {
            guidesCarousel.scrollTo({
                left: guidesCarousel.scrollLeft - guideScrollAmount,
                behavior: 'smooth'
            });
        });

        guideNextBtn.addEventListener('click', () => {
            guidesCarousel.scrollTo({
                left: guidesCarousel.scrollLeft + guideScrollAmount,
                behavior: 'smooth'
            });
        });

        // Make guide cards and their buttons interactive
        const guideCards = document.querySelectorAll('.guide-card');
        guideCards.forEach(card => {
            card.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const guideId = card.dataset.guideId;
                const guideTitle = card.querySelector('h4').innerText;
                alert(`You clicked on guide "${guideTitle}" (ID: ${guideId}). This would take you to the full guide page.`);
            });

            // Make the "Read Guide" button specifically clickable
            const readGuideBtn = card.querySelector('.read-guide-btn');
            if (readGuideBtn) {
                readGuideBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent card click event from firing
                    const guideTitle = card.querySelector('h4').innerText;
                    alert(`You clicked "Read Guide" for "${guideTitle}". Navigating to guide details.`);
                    // window.location.href = `/guides/${card.dataset.guideId}`;
                });
            }
        });

        const viewAllGuidesLink = document.querySelector('.view-all-guides-link');
        if (viewAllGuidesLink) {
            viewAllGuidesLink.addEventListener('click', (event) => {
                event.preventDefault();
                alert('Navigating to the "All Travel Guides" page!');
                // window.location.href = '/guides';
            });
        }
    } else {
        console.warn('Featured Guides carousel elements not found.');
    }


    // 2. Travel Interests
    const showMoreInterestsBtn = document.getElementById('showMoreInterestsBtn');
    const hiddenInterestTags = document.querySelectorAll('.interest-tag.hidden');

    if (showMoreInterestsBtn && hiddenInterestTags.length > 0) {
        let tagsVisible = false; // Track state

        showMoreInterestsBtn.addEventListener('click', () => {
            hiddenInterestTags.forEach(tag => {
                tag.classList.toggle('hidden');
            });
            tagsVisible = !tagsVisible; // Toggle state

            if (tagsVisible) {
                showMoreInterestsBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
                showMoreInterestsBtn.classList.add('rotated');
            } else {
                showMoreInterestsBtn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
                showMoreInterestsBtn.classList.remove('rotated');
            }
        });
    } else {
        console.warn('Show More Interests button or hidden tags not found.');
    }

    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Toggle active class (single selection)
            interestTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            const interest = tag.dataset.interest;
            alert(`You selected "${interest}" interest. (This would filter content or lead to a category page.)`);
            // Example: filterContentByInterest(interest);
        });
    });


    // 3. Top Rated Experiences
    const topRatedTabs = document.querySelectorAll('.top-rated-tab');
    const topRatedContents = document.querySelectorAll('.top-rated-content');

    topRatedTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs and contents
            topRatedTabs.forEach(t => t.classList.remove('active'));
            topRatedContents.forEach(content => content.classList.remove('active-period'));

            // Add active to clicked tab
            tab.classList.add('active');
            const targetPeriod = tab.dataset.period;

            // Show corresponding content
            document.querySelector(`.top-rated-content[data-period-content="${targetPeriod}"]`).classList.add('active-period');
        });
    });

    const topRatedItems = document.querySelectorAll('.top-rated-item');
    topRatedItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const itemTitle = item.querySelector('.item-title').innerText;
            alert(`You clicked on "${itemTitle}". (This would lead to a detailed experience page.)`);
            // window.location.href = `/experiences/${encodeURIComponent(itemTitle)}`;
        });
    });

// ... (end of your existing JavaScript code) ...
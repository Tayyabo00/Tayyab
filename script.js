$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});

	// slide-up script
	$(".scroll-up-btn").click(function () {
		$("html").animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$("html").css("scrollBehavior", "auto");
	});

	$(".navbar .menu li a").click(function () {
		// applying again smooth scroll on menu items click
		$("html").css("scrollBehavior", "smooth");
	});

	// toggle menu/navbar script
	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});

	// typing text animation script
	var typed = new Typed(".typing", {
		strings: ["like Pro", "with me"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	var typed = new Typed(".typing-2", {
		strings: ["Video Editor", "Graphics Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	// owl carousel script
	$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 200,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	});

	$(".carouselo").owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 200,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	});
});

////////////////////////

// // Get modal and iframe elements
// const videoModal = document.getElementById('video-modal');
// const videoIframe = document.getElementById('video-iframe');
// const videoModalContent = document.getElementById('video-modal-content');

// // Define video IDs and corresponding thumbnail IDs
// const videoIds = {
//   'video-1-thumbnail': '1STWlh1BLSrZLa0IMWT6U2P5OkT9nwbb9',
//   'video-2-thumbnail': '1IkJg_YWiiBMQtavP7KkCd9KyPXShRrMj',
//   'video-3-thumbnail': '1OQPbwZQVe4cXI942hbx5-sQQQ0H3ZpJF',
//   'video-4-thumbnail': '1DmZwEnF5cxadz15-PyntnzmY4ZkV7ipE',
//   'video-5-thumbnail': '1pAjBITzm-gHSoARo5zRccYNHVkw_bnZb',
//   'video-6-thumbnail': '1-2R3RmgO1J2F6whlV-f4TOIOzUKzYBDJ',
//   'video-7-thumbnail': '1opT-Ywk7hzn8gjRmy_9BLDIFn1rVtgjR',
//   // Add more video IDs here
// };

// // Add event listeners to video thumbnails
// document.querySelectorAll('#video-thumbnails img').forEach((thumbnail) => {
//   thumbnail.addEventListener('click', (e) => {
//     // Get the video ID from the thumbnail ID
//     const videoId = videoIds[e.target.id];
    
//     // Set the iframe source to the corresponding video URL
//     videoIframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
    
//     // Show the modal
//     videoModal.style.display = 'block';
//   });
// });

// // Add event listener to modal background and close button
// videoModal.addEventListener('click', (e) => {
//   // Check if the click is on the modal background or close button
//   if (e.target.id === 'video-modal' || e.target.id === 'video-modal-content') {
//     // Reset the iframe source
//     videoIframe.src = '';
    
//     // Hide the modal
//     videoModal.style.display = 'none';
//   }
// });

////////////////////////
// Get modal and iframe elements
// const videoModal = document.getElementById('video-modal');
// const videoIframe = document.getElementById('video-iframe');

// Define video IDs and corresponding thumbnail IDs
const videoIds = {
    'video-1-thumbnail': '1STWlh1BLSrZLa0IMWT6U2P5OkT9nwbb9',
    'video-2-thumbnail': '1IkJg_YWiiBMQtavP7KkCd9KyPXShRrMj',
    'video-3-thumbnail': '1OQPbwZQVe4cXI942hbx5-sQQQ0H3ZpJF',
    'video-4-thumbnail': '1DmZwEnF5cxadz15-PyntnzmY4ZkV7ipE',
    'video-5-thumbnail': '1pAjBITzm-gHSoARo5zRccYNHVkw_bnZb',
    'video-6-thumbnail': '1-2R3RmgO1J2F6whlV-f4TOIOzUKzYBDJ',
    'video-7-thumbnail': '1opT-Ywk7hzn8gjRmy_9BLDIFn1rVtgjR',
	'video-8-thumbnail': '1mGNrnPvUFJGkVbeT4AG5aVms7CPDSvhO',
	'video-9-thumbnail': '1rJeWTHIJEQt-A1eGBhEKlJC4vviZ-uQU',	
	'video-10-thumbnail': '1_7eNZ5VRNqYNiYiqfx9iQZpeRHcbLvOc',
	'video-11-thumbnail': '19w8fLhxC27asqY0aERISBk9o-5wU3fuy',
	'video-12-thumbnail': '1st4RRFTYXOKd8yzG21Al-rbUkt009Iqe',
	'video-13-thumbnail': '1eop5Dhff0u8kfIQYyWYRjfjrzt5U_66h',
	
    // Add more video IDs here
};

// // Add event listeners to video thumbnails
// document.querySelectorAll('#video-thumbnails img').forEach((thumbnail) => {
//     thumbnail.addEventListener('click', (e) => {
//         // Get the video ID from the thumbnail ID
//         const videoId = videoIds[e.target.id];
        
//         // Set the iframe source to the corresponding video URL
//         videoIframe.src = `https://drive.google.com/file/d/${videoId}/preview`; // Use 'preview' instead of 'view'
        
//         // Show the modal
//         videoModal.style.display = 'block'; // Remove '!important'
//     });
// });

// // Add event listener to modal background to close it
// videoModal.addEventListener('click', (e) => {
//     // Check if the click is on the modal background
//     if (e.target.id === 'video-modal') {
//         // Reset the iframe source
//         videoIframe.src = '';
        
//         // Hide the modal
//         videoModal.style.display = 'none';
//     }
// });

//// new code for new tab///
// Add event listeners to video thumbnails
document.querySelectorAll('.thumbnail-container img').forEach((thumbnail) => {
	thumbnail.addEventListener('click', (e) => {
		// Get the video ID from the thumbnail ID
		const videoId = videoIds[e.target.id];

		// Open the Google Drive link in a new tab
		window.open(`https://drive.google.com/file/d/${videoId}/view`, '_blank');
	});
});


////////////////////////


const thumbnails = document.querySelectorAll('.thumbnail-container img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseenter', (e) => {
        const textElement = e.target.nextElementSibling;
        textElement.style.visibility = 'visible';
        textElement.style.opacity = '1';
    });

    thumbnail.addEventListener('mouseleave', (e) => {
        const textElement = e.target.nextElementSibling;
        textElement.style.visibility = 'hidden';
        textElement.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', () => {
	
    // --- DATA STORE ---
    const pageData = {
        home: {
            title: "Welcome to Twitch!",
            image: "Twitch-1440.webp",
            content: `
                <p>

			Twitch is the world's leading live streaming platform for gamers,
 creators, and communities. Watch live gameplay, esports tournaments,
 music performances, creative content, and interactive broadcasts from
  streamers around the globe. Join the chat, follow your favorite
 creators, and become part of the live entertainment experience.

		</p>
                
            `
        },
       		others: {
            title: "Live Streams",
            image: "Twitch-1440.webp",
            intro: ``,
            items: [
                
                {
                    id: 'Live_Stream_1',
                    title: 'Live Stream (20XXpo)',
                    image: 'others/Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=20xxpo&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<iframe src="https://www.twitch.tv/embed/20xxpo/chat?parent=cipher95.github.io"
        height="500"
        width="100%">
</iframe>
                    `
                },{
                    id: 'Live_Stream_2',
                    title: 'Live Stream (shroud)',
                    image: 'others/Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=shroud&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<iframe src="https://www.twitch.tv/embed/shroud/chat?parent=cipher95.github.io"
        height="500"
        width="100%">
</iframe>
                    `
                },{
                    id: 'Live_Stream_3',
                    title: 'Live Stream (TimTheTatman)',
                    image: 'others/Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=timthetatman&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<iframe src="https://www.twitch.tv/embed/timthetatman/chat?parent=cipher95.github.io"
        height="500"
        width="100%">
</iframe>
                    `
                },{
                    id: 'Live_Stream_4',
                    title: 'Live Stream (TenZ)',
                    image: 'others/Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=tenz&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<iframe src="https://www.twitch.tv/embed/tenz/chat?parent=cipher95.github.io"
        height="500"
        width="100%">
</iframe>
                    `
                }
            ]
        }
    };

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const scrollToBottomBtn = document.getElementById('scroll-to-bottom-btn');

	 // --- FUNCTIONS ---

    

    /**
     * Builds and sets up the interactive content for the 'Others' page.
     * @param {object} othersData - The 'others' data object from pageData.
     */
    function setupOthersPage(othersData) {
        const displayArea = document.getElementById('others-display-area');
        if (!displayArea || !othersData.items || othersData.items.length === 0) return;

        const navButtonsHTML = othersData.items.map((item, index) =>
            `<button class="others-nav-btn ${index === 0 ? 'active' : ''}" data-item-id="${item.id}">${item.title}</button>`
        ).join('');

        const firstItem = othersData.items[0];

        const contentHTML = `
            <div class="others-nav-container">
                ${navButtonsHTML}
            </div>
            <div class="others-content-display">
                
                <div id="others-item-description" class="others-content-text">
                    ${firstItem.description}
                </div>
            </div>
        `;

        displayArea.innerHTML = contentHTML;

		
        const navButtons = displayArea.querySelectorAll('.others-nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.getAttribute('data-item-id');
                const itemData = othersData.items.find(i => i.id === itemId);
                if (!itemData) return;
			
                document.getElementById('others-item-description').innerHTML = itemData.description;

                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

			            });
        });
    }

    
	
	
		

    function switchContent(pageKey) {
    const data = pageData[pageKey];
    if (!data) return;

    contentArea.classList.add('fade-out');

    setTimeout(() => {

        let contentHTML = '';

        // HOME PAGE
        if (pageKey === 'home') {
            contentHTML = data.content;
        }

        // OTHERS PAGE
        else if (pageKey === 'others') {
            contentHTML = `
                <div id="others-display-area"></div>
            `;
        }

        const html = `
            <div class="content-wrapper">
				<div class="content-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
				
                <div class="content-text">
                    <h2>${data.title}</h2>
                    ${contentHTML}
                </div>
            </div>
        `;

        // THIS WAS MISSING
        contentArea.innerHTML = html;

        // setup interactive section
        if (pageKey === 'others') {
            setupOthersPage(data);
        }

        contentArea.classList.remove('fade-out');

    }, 300);
}

    /**
     * Updates the clock and date display.
     */
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const timeString = now.toLocaleTimeString('en-US', timeOptions);
        const dateDayString = now.toLocaleDateString('en-US', dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }

    /**
     * Shows or hides the scroll buttons based on the user's scroll position.
     */
    function handleScrollButtons() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        if (scrollTop + clientHeight < scrollHeight - 50) {
            scrollToBottomBtn.classList.add('show');
        } else {
            scrollToBottomBtn.classList.remove('show');
        }
    }

     /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Smoothly scrolls the window to the bottom.
     */
    function scrollToBottom() {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }

       // --- EVENT LISTENERS & INITIALIZATION ---

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    
    window.addEventListener('scroll', handleScrollButtons);
    backToTopBtn.addEventListener('click', scrollToTop);
    scrollToBottomBtn.addEventListener('click', scrollToBottom);
    
    // Initialize the page
    switchContent('home');
    updateClock();
    setInterval(updateClock, 1000);
});

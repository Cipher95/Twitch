document.addEventListener('DOMContentLoaded', () => {
	
    // --- DATA STORE ---
    const pageData = {
        home: {
            title: "Welcome to Twitch!",
            image: "Twitch-1440.webp",
            content: `
                <p>Twitch is the world's leading live streaming platform for gamers, creators, and communities. Watch live gameplay, esports tournaments, music performances, creative content, and interactive broadcasts from streamers around the globe. Join the chat, follow your favorite creators, and become part of the live entertainment experience.</p>
                
            `
        },
       		streams: {
            title: "Live Streams",
            image: "Twitch-1440.webp",
            intro: ``,
            items: [
                
                {
                    id: '20xxpo',
                    title: '20XXpo',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=20xxpo&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/20xxpo/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'evo',
                    title: 'Evo',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=evo&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/evo/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'thegameawards',
                    title: 'thegameawards',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=thegameawards&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/thegameawards/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },
				{
                    id: 'shroud',
                    title: 'shroud',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=shroud&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/shroud/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'timthetatman',
                    title: 'TimTheTatman',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=timthetatman&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/timthetatman/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'summit1g',
                    title: 'summit1g',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=summit1g&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/summit1g/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'ninja',
                    title: 'Ninja',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=ninja&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/ninja/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'easportsfc',
                    title: 'easportsfc',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=easportsfc&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/easportsfc/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'tenz',
                    title: 'TenZ',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=tenz&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/tenz/chat?parent=cipher95.github.io"
						height="500"
						width="100%">
						</iframe>
                    `
                },{
                    id: 'kingsleague',
                    title: 'kingsleague',
                    image: 'Twitch-1440.webp',
                    description: `
                        <iframe src="https://player.twitch.tv/?channel=kingsleague&parent=cipher95.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
						<br/>
						<iframe src="https://www.twitch.tv/embed/kingsleague/chat?parent=cipher95.github.io"
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
     * Builds and sets up the interactive content for the 'Streams' page.
     * @param {object} streamsData - The 'streams' data object from pageData.
     */
    function setupStreamsPage(streamsData) {
        const displayArea = document.getElementById('streams-display-area');
        if (!displayArea || !streamsData.items || streamsData.items.length === 0) return;

        const navButtonsHTML = streamsData.items.map((item, index) =>
            `<button class="streams-nav-btn ${index === 0 ? 'active' : ''}" data-item-id="${item.id}">${item.title}</button>`
        ).join('');

        const firstItem = streamsData.items[0];

        const contentHTML = `
            <div class="streams-nav-container">
                ${navButtonsHTML}
            </div>
            <div class="streams-content-display">
                
                <div id="streams-item-description" class="streams-content-text">
                    ${firstItem.description}
                </div>
            </div>
        `;

        displayArea.innerHTML = contentHTML;

		
        const navButtons = displayArea.querySelectorAll('.streams-nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.getAttribute('data-item-id');
                const itemData = streamsData.items.find(i => i.id === itemId);
                if (!itemData) return;
			
                document.getElementById('streams-item-description').innerHTML = itemData.description;

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

        // STREAMS PAGE
        else if (pageKey === 'streams') {
            contentHTML = `
                <div id="streams-display-area"></div>
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
        if (pageKey === 'streams') {
            setupStreamsPage(data);
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

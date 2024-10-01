function searchStories() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        const title = story.querySelector('h2').innerText.toLowerCase();
        const summary = story.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(query) || summary.includes(query)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}


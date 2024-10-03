// Function to get query parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split("&");
    queries.forEach(query => {
        const [key, value] = query.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, " "));
    });
    return params;
}

// Display the story content
const params = getQueryParams();
document.getElementById("story-title").innerText = params.title || "Story Title";
document.getElementById("story-content").innerText = params.content || "No content available.";


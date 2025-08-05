document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("searchQuery").value.trim();
    if (!query) return;

    // Enhanced URL detection - handles more cases
    const isUrl = /^(?:(?:https?:\/\/)?(?:www\.)?)?[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?$/.test(query);

    try {
        let destination;
        if (isUrl) {
            // Handle URL formatting
            if (!query.includes('://')) {
                destination = `https://${query}`;
            } else {
                destination = query;
            }
            
            // Validate the constructed URL
            new URL(destination);
        } else {
            // Handle search query
            destination = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }

    //     window.open(destination, "_blank");
    // } catch (error) {
    //     // Fallback to Google search if URL construction fails
    //     window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    // }

     // CHANGED: Open in same window instead of new tab
     window.location.href = destination;

    } catch (error) {
        // Fallback to Google search if URL validation fails
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
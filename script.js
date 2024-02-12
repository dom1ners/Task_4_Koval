function filterBlogs() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var blogBlocks = document.querySelectorAll(".blog-block");

    blogBlocks.forEach(function (blogBlock) {
        var searchableText = blogBlock.innerText.toLowerCase();

        if (searchableText.includes(searchInput)) {
            blogBlock.style.display = "flex";
        } else {
            blogBlock.style.display = "none";
        }
    });
}

function filterByCategory() {
    var categoryFilter = document.getElementById("categoryFilter");
    var selectedCategory = categoryFilter.value;
    var blogBlocks = document.querySelectorAll(".blog-block");

    blogBlocks.forEach(function (blogBlock) {
        var category = blogBlock.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === category) {
            blogBlock.style.display = "flex";
        } else {
            blogBlock.style.display = "none";
        }
    });
}
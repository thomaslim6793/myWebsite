document.addEventListener("DOMContentLoaded", function() {
    var headerHTML = `
    <div id="header">
        <ul>
            <li><a href="/index.html" title="Main Page">Main</a></li>
            <li><a href="/contact/contact.html" title="How can you find me">Contact</a></li>
            <li><a href="/projects/projects.html" title="projects">Projects</a></li>
            <li><a href="/more/more.html" title="More About Me">More</a></li>
        </ul>
    </div>`;
    document.getElementById("header-container").innerHTML = headerHTML;
});

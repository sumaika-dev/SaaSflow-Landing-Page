const jobs = [
    { title: "Frontend Developer", company: "TechCorp", location: "Remote", type: "Full-time" },
    { title: "UI/UX Designer", company: "Designify", location: "Worldwide", type: "Contract" },
    { title: "Backend Engineer", company: "CloudNet", location: "Remote", type: "Full-time" },
    { title: "Product Manager", company: "SaaSly", location: "Remote", type: "Full-time" },
    { title: "Data Analyst", company: "DataFlow", location: "Worldwide", type: "Contract" }
];

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const noResults = document.getElementById("noResults");

function renderJobs(list) {
    jobList.innerHTML = "";
    if (list.length === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }

    list.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company-name">${job.company}</p>
            <div class="job-meta">
                <span class="badge">${job.location}</span>
                <span class="badge">${job.type}</span>
            </div>
            <button class="btn primary">Apply Now</button>
        `;
        jobList.appendChild(card);
    });
}

function filterJobs() {
    const search = searchInput.value.toLowerCase();
    const location = locationFilter.value;
    const type = typeFilter.value;

    const filtered = jobs.filter(job => {
        const matchSearch = job.title.toLowerCase().includes(search) || job.company.toLowerCase().includes(search);
        const matchLocation = location === "" || job.location === location;
        const matchType = type === "" || job.type === type;
        return matchSearch && matchLocation && matchType;
    });

    renderJobs(filtered);
}

searchInput.addEventListener("input", filterJobs);
locationFilter.addEventListener("change", filterJobs);
typeFilter.addEventListener("change", filterJobs);

// Initial render
renderJobs(jobs);
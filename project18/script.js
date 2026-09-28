// jobs data
let jobs=[
    {
        title:"Java Developer",
        company:"TechNova",
        location:"Jaipur",
        type:"Full Time",
        salary:65000,
        icon:"fa-brands fa-java"
    },
    {
        title:"Frontend Developer",
        company:"WebCraft",
        location:"Delhi",
        type:"Full Time",
        salary:55000,
        icon:"fa-solid fa-palette"
    },
    {
        title:"React Developer",
        company:"CodeSphere",
        location:"Bangalore",
        type:"Full Time",
        salary:80000,
        icon:"fa-brands fa-react"
    },
    {
        title:"Python Intern",
        company:"DataWorks",
        location:"Remote",
        type:"Internship",
        salary:20000,
        icon:"fa-brands fa-python"
    },
    {
        title:"Java Intern",
        company:"SoftLabs",
        location:"Jaipur",
        type:"Internship",
        salary:18000,
        icon:"fa-brands fa-java"
    },
    {
        title:"UI Developer",
        company:"PixelHouse",
        location:"Delhi",
        type:"Part Time",
        salary:30000,
        icon:"fa-solid fa-palette"
    },
    {
        title:"Backend Developer",
        company:"ServerPro",
        location:"Bangalore",
        type:"Full Time",
        salary:75000,
        icon:"fa-solid fa-gear"
    },
    {
        title:"React Native Intern",
        company:"AppWorld",
        location:"Remote",
        type:"Internship",
        salary:22000,
        icon:"fa-solid fa-mobile"
    },
];
// get html elements
let searchInput=document.getElementById('searchInput');
let locationSelect=document.getElementById('locationSelect');
let typeSelect=document.getElementById('typeSelect');
let sortSelect=document.getElementById('sortSelect');
let clearBtn=document.getElementById('clearBtn');
let jobContainer=document.getElementById('jobContainer');
let jobCount=document.getElementById('jobCount');
let emptyMessage=document.getElementById('emptyMessage');
// display jobs
function displayJobs(jobList){
    jobContainer.innerHTML="";
    jobCount.textContent=jobList.length+(jobList.length===1?" Job":" Jobs");
    if(jobList.length===0){
        emptyMessage.style.display='block';
        return;
    }
    emptyMessage.style.display='none';
    // all jobs return
    jobList.forEach(function(job){
        let card=document.createElement("div");
        card.className="job-card";
        card.innerHTML=`
            <div class="job-type">
                <div class="company-icon"><i class="${job.icon}"></i></div>
                <span class="job-type">${job.type}</span>
            </div>
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-details">
                <span>${job.location}</span>
                <span><i class="fa-solid fa-sack-dollar"></i> ₹${job.salary.toLocaleString()}</span>
            </div>
            <div class="job-bottom">
                <span class="salary">₹${job.salary.toLocaleString()}</span>
                <button class="apply-btn">Apply</button>
            </div>
        `;
        jobContainer.appendChild(card);
    });
}
// filter+search+sort
function updateJobs(){
    let searchText=searchInput.value.trim().toLowerCase();
    let selectedLocation=locationSelect.value;
    let selectedType=typeSelect.value;
    let selectedSort=sortSelect.value;
    // step 1 search
    let result=jobs.filter(function(job){
        let title=job.title.toLowerCase();
        let company=job.company.toLowerCase();
        return(title.includes(searchText)||company.includes(searchText));
    });
    // step 2 location filter
    if(selectedLocation!=="All"){
        result=result.filter(function(job){
            return job.location==selectedLocation;
        });
    }
    // step 3 type filter
    if(selectedType!=="all"){
        result=result.filter(function(job){
            return job.type.toLowerCase()==selectedType.toLowerCase();
        });
    }
    // step 4 sort
    if(selectedSort==="low"){
        result.sort(function(a,b){
            return a.salary-b.salary;
        })
    }
    if(selectedSort==="high"){
        result.sort(function(a,b){
            return b.salary-a.salary;
        })
    }
    // step5 display
    displayJobs(result);
}
searchInput.addEventListener("input",updateJobs);
locationSelect.addEventListener("change",updateJobs);
typeSelect.addEventListener("change",updateJobs);
sortSelect.addEventListener("change",updateJobs);
clearBtn.addEventListener("click",function(){
    searchInput.value="";
    locationSelect.value="All";
    typeSelect.value="all";
    sortSelect.value="default";
    updateJobs();
});
displayJobs(jobs);
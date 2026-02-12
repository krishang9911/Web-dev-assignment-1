// If there is a button inside a form, we will not target it

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");



// The format we have used here, is 
//    an ARRAY OF OBJECTS
//      This is what we call JSON(JavaScript Object Notation)
//      also, This is what we call RestfulAPI

const sampleEvents = 
[
    {
        title: "Web dev",
        date: "4-5-2029",
        category: "Workshop",
        description: "usd dhhw dudhuhweu uhhdu"
    },
    {
        title: "Web dev2",
        date: "4-6-2026",
        category: "conference",
        description: "bds whdiwiodjweu ewiwe hwhu"
    }
]


function createEventCard(eventData){
   const card=document.createElement("div");

   card.innerHTML=`
   <button class="delete-btn">X</button>
   <h3>${eventData.title}</h3>
   <div>${eventData.date}</div>
   <span>${eventData.category}</span>
   <p>${eventData.description}</p>
   `

   return card;
}

function addEvent(eventData){
    const emptyState = document.querySelector(".empty-state");  // used .(dot) because of class
    emptyState.remove();  // .remove() is a pre-defined method in JS

    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        data: eventData.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);
})
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
   card.className = "event-card";

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
    if (emptyState) {
        emptyState.remove();  // .remove() is a pre-defined method in JS
    }
    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);

    // Optional: clear form after submit
    eventForm.reset();
});


// We are overlapping or replacing the div tags(event cards) created
//  dynamically, by this <div class="empty-state">
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `
    <div class="empty-state">No events yet. Add your first event!</div>`
})


addSampleBtn.addEventListener("click", () => {
    sampleEvents.forEach(addEvent);
})

// Now, we will look at how an individual card(div) will be deleted
// Up until now, we have seen how to delete all cards simultaneously

eventContainer.addEventListener("click", (event) => {
    // closest(child element ki class) used to target the closest child
    //  element of the targeted element
    const card = event.target.closest('.event-card');  // event card
    console.log(card, "inside line 73");

    if(event.target.classList.contains("delete-btn")){
        card.remove();
    }

    if (!eventContainer.querySelector(".event-card")){
        eventContainer.innerHTML = ` <div
        class = "empty-state">No elements yet. Add your first event</div>`
    }
})

// Simple DOM Demo — show pressed key

document.addEventListener("keydown", (e) => {
    demoContent.textContent = "Key pressed: " + e.key;
});

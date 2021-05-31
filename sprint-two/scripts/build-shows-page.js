const newElementClass = (elementName, className) =>{
    const elem = document.createElement(elementName);
    elem.classList.add(className);
    return elem;
}

const newElementId = (elementName, IdName) =>{
    const elem = document.createElement(elementName);
    elem.id = IdName;
    return elem;
}

const main = document.querySelector("main")
const footer = document.querySelector("footer")


// Shows Container

    const shows= newElementClass("section", "shows")
    footer.insertAdjacentElement("beforebegin", shows)

// Shows Header

const showsHeader= newElementClass("h2", "shows__header")
showsHeader.innerText= "Shows"
shows.append(showsHeader);

// Shows array

let showsArray = [
    {
        dates: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        class: "object--show",
     },
     {
        dates: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        class: "object--hidden",
     },
     {
        dates: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        class: "object--hidden",
    },
    {
        dates: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        class: "object--hidden",
    },
    {
        dates: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        class: "object--hidden",
    },
    {
        dates: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        class: "object--hidden",
    },
]

// Container for shows

const showsContainer = newElementClass("div", "shows__container")
shows.append(showsContainer)

// Cards for each comment

const createCard = (show) =>{
    
    for (let i = 0; i < show.length; i++){

        const showsCard = newElementClass("article", "shows__card");

        let showsDateContainer = newElementClass("div", "shows__container-date");
        showsCard.append(showsDateContainer)
        
        let showsDateHeader = newElementClass("h3", "shows__subheader");
        showsDateHeader.classList.add(show[i].class)
        showsDateHeader.innerText = "DATES"
        showsDateContainer.append(showsDateHeader);
        
        let showsDate = newElementClass("p", "shows__date");
        showsDate.innerText = show[i].dates;
        showsDateContainer.append(showsDate);

        let showsVenueContainer = newElementClass("div", "shows__container-venue");
        showsCard.append(showsVenueContainer);

        let showsVenueHeader = newElementClass("h3", "shows__subheader");
        showsVenueHeader.classList.add(show[i].class)
        showsVenueHeader.innerText = "VENUE"
        showsVenueContainer.append(showsVenueHeader);
        
        let showsVenue = newElementClass("p", "shows__venue");
        showsVenue.innerText = show[i].venue;
        showsVenueContainer.append(showsVenue);

        let showsLocationContainer = newElementClass("div", "shows__container-location");
        showsCard.append(showsLocationContainer);

        let showsLocationHeader = newElementClass("h3", "shows__subheader");
        showsLocationHeader.classList.add(show[i].class)
        showsLocationHeader.innerText = "LOCATION"
        showsLocationContainer.append(showsLocationHeader);

        let showsLocation = newElementClass("p", "shows__location");
        showsLocation.innerText = show[i].location;
        showsLocationContainer.append(showsLocation);

        let showsButton = newElementClass("button","shows__button");

        showsButton.setAttribute("value", `${show[i].venue}, ${show[i].location}`);
        showsButton.addEventListener("click", event =>{
        console.log(event.srcElement.value)
        })
        
        showsButton.innerText = "BUY TICKETS"
        showsCard.append(showsButton)
          
        showsContainer.append(showsCard);
    }
}

createCard(showsArray);



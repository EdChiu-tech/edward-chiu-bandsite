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
showsHeader.innerText= "Show"
shows.append(showsHeader);

// Shows array

let showsArray = [
    {
        dates: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
     },
     {
        dates: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
     },
     {
        dates: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        dates: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        dates: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        dates: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
]

// Container for shows

const showsContainer = newElementClass("div", "shows__container")
shows.append(showsContainer)

// Cards for each comment

const createCard = (show) =>{
    
    for (let i = 0; i < show.length; i++){

        const showsCard = newElementClass("article", "shows__card");
        
        let showsDateHeader = newElementClass("h3", "shows__header");
        showsDateHeader.innerText = "DATES"
        showsCard.append(showsDateHeader);
        
        let showsDate = newElementClass("p", "shows__date");
        showsDate.innerText = show[i].dates;
        showsCard.append(showsDate);

        let showsVenueHeader = newElementClass("h3", "shows__header");
        showsVenueHeader.innerText = "VENUE"
        showsCard.append(showsVenueHeader);
        
        let showsVenue = newElementClass("p", "shows__venue");
        showsVenue.innerText = show[i].venue;
        showsCard.append(showsVenue);

        let showsLocationHeader = newElementClass("h3", "shows__header");
        showsLocationHeader.innerText = "LOCATION"
        showsCard.append(showsLocationHeader);

        let showsLocation = newElementClass("p", "shows__location");
        showsLocation.innerText = show[i].location;
        showsCard.append(showsLocation);

        let showsButton = newElementClass("button","shows__button")
        showsButton.innerText = "BUY TICKETS"
        showsCard.append(showsButton)
          
        showsContainer.append(showsCard);
    }
}

createCard(showsArray);
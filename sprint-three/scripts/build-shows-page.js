const apiUrl= "https://project-1-api.herokuapp.com/"
const apiKey = "?api_key=d8f6d26c-2e88-4ab6-a394-f63d767a0550"

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

// Container for shows

const showsContainer = newElementClass("div", "shows__container")
shows.append(showsContainer)

// Cards for each comment

const getShows = () =>{
    axios
        .get(`${apiUrl}showdates${apiKey}`)
        .then(response => {
            const commentsArray = response.data;
            commentsArray.forEach(show=>{

            const showsCard = newElementClass("article", "shows__card");

            let showsDateContainer = newElementClass("div", "shows__container-date");
            showsCard.append(showsDateContainer)
            
            let showsDateHeader = newElementClass("h3", "shows__subheader");
            showsDateHeader.classList.add(show.class)
            showsDateHeader.innerText = "DATES"
            showsDateContainer.append(showsDateHeader);
            
            let showsDate = newElementClass("p", "shows__date");
            showsDate.innerText = new Date(Number(show.date)).toDateString();
            showsDateContainer.append(showsDate);

            let showsVenueContainer = newElementClass("div", "shows__container-venue");
            showsCard.append(showsVenueContainer);

            let showsVenueHeader = newElementClass("h3", "shows__subheader");
            showsVenueHeader.classList.add(show.class)
            showsVenueHeader.innerText = "VENUE"
            showsVenueContainer.append(showsVenueHeader);
            
            let showsVenue = newElementClass("p", "shows__venue");
            showsVenue.innerText = show.place;
            showsVenueContainer.append(showsVenue);

            let showsLocationContainer = newElementClass("div", "shows__container-location");
            showsCard.append(showsLocationContainer);

            let showsLocationHeader = newElementClass("h3", "shows__subheader");
            showsLocationHeader.classList.add(show.class)
            showsLocationHeader.innerText = "LOCATION"
            showsLocationContainer.append(showsLocationHeader);

            let showsLocation = newElementClass("p", "shows__location");
            showsLocation.innerText = show.location;
            showsLocationContainer.append(showsLocation);

            let showsButton = newElementClass("button","shows__button");

            showsButton.setAttribute("data-value", `${show.place}, ${show.location}`);
            showsButton.addEventListener("click", event =>{
            console.log(event.srcElement.dataset.value)
            })
            

            showsButton.innerText = "BUY TICKETS"
            showsCard.append(showsButton)
            
            showsContainer.append(showsCard);
        })
    })
}
getShows();



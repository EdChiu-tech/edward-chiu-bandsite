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


// Comment Container div

    const commentDiv= newElementClass("div", "comment")
    footer.insertAdjacentElement("beforebegin",commentDiv)

// Comment header

    const commentHeader= newElementClass("h2", "comment__header")
    commentHeader.innerText= "Join the Conversation"
    commentDiv.append(commentHeader);

// Form 

    const form = newElementClass("form", "form")
    commentDiv.append(form);
    
    const formAvatar = newElementClass("div", "form__avatar")
    form.append(formAvatar)

// Form - Name  
    let labelName = newElementClass("label", "form__header")
    labelName.innerText = "Name"
    labelName.setAttribute("for", "userName")
    form.append(labelName)

    let inputName = newElementId("input", "form__input")
    inputName.setAttribute("type", "text")
    inputName.setAttribute("id", "userName")
    inputName.setAttribute("name", "userName")
    inputName.setAttribute("placeholder", "Enter your name")
    form.append(inputName)

// Form - Comments

    let labelComm = newElementClass("label", "form__header")
    labelComm.innerText = "Comment"
    labelComm.setAttribute("for", "input")
    form.append(labelComm)

    let inputComm = newElementId("input", "form__input")
    inputComm.setAttribute("type", "text")
    inputComm.setAttribute("id", "input")
    inputComm.setAttribute("name", "input")
    inputComm.setAttribute("placeholder", "Add a new comment")
    form.append(inputComm)

// Form - Submit button

    let submitBtn = newElementId("button", "form__button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.innerText = "COMMENT"
    form.append(submitBtn)

//

let commentsArray = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
     },
     {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
     },
     {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
    
]

// Container for all comments

const commentContainerDiv = newElementClass("div", "comment__container")
commentDiv.append(commentContainerDiv)

// Cards for each comment

const createCard = (comments) =>{
    
    for (let i = 0; i < comments.length; i++){

        const commentCard = newElementClass("article", "comment__card");
        
        let cardUser = newElementClass("h3", "comment__user");
        cardUser.innerText = comments[i].name;
        commentCard.append(cardUser);
        
        let cardDate = newElementClass("span", "comment__date");
        cardDate.innerText = comments[i].date;
        commentCard.append(cardDate);
        
        let cardComment = newElementClass("p", "comment__content");
        cardComment.innerText = comments[i].comment;
        commentCard.append(cardComment);
        
        commentContainerDiv.append(commentCard);
    }
}

createCard(commentsArray);

//  Grab user input and replace default comments

const formContainer = document.querySelector(".form")

const displayComment = (event) =>{
    event.preventDefault();

    commentContainerDiv.innerHTML = "";
    
    let userComment = {
        name: event.target.userName.value,
        date: event.placeholder,
        comment: event.target.input.value,
    }
    commentsArray.unshift(userComment);
    commentsArray.pop();
    createCard(commentsArray);
    formContainer.reset();
}

formContainer.addEventListener("submit", displayComment);


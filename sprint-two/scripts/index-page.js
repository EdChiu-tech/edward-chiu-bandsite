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
    
    const formAvatarContainer = newElementClass("div", "form__avatar-container")
    form.append(formAvatarContainer)

    const formAvatar = newElementClass("div", "form__avatar")
    formAvatarContainer.append(formAvatar)

    const formCommentContainer = newElementClass("div", "form__comment-container")
    form.append(formCommentContainer)


    

// Form - Name  

    let labelName = newElementClass("label", "form__header")
    labelName.innerText = "NAME"
    labelName.setAttribute("for", "userName")
    formCommentContainer.append(labelName)

    let inputName = newElementId("input", "form__input")
    inputName.classList.add("form__field")
    inputName.setAttribute("type", "text")
    inputName.setAttribute("id", "userName")
    inputName.setAttribute("name", "userName")
    inputName.setAttribute("placeholder", "Enter your name")
    formCommentContainer.append(inputName)

// Form - Comments

    let labelComm = newElementClass("label", "form__header")
    labelComm.innerText = "COMMENT"
    labelComm.setAttribute("for", "input")
    formCommentContainer.append(labelComm)

    let inputComm = newElementId("input", "form__input")
    inputComm.classList.add("form__field")
    inputComm.setAttribute("type", "comment")
    inputComm.setAttribute("id", "input")
    inputComm.setAttribute("name", "input")
    inputComm.setAttribute("placeholder", "Add a new comment")
    formCommentContainer.append(inputComm)


// Form - Submit button

const formButtonContainer = newElementClass("div", "form__button-container")
formCommentContainer.append(formButtonContainer);

    let submitBtn = newElementId("button", "form__button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.innerText = "COMMENT"
    formButtonContainer.append(submitBtn)

//

let commentsArray = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        avatar: "comment__avatar-default"
     },
     {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        avatar: "comment__avatar-default"
    },
     {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        avatar: "comment__avatar-default"
    },
    
]

// Container for all comments

const commentContainerDiv = newElementClass("div", "comment__container")
commentDiv.append(commentContainerDiv)

// Cards for each comment

const createCard = (comments) =>{
    
    for (let i = 0; i < comments.length; i++){

        const commentCard = newElementClass("article", "comment__card");

        let cardTextContainer = newElementClass("div", "comment__text-container")
        commentCard.append(cardTextContainer);
        
        let cardUserDateContainer = newElementClass("div", "comment__user-date-container")
        cardTextContainer.append(cardUserDateContainer)

        let cardUser = newElementClass("h3", "comment__user");
        cardUser.innerText = comments[i].name;
        cardUserDateContainer.append(cardUser);
        
        let cardDate = newElementClass("span", "comment__date");
        cardDate.innerText = comments[i].date;
        cardUserDateContainer.append(cardDate);
        
        let cardComment = newElementClass("p", "comment__content");
        cardComment.innerText = comments[i].comment;
        cardTextContainer.append(cardComment);

        let formDefaultAvatarContainer = newElementClass ("div", "comment__avatar-container")
        cardTextContainer.insertAdjacentElement("beforebegin",formDefaultAvatarContainer)

        let cardAvatar = newElementClass("div",comments[i].avatar);
        formDefaultAvatarContainer.append(cardAvatar);
        
        commentContainerDiv.append(commentCard);
    }
}

createCard(commentsArray);

// replace default comments

const formContainer = document.querySelector(".form")
let nameBox = document.getElementById("userName");
let inputBox = document.getElementById("input");


let currentDate = new Date();

const displayComment = (event) =>{
    event.preventDefault();

    let success = false;

    commentContainerDiv.innerHTML = "";

    // Check comment box to be empty, either full, both full

    if(nameBox.value !== "" && inputBox.value !== ""){
        nameBox.classList.remove("form__field--error")
        inputBox.classList.remove("form__field--error")
        success = true;
        
    }else if (nameBox.value === "" && inputBox.value !==""){
        nameBox.classList.add("form__field--error")
        inputBox.classList.remove("form__field--error")

    
    }else if (inputBox.value === "" && nameBox.value !==""){
        inputBox.classList.add("form__field--error")
        nameBox.classList.remove("form__field--error")

    }else{
        inputBox.classList.add("form__field--error")
        nameBox.classList.add("form__field--error")
    }
    
    if (success) {

        let userComment = {
            name: event.target.userName.value,
            date: currentDate.toLocaleDateString("en-us", {day: "2-digit", month: "2-digit", year: "numeric"}),
            comment: event.target.input.value,
            avatar: "form__avatar",
        }
        //  pushes new comment into array, and removes last comment
        commentsArray.unshift(userComment);
        commentsArray.pop();
    }
    
    createCard(commentsArray);
    formContainer.reset();

}

formContainer.addEventListener("submit", displayComment);

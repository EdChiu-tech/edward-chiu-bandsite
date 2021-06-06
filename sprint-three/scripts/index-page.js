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

    let inputComm = newElementId("textarea", "form__input")
    inputComm.classList.add("form__field")
    inputComm.setAttribute("type", "text")
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

// Container for all comments

const commentContainerDiv = newElementClass("div", "comment__container")
commentDiv.append(commentContainerDiv)

// Cards for each comment

const getComments = () =>{
    axios
        .get(`${apiUrl}comments${apiKey}`)
        .then(response => {
            const commentsArray = response.data;
            commentsArray.sort((a,b) =>{
                return b.timestamp - a.timestamp});

            commentsArray.forEach(comment=>{
                
                const commentCard = newElementClass("article", "comment__card");

                let cardTextContainer = newElementClass("div", "comment__text-container")
                commentCard.append(cardTextContainer);

                let cardUserDateContainer = newElementClass("div", "comment__user-date-container")
                cardTextContainer.append(cardUserDateContainer)

                let cardUser = newElementClass("h3", "comment__user");
                cardUser.innerText = comment.name;
                cardUserDateContainer.append(cardUser);

                let cardDate = newElementClass("span", "comment__date");
                cardDate.innerText = new Date(comment.timestamp).toLocaleDateString("en-us", {day: "2-digit", month: "2-digit", year: "numeric"});
                cardUserDateContainer.append(cardDate);

                let commentContent = newElementClass("p", "comment__content");
                commentContent.innerText = comment.comment;
                cardTextContainer.append(commentContent);

                let formDefaultAvatarContainer = newElementClass ("div", "comment__avatar-container")
                cardTextContainer.insertAdjacentElement("beforebegin",formDefaultAvatarContainer)

                let cardAvatar = newElementClass("div","comment__avatar-default");
                formDefaultAvatarContainer.append(cardAvatar);

                let buttonContainer = newElementClass("div", "comment__button-container");
                commentCard.append(buttonContainer);
                
                const id = comment.id
                let likeButton = newElementClass("button","like__button");
                likeButton.innerText = `${comment.likes}`

                //Like Button

                likeButton.addEventListener("click", event=>{
                    axios
                        .put(`${apiUrl}comments/${id}/like${apiKey}`)
                        .then(response =>{
                        // commentContainerDiv.innerHTML = "";
                        // getComments();
                        event.srcElement.innerText = (`${response.data.likes}`)
                        console.log(response.data.likes)
                        })
                        .catch(error =>{
                            console.log(error)
                        })
                    })
                
                // Delete

                let deleteButton = newElementClass("button","delete__button");
                deleteButton.innerHTML = `<img src = "../assets/icons/icon-delete.svg" alt = "trash can">`

                    deleteButton.addEventListener("click", event=>{
                        axios
                        .delete(`${apiUrl}comments/${id}${apiKey}`)
                        .then(response =>{
                            commentContainerDiv.innerHTML = "";
                            getComments();
                            console.log(response)

                        })
                        .catch(error =>{
                            console.log(error)

                        })
                    })

                buttonContainer.append(likeButton);
                buttonContainer.append(deleteButton);
                commentContainerDiv.append(commentCard);
            })
    })
}

getComments();


const formContainer = document.querySelector(".form")
let nameBox = document.getElementById("userName");
let inputBox = document.getElementById("input");


const displayComment = (event) =>{
    event.preventDefault();

    // Check comment box to be empty, either full, both full

    if(nameBox.value !== "" && inputBox.value !== ""){
        nameBox.classList.remove("form__field--error")
        inputBox.classList.remove("form__field--error")
            commentContainerDiv.innerHTML = "";
            axios
                .post(`${apiUrl}comments${apiKey}`, {
                    "name":event.target.userName.value,
                    "comment": event.target.input.value,
                })
                .then(response =>{
                    console.log("post successful", response);
                    getComments();
                })
                .catch(error => {
                    event.target.userName.classList.add("form__field--error")
                    console.log(`name and comment must be included: ${error}`)
                })

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
    formContainer.reset();
}

formContainer.addEventListener("submit", displayComment);


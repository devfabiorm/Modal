const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonToSignout = document.querySelector("dialog #confirm-signout");
const buttonToCancel = document.querySelector("dialog #cancel-signout");

button.onclick = function () {
    modal.showModal();
    modal.style.animation = 'modalIn .55s'
}

buttonToSignout.onclick = function () {
    console.log("Clicked");
}

buttonToCancel.onclick = function () {
    modal.style.animation = 'modalOut .65s'
    setTimeout(() => modal.close(), 595);
}
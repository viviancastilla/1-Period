const input = document.querySelector('#liveInput');
const displayText = document.querySelector('#displayText');


function showLiveText(event){
    const typedText = event.target.value;

    displayText.textContent = "You typed: " + typedText;
}

//live text//
input.addEventListener("input", showLiveText);


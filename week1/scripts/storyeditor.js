function displayStory() //gets the value in the textarea and saves it to var storyHTML. It then displays that info to story display.
{
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
}

function saveStory() //gets value of the story name and the textarea and saves whats in storyHTML in local storage as whatever value is in storyName
{
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
}

function loadStory() //grabs the value in name_input and saves it as storyName. Then gets the textarea info in local storage tied to that same storyName and displays that info in story_editor section.
{
    var storyName = document.getElementById("name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}


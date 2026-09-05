const inputEl = document.getElementById('input')
const infoTextEl = document.getElementById('info-text')
const meaningContainerEl = document.getElementById('meaning-container')
const title = document.getElementById('title')
const meaningEl = document.getElementById('meaning')
const audioEl = document.getElementById('audio')

async function fetchAPI (word){
    try {
        infoTextEl.innerText = `Searching for ${word}`
        infoTextEl.classList.remove("hidden")
        meaningContainerEl.classList.add("hidden")

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then(res => res.json())

        infoTextEl.classList.add("hidden")
        meaningContainerEl.classList.remove("hidden")

        if(result.title){
            title.innerText = word;
            meaningEl.innerText = "word not found"
            audioEl.classList.add("hidden")
        }

        title.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition
        const audio = result[0].phonetics.find(item => item.audio)
        if (audio) {
            audioEl.src = audio.audio
            audioEl.classList.remove("hidden")
        } else {
            audioEl.classList.add("hidden")
        }
    } catch (error) {
        console.log(error)
    }
}

inputEl.addEventListener("keyup", function(e) {
    if(e.key === "Enter" && inputEl.value){
        fetchAPI(inputEl.value)
    }
})
const input = document.getElementById('inputText');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    let input_text = input.value;
    input_text = input_text.trim();
    if(input_text === '') {
        let msg = "Please enter some text";
        output.textContent = msg;
        return;
    }

    let result = await convertToMinion(input_text);

    output.textContent = result;
})

async function convertToMinion(text) {
    let res = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`);
    console.log(res);
    let data;

    if(res.status !== 200) {
        let msg = "Unable to fetch the result due to some issue with API..."
        return msg;
    } else {
        data = await res.json();
    }

    return data.contents.translated
}
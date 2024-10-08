let availableKeywords = [
    'HTML',
    'CSS',
    'Web design tutorials',
    'Mary',
    'Javascript',
    'where to learn coding online',
    'where to learn web design',
    'how to create website',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let filteredResults = [];
    let input = inputBox.value.trim();
    if(input.length){
        filteredResults = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(filteredResults);

    if(!filteredResults.length){
        resultsBox.innerHTML = '';
    }
}

function display(filteredResults){
    const content = filteredResults.map((item)=>{
        return "<li onclick='selectInput(this)'>"+ item + "</li";
    });

    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul";
}

function selectInput(li){
    inputBox.value = li.textContent;
    resultsBox.innerHTML = '';
}
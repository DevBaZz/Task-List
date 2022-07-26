function getSingleHTMLElement(element:string):HTMLElement | null  {
    return document.querySelector(element);// getting element from the DOM
};
function createHTMLElement(ele:string):HTMLElement{
    return document.createElement(ele);
}

const form = getSingleHTMLElement('.form') as HTMLFormElement;
const tasklist =  getSingleHTMLElement('.collections') as HTMLUListElement;
const clearTaskBTN = getSingleHTMLElement('.cleartask');
const filter = getSingleHTMLElement('#filter');
const taskInput = getSingleHTMLElement('#task') as HTMLInputElement;

// Load all events function
loadAllEvent()

// Events Function
function loadAllEvent(){
    form?.addEventListener('submit', addtask);
}

function addtask(e:any){
    const taskValue = (taskInput.value).trim();
    if(taskValue === ''){
        return  alert('This is empty taskInput');
    }
    // Create HTML element
    const li = createHTMLElement('li');
    const liValue = document.createTextNode(taskValue);

    // Appending Elements
    li.classList.add('collection-item');
    li.appendChild(liValue);
    tasklist.appendChild(li);

    // Clear
    taskInput.value = '';
    
    e.preventDefault();
}
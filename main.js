const color=['#FCFFC1','#FFE1FF','#CCE0AC','#F2E8C6','#2C4E80','#FFDEB9'];
let current_color=0;
const changecolor=getId('color-change');
changecolor.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor = color[current_color];
    if (current_color === color.length - 1) {
        current_color=0;
        
    }
    else{
        current_color++;

    }
    
});
const date = new Date();

// Get the weekday (e.g., Monday, Tuesday)
const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

// Get the month (e.g., January, February)
const month = date.toLocaleDateString('en-US', { month: 'short' });

// Get the date (day of the month)
const dayOfMonth = date.getDate();
const year = date.getFullYear();
console.log(weekday,month,dayOfMonth,year);



const doneTask=getId('done-task');
const taskCount=getId('task');
const timeinput=getId('current-date');
timeinput.innerHTML=`
<h1>${weekday}, <br>
                        <span class="font-bold">${month} ${dayOfMonth} ${year}</span>
                        </h1>



`;


        
        



const completedBtn=document.querySelectorAll('.com-btn');
for (let i = 0; i < completedBtn.length; i++) {
    const element = completedBtn[i];
    element.addEventListener('click',(e)=>{
        const convertDoneTask=getIdText('done-task');
        const converTaskCount=getIdText('task');
        doneTask.innerText=convertDoneTask+1;
        taskCount.innerText=converTaskCount-1;
        completedBtn[i].setAttribute('disabled','disabled');
        completedBtn[i].style.backgroundColor='#ced6ff';
        alert('Board updated Successfully');
        if (taskCount.innerText==='0') {
            alert('Congrates!!! You have completed all current task');
            
        }
        const parent=completedBtn[i].parentElement.parentElement;
        const taskheading=parent.children[1].innerText;
        const history=getId('completed-history');
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let timeampm=now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit",second: "2-digit", hour12: true });
        console.log(timeampm);
        // console.log(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }))
        let time = hours + ":" + minutes + ":" + seconds;
        history.innerHTML+=`
        <div class="complete-content bg-[#f4f7ff] h-[65px] w-[80%] mx-auto rounded-lg flex items-center justify-center p-2 my-2">
                            <h1 class="font-bold text-sm">You have Completed the task ${taskheading} at  ${timeampm}</h1>
                        </div>
        `;
        console.log(time);
    });
    
    
}

const clearHistory=getId('clear-history');
clearHistory.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('clicked');
    
    const modal = document.getElementById('completed-history');

        // Remove all child nodes
        while (modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }
    
    
});

const discover=getId('discover');

discover.addEventListener('click',(e)=>{

    e.preventDefault();
    window.location.href='question.html';
});

// const task_container=document.querySelectorAll('#task-container')
// task_container.forEach(element => {
//     // element.classList.add('transition-transform','duration-500', 'hover:scale-105');
//     console.log(element.childElementCount);
//     const d=element.parentNode;
//     console.log(d);
    
    
    
// });

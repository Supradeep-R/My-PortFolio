const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian =>{
    const icon = accordian.querySelector('.icon');
    const answer=accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})

const eachProject = document.querySelector('.each-project');
console.log(eachProject);
const projectInfo = document.querySelector('.project-info')

eachProject.addEventListener('click',()=>{
    projectInfo.style.display='block';
})
import {project} from "./sidebar.js";
import {todos} from "./sidebar.js"
import sidebar from "./sidebar.js";
function projectpage(){
   

    const maincont = document.createElement("div");

    maincont.id ="content1";

    const sidebarcont = document.createElement("div");
    sidebarcont.id ="sidebar";

    //empty container for potentially created projects
    const listcontainer = document.createElement("div");
    listcontainer.id = "listcontainer";
    console.log(listcontainer);
    sidebarcont.appendChild(listcontainer);

    // const homecard = document.createElement("div");
    // homecard.innerHTML ="Default";
    // home

    //button for creating more "ToDos" or Projects
    const createbutton = document.createElement("button");
    createbutton.id = "createbutton";
    createbutton.innerHTML ="New Project";
    createbutton.addEventListener("click", ()=> openProjectForm() )


    sidebarcont.appendChild(createbutton);

    document.body.appendChild(maincont);
    maincont.appendChild(sidebarcont);



    
    
    const projectcont = document.createElement("div");
    projectcont.id ="project";

    // const content = document.getElementById("content");
    //form creation for project info
    const form1 = projectform(projectcont);

    projectcont.appendChild(form1);

//     const taskformcont = taskform(projectcont);    //make this happen in todocontainer
//    projectcont.appendChild(taskformcont);

    maincont.appendChild(projectcont);
    
    createProject("Default Project");


}

export default projectpage();
   
// createProject("Default");

function openProjectForm(){
    const form = document.getElementById("formcontainer");
    form.style.display = "flex"; //displays form 
 
}


//rethink what this is projects are not objects but the tasks are maybe use an array of objects for each project;
function projectform(projectcont){

    const form = document.createElement("form");
    //this is what needs to be hidden or displayed based off selected tab
    form.id= "formcontainer";
    // form.setAttribute("class","formcontainer");
    form.style.display = "none";
    // form.addEventListener("click",) ///added stuff  
    projectcont.appendChild(form);

    //title
    const title = document.createElement("label");
    title.setAttribute("for","title");
    title.id = "titlelabel"
    title.innerHTML = "Title";
    form.appendChild(title);

    const titleinput = document.createElement("input");
    titleinput.setAttribute("type","text");
    titleinput.setAttribute("placeholder","Enter a Project Title");
    titleinput.setAttribute("id", "titleinput");
    titleinput.setAttribute("name","title");

    form.appendChild(titleinput);



    //submit
    const submitbutton = document.createElement("button");
    submitbutton.setAttribute("type","submit");
    submitbutton.id = "submit";
    submitbutton.innerHTML = "Create Project";
    submitbutton.setAttribute("class","btn");
    form.appendChild(submitbutton);
    
    //takes form input and makes a project object and gets it to displays on sidebar and creates the todolist container for project
    // createProject("testing");

    form.addEventListener('submit', function(event){

        event.preventDefault();
        //getting value thats inside title element
        const title = document.getElementById("titleinput").value;

        createProject(title);
        form.reset();

    })
 

    return form;
}


function createProject(title){

        // const title = document.getElementById("titleinput").value;
        // const description = ""; //document.getElementById() // dont need for project but for task

        //when submited create new project object 
        const listcontainer = document.getElementById("listcontainer");    //exists
        console.log("testing");
        
        //cards that store project name are clickable
        const projectcard = document.createElement("div");    
        projectcard.setAttribute("class","projectcard");

         
        //creates a project object
        const project1 = new project(title);
        projectcard.innerHTML = project1.projectname;
        console.log(project1.projectname);

        //container for the project todo list
        const todocontainer = document.createElement("div");
        todocontainer.setAttribute("class","todocontainer");
        //remove once figured out                                 maybe add a function here that creates all the html for the todolist container
        
        //makes form for each todo
        // taskform(todocontainer);
        //creates todolist page work on this 
        todolist(todocontainer,project1);

        // todocontainer.innerHTML = project1.projectname;
        //hides display until clicked on
        // todocontainer.style.display = "none";

        const form = document.getElementById("formcontainer");   //exists
        console.log("makes it here");
        if(form != null){
            form.style.display ="none";
        }
        // console.log("makes it here");

        displayInfo(todocontainer);
        projectcard.addEventListener("click",()=> displayInfo(todocontainer))

        // console.log("makes it here pt2");


        //adds todocontainer to to project container
        const projectcont = document.getElementById("project"); //exist
        if (projectcont != null){
            projectcont.appendChild(todocontainer);
        }
        else{
            console.log("projectcontainer is null");
        }

        // adds project to list 
        if(listcontainer != null){
            listcontainer.appendChild(projectcard);
        }
        console.log("submitted");

}



//function that creates the projects specific container html elements has the button that makes the todo objects and displays all the todos
function todolist(todocontainer,project1){

    // todocontainer.innerHTML = project1.projectname;
    // console.log("this works now");
    const projecttitle = document.createElement("textarea");
    projecttitle.id = "projecttitle";
    projecttitle.setAttribute("rows", "1");
    projecttitle.setAttribute("columns","100");
    projecttitle.innerHTML= project1.projectname;
    //use stackloverflow bookmark to get edit input from textarea and store it in project name
    todocontainer.appendChild(projecttitle);


    const createTaskbutton = document.createElement("button");
    createTaskbutton.id = "createTaskbutton";
    createTaskbutton.innerHTML = "+ Add Task"
    todocontainer.appendChild(createTaskbutton);
    
    //shows task form
    createTaskbutton.addEventListener("click",() => taskform(project1,todocontainer,createTaskbutton));
    createTaskbutton.addEventListener("click", () => {createTaskbutton.style.display = "none";})
    // todocontainer.appendChild(createTaskbutton);


    // const todocontainer = document.createElement("div");
    // //this is what needs to be hidden or displayed based off selected tab
    // todocontainer.id= "todocontainer";

    // projectcont.appendChild(todocontainer);


} 

//displays the correct project tabs todo list
function displayInfo(todos){

    var tabcontent = document.getElementsByClassName("todocontainer");
    for (let i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i] != null){
         tabcontent[i].style.display = "none";
        }
        console.log(tabcontent[i].id +" this is tabcontent display variable");
    }
    var formcontent = document.getElementById("formcontainer");
    if(formcontent != null){
        formcontent.style.display ="none";
    }
    todos.style.display = "flex";
    
}

//this is gonna be the submit for task form
function addTask(project,todocontainer,taskformcont){

    // taskform(todocontainer);
    event.preventDefault();

    // project.todoitems.push("supdude");
    const taskname = document.getElementById("nameinput").value; 
    const description = document.getElementById("descinput").value;

     const task = new todos(taskname, description,"dueDate","priority","notes","checklist");

     project.todoitems.push(task);

    const taskcard = document.createElement("div");
    taskcard.setAttribute("class","taskcard");
    // taskcard.innerHTML = task.title;

    const tasktitle = document.createElement("div");
    tasktitle.id = "cardtitle";
    tasktitle.innerHTML = task.title;

    taskcard.appendChild(tasktitle);

    const taskdesc = document.createElement("div");
    taskdesc.id = "carddesc";
    taskdesc.innerHTML = task.description;
    
    taskcard.appendChild(taskdesc);

    const checkbox = document.createElement("div");
    checkbox.id = "checkbox";

    checkbox.addEventListener("click", () => {
        if(checkbox.style.backgroundColor == "black" ){
            checkbox.style.backgroundColor = "white";
        }
        else{
        checkbox.style.backgroundColor = "black"
        }
    
    })

    const taskcontainer = document.createElement("div");
    taskcontainer.id ="maintaskcont";

    taskcontainer.appendChild(checkbox);

    taskcontainer.appendChild(taskcard);


    const removetask = document.createElement("div");
    removetask.id = "removetask";
    removetask.innerHTML = "remove";

    removetask.addEventListener("click",() => {taskcontainer.remove();})
    
    taskcontainer.appendChild(removetask);

    // todocontainer.appendChild(checkbox);
    // taskcontainer.appendChild(checkbox);



    todocontainer.appendChild(taskcontainer);

//    taskformcont.remove();
    // console.log(taskname);
//    taskformcont.remove();

}
function taskform(project1,todocontainer,createTaskbutton){

    // const todocontainer = document.getElementById("todo")

    const taskformcont = document.createElement("form");
    taskformcont.id ="taskformcont";
    
    //nameinput
    const nameinput = document.createElement("input");
    nameinput.setAttribute("type","text");
    nameinput.setAttribute("placeholder","Task Title");
    nameinput.setAttribute("id", "nameinput");
    nameinput.setAttribute("name","taskname");
    // nameinput.setAttribute("required", "");
    nameinput.required = true;

    taskformcont.appendChild(nameinput);

    //description input
    const descinput = document.createElement("input");
    descinput.setAttribute("type","textarea");
    descinput.setAttribute("placeholder","Description");
    descinput.setAttribute("id", "descinput");
    descinput.setAttribute("name","description");

    taskformcont.appendChild(descinput);

    //contaienr for date and priority drop down
    const datepriority = document.createElement("div");
    datepriority.id ="dateprioritybox";

    taskformcont.appendChild(datepriority);


    //dropdowns work on later maybe for now hard coded


    //submit and cancel button
    const buttonscontainer = document.createElement("div");
    buttonscontainer.id = "buttonscontainer";

    taskformcont.appendChild(buttonscontainer);    


    //cancel button
    const cancel = document.createElement("button");
    cancel.id = "taskcancel";
    cancel.innerHTML = "Cancel";
    
    buttonscontainer.appendChild(cancel);

    cancel.addEventListener("click",(event) => {

        event.preventDefault();
        createTaskbutton.style.display ="block";
        taskformcont.remove();

    })

    const submit = document.createElement("submit");
    submit.id = "tasksubmit";
    submit.innerHTML = "Submit";
    
    buttonscontainer.appendChild(submit);

    submit.addEventListener("click",(event) => addTask(project1,todocontainer,taskformcont));
    submit.addEventListener("click",(event) => {
        
        event.preventDefault();
        createTaskbutton.style.display ="block";

        taskformcont.remove();

    })
    // const createTaskbutton = document.getElementById("createTaskbutton");


    todocontainer.appendChild(taskformcont);


}
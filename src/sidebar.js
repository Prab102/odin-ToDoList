
export function project(projectname){

    this.todoitems = [];

    this.projectname = projectname;

}

export function todos(title, description, dueDate, priority, notes, checklist ){

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority =priority;
    this.notes = notes;
    this.checklist = checklist; 

}


function sidebar(){
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

        // listcontainer.innerHTML= "hello";

    return sidebarcont;
}

export default sidebar();

//create and display object like library books stuff
//when crating a new project prompt user for properties like title description....
//the information should be displayed on the projectpage


//openign form for submition
function openProjectForm(){
    const form = document.getElementById("formcontainer");
    form.style.display = "flex"; //displays form 
 
}



//create the project object  this is the final step 
// function createProject(){
//     const listcontainer = document.getElementById("listcontainer");
//     console.log("testing");
//     //this was added to openprojectform

//     // const form = document.getElementById("formcontainer");
//     // form.style.display = "flex"; //displays form 

//     //cards that store project name are clickable
//     const projectcard = document.createElement("div");
//     projectcard.setAttribute("class","projectcard");

//     // const test1 = 
//     //user form asking for a name for the project    temporary need to get rid of
//     // const test = prompt("Enter a project name ")  //required
//     const project1 = new project(test);

//     projectcard.innerHTML = project1.projectname;

//     // projectcard.addEventListener("click",()=> displayInfo(project1))
//     const todocontainer = document.createElement("div");
//     //this is what needs to be hidden or displayed based off selected tab
//     // todocontainer.id= "todocontainer";
//     todocontainer.setAttribute("class","todocontainer");
//     todocontainer.innerHTML = project1.projectname;
//     todocontainer.style.display = "none";
//     //makes display nothidden
//     projectcard.addEventListener("click",()=> displayInfo(todocontainer))


//     const projectcont = document.getElementById("project");
//     projectcont.appendChild(todocontainer);


//     //added up to here

//     listcontainer.appendChild(projectcard);

//     console.log(project1);


// }

// function displayInfo(todos){

//     var tabcontent = document.getElementsByClassName("todocontainer");
//     for (let i = 0; i < tabcontent.length; i++) {
//          tabcontent[i].style.display = "none";
//         console.log(tabcontent[i].id +" this is tabcontent display variable");
//     }
//     var formcontent = document.getElementById("formcontainer");
//     formcontent.style.display ="none";
//      todos.style.display = "flex";
//     // const todocontainer = document.createElement("div");
//     // //this is what needs to be hidden or displayed based off selected tab
//     // todocontainer.id= "todocontainer";
//     // todocontainer.innerHTML = project.projectname;
//     // const projectcont = document.getElementById("project");
//     // projectcont.appendChild(todocontainer);
// }

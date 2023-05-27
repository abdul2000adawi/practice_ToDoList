const form=document.querySelector("#toDo");
const input=document.querySelector("#list");
const list=document.querySelector("#tasks");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     const taskName=input.value;
//     if(input.value!==""){
//     const newLi=document.createElement("LI");
//     newLi.innerText=taskName;
//     list.append(newLi);
//     const button=document.createElement("BUTTON")
//     button.innerText="delet";
//     button.className="button is-normal is-responsive is-dark is-inverted is-rounded is-hovered "
//     button.addEventListener('click',function(e){
//         newLi.remove();
//     })
//     const button2=document.createElement("BUTTON")
//     button2.innerText="edit";
//     button2.className="button is-normal is-responsive is-dark is-inverted is-rounded is-hovered "
//     button2.addEventListener('click',function(e){
//         if(button2.innerText.toLowerCase()=='edit'){
//             button2.innerText='Save';
//             input.focus();
//         }else{
//             button2.innerText='Edit';
//         }
//     })
//     newLi.append(button2);
//     newLi.append(button);
//     input.value=""
//     }
// })
form.addEventListener('submit',function(e){
    e.preventDefault();
    const new_task=input.value;
    if(!new_task){
        alert("Please Enter a Task")
    }
    else{
    const task_content=document.createElement('div')
    const text_content=document.createElement('div')
    task_content.className="row align-items-start justify-content-center"
    text_content.className="col-6"
    task_content.appendChild(text_content);
    const task_input=document.createElement('input')
    task_input.type='text';
    task_input.className="input is-small is-rounded mb-1 ml-1 mr-1 mt-1"
    task_input.value=new_task;

    task_input.setAttribute("readonly","readonly");
    text_content.append(task_input);

    const actions=document.createElement('div');
    actions.className="col-2"
    const edit_task=document.createElement('button')
    edit_task.innerText="edit"
    edit_task.className="button is-small is-responsive is-info is-rounded is-hovered mb-1 ml-1 mr-1 mt-1"

    const delete_task=document.createElement('button')
    delete_task.innerText="delete"
    delete_task.className="button is-small is-responsive is-danger is-rounded is-hovered mb-1 ml-1 mr-1 mt-1"

    actions.append(edit_task)
    actions.append(delete_task);

    task_content.appendChild(actions)
    list.append(task_content)
    input.value=""
    edit_task.addEventListener('click',function(e){
                if(edit_task.innerText.toLowerCase()=='edit'){
                    edit_task.innerText='Save';
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                }else{
                    edit_task.innerText='Edit';
                    task_input.setAttribute("readonly", "readonly");
                }
            })
    delete_task.addEventListener('click',function(e){
        task_content.remove(text_content);
    })
}

})



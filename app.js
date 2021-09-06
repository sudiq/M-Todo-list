var root = document.getElementById('root')
var task
var taskArray = []

function newTask(data,index) {
    return m('div.task',[
        m('input[type=checkbox]'),
        m('span.title',data),
        m('button.delete',{
            onclick: function() {
                taskArray.splice(index,1)
            }
        })
    ])
}

m.mount(root, {
    view: function(scope) {
        return m("main",[
            m('div#inputwrap',[
                m('input[type=text]',{
                    placeholder:'Enter a Task',
                    id : "taskInp",
                    value: task,
                    oninput: function(){
                        task = this.value
                    }
                    
            }),
            m('button#add', {
                onclick: function() {
                    if(task){
                        taskArray.push(task)
                        task = ""
                    }
                    
                }
            })

            ]),

            m('div#taskwrap',[].concat(taskArray.map((data,index) => newTask(data,index))) )

        ])
    }
})

function addHabit(ele) {
    if(event.key === "Enter") {
        console.log("pressed");
        document.getElementById("habit").innerHTML += `
            <div class="daily-task">
                <div class="task-inc">
                    <button class = "task-increment" type = "button"> + </button>
                </div>
                <div class="task-description">
                    <p>` + ele.value + `</p>
                </div>
                <div class="task-dec">
                    <button class = "task-decrement" type = "button"> - </button>
                </div>
            </div>`;

    }
};
function addTask(ele) {
    if(event.key === 'Enter') {
        console.log("enter is pressed");
        document.getElementById("daily").innerHTML += `
        <div class="daily-task">
            <div class="task-check-box">
            <input type="checkbox" name="myCheckbox" id="myCheckBox">

            </div>
            <div class="task-description">
                <p>` + ele.value + `</p>
            </div>
        </div>`;        
    }
}
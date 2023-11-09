
function addTask(ele) {
    if(event.key === 'Enter') {
        console.log("enter is pressed")
        document.getElementById("habits").innerHTML += `
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
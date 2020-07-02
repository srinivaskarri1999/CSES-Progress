const solvedElements = document.getElementsByClassName("task-score icon full");
const unSolvedElements = document.getElementsByClassName("task-score icon");
const wrongElements = document.getElementsByClassName("task-score icon zero");
const solved = solvedElements.length;
const wrong = wrongElements.length;
const unSolved = unSolvedElements.length - solved - wrong;

const markup = `<div style="position: sticky; top: 0;" ><p style="position: absolute;right:50;top:0; color:green;">AC:</p><p style="position: absolute;right:0;top:0; color:green;">${solved}</p><p style="position: absolute;right:50;top:25; color:red;">WA:</p><p style="position: absolute;right:0;top:25; color:red;">${wrong}</p><p style="position: absolute;right:50;top:50; color:gray;">NS:</p><p style="position: absolute;right:0;top:50; color:gray;">${unSolved}</p>
</div>`;

document.querySelector(".content").insertAdjacentHTML("afterbegin", markup);

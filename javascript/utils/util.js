window.onload = () => {
  var role = ["Developer", "Programmer", "Coder"];

  var delayPerLetter = 50;
  var changeStateTime = 1000

  var current = "";

  function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  function startTypeSetter(elemn) {
    if (current == "" || current == null) {
      current = role[0];
    } else {
      for (var i = 0; i < role.length; i++) {
        if (role[i] == current) {
          if (i + 1 >= role.length) {
            current = role[0];
            break;
          } else {
            current = role[i + 1];
            break;
          }
        }
      }
    }
    writeAnimation(current, elemn);
  }

  async function writeAnimation(text, elmn) {
    await sleep(changeStateTime);
    for (let letter of text) {
      await sleep(delayPerLetter);
      elmn.innerText += letter;
      if (elmn.innerText == text) {
        await sleep(changeStateTime);
        backspaceAnimation(elmn);
      }
    }
  }

  function backspaceAnimation(elmn) {
    var interval = setInterval(() => {
      if (elmn.innerText != "") {
        elmn.innerText = elmn.innerText.substring(0, elmn.innerText.length - 1);
      } else {
        clearInterval(interval);
        // change function
        startTypeSetter(elmn);
      }
    }, delayPerLetter);
  }

  var job = document.getElementById("cycling_job");

  role = job.getAttribute("roles").split(',') != [] ? job.getAttribute("roles").split(',') : ["Developer", "Programmer", "Coder"];

  startTypeSetter(document.getElementById("cycling_job"));
};


function onClickDark(){
  document.querySelector('body').classList.add(['dark-mode'])
}

function onClickLight(){
  document.querySelector('body').classList.remove(['dark-mode'])
}
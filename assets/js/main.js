function validateForm (){
    console.log('validating form.....')
    let issue = document.forms['addIssue']['description'].value
    let severity = document.forms['addIssue']['severity'].value
    let assignedTo = document.forms['addIssue']['assignedTo'].value
    if(issue.trim()=== ''){
        document.getElementById('descError').style.display = 'block'
        return false
    }
    else if(severity.trim()=== ''){
        document.getElementById('severityError').style.display = 'block'
        return false
    }
    else if(assignedTo.trim() === ''){
        document.getElementById('assignedToError').style.display = 'block'
        return false
    }
    else{
        let newIssue = {
            description : issue,
            severity : severity,
            assignedTo : assignedTo
        }
        // store this value to the local storage
        console.log(newIssue)
        issue = document.forms['addIssue']['description'].value = ''
        document.getElementById('descError').style.display = 'none'
        severity = document.forms['addIssue']['severity'].value = ''
        document.getElementById('severityError').style.display = 'none'
        assignedTo = document.forms['addIssue']['assignedTo'].value = ''
        document.getElementById('assignedToError').style.display = 'none'
        return true
    }
    
}
function preventLoading(){
    document.getElementById('addIssue').addEventListener('submit', function(e){
        e.preventDefault()
    })
}

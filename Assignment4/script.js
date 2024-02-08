var form = document.getElementById('myForm');
form.addEventListener("submit", submitted);
form.addEventListener("reset", resetForm);

var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern\.edu/;
var regExPhone = /\d{3}-\d{3}-\d{4}$/;
var regXip = /\d{5}$/
var regExAddress = /^[a-zA-Z0-9, -]+$/;

var isChecked  = false;
var validName = true;
var validEmail = true;
var validPhone = true;
var validAddress1 = true;
var validAdditional = true;
var validComments = true;
var validCity = true;
var validState = true;
var validZip = true;
var submitbutton = document.getElementById("submit");

function validateFirstName() {
    console.log("Validating First Name");
    var firstName = document.querySelector('#firstName');
    return isValid(firstName);
}

function validateLastName() {
    console.log("Validating Last Name");
    var lastName = document.querySelector('#lastName');
    return isValid(lastName);
}

function validateEmail() {
    console.log("Validating Email");
    var email = document.querySelector('#emailId');
    return isValid(email);
}
function validatePhoneNumber() {
    console.log("Validating Phone Number");
    var phoneNumber = document.querySelector('#phoneNumber');
    return isValid(phoneNumber);
}

function validateAddress1() {
    console.log("Validating Address");
    var address = document.querySelector('#streetAddress1');
    return isValid(address);
}

function validateAddress2() {
    console.log("Validating Address");
    var address = document.querySelector('#streetAddress2');
    return isValid(address);
}

function validateCity() {
    console.log("Validating City");
    var city = document.querySelector('#city');
    return isValid(city);
}

function validateState() {
    console.log("Validating State");
    var state = document.querySelector('#state');
    return isValid(state);
}

function validateZipcode() {
    console.log("Validating zipcode");
    var zipcode = document.querySelector('#zipcode');
    return isValid(zipcode);
}

function validateThoughts() {
    console.log("Validating thoughts");
    var thoughts = document.querySelector('#thoughts');
    return isValid(thoughts);
}

function validateComments() {
    console.log("Validating Comments");
    var comments = document.querySelector('#comments');
    return isValid(comments);
}

function validateOrder() {
    console.log("Validating order");
    var order = document.querySelector('#order');
    return isValid(order);
}

function isValid(input) {
    console.log(input);
    var value = input.value;
    var type = input.id;
    var em = "error_" + type;

    switch(type){
        case "firstName" : 
        case "lastName" :
            console.log("in switch "+value);
            return validating(em, input, value, regExName);
            break;
        case "emailId" :
            console.log("in switch "+value);
            return validating(em, input, value, regExEmail);
            break;
        case "phoneNumber" :
            console.log("in switch "+value);
            return validating(em, input, value, regExPhone);
            break;
        case "streetAddress1" :
            console.log("in switch "+value);
            return validating(em, input, value, regExAddress);
            break;
        case "streetAddress2" :
            console.log("in switch "+value);
            if(value.trim() === ""){
                hideElement(em);
                return false;
        
            } else if (!value.trim().match(regExAddress)){
                showElement(em);
                input.style.border = "2px solid red";
                return false;
            } else{
                hideElement(em);
                input.style.border = "";
                return true;
            }
            break;
        case "city" :
            console.log("in switch "+value);
            return validating(em, input, value, regExName);
            break;
        case "state" :
            console.log("in switch "+value);
            return validating(em, input, value, regExName);
            break;
        case "zipcode" :
            console.log("in switch "+value);
            return validating(em, input, value, regXip);
            break;
        case "thoughts":
            if(value.trim() === ""){
                showElement(em+"_req");
                input.style.border = "2px solid red";
                return false;
            }
            else{
                hideElement(em+"_req");                
                input.style.border = "";
                return true;
            }
            break;
        case "comments":
           if(value.trim() === ""){
                showElement(em+"_req");
                input.style.border = "2px solid red";
                return false;
            }
            else{
                hideElement(em+"_req");                
                input.style.border = "";
                return true;
            }
            break;
    
        case "order":
            if (input.value === "none"){
                showElement(em+"_req");
                return false;
            }
            else{
                hideElement(em+"_req");
                return true;
                    
            }
    }
}

function showElement(element) {
    document.getElementById(element).style.display = "block";
}

function hideElement(element) {
    document.getElementById(element).style.display = "none";
}

function validating(em, input, value, regEx) {
    if(value.trim() === ""){
        showElement(em+"_req");
        hideElement(em);
        input.style.border = "2px solid red";
        return false;
     }
    else if (!value.trim().match(regEx)){
        hideElement(em+"_req");
        showElement(em);
        input.style.border = "2px solid red";
        return false;
    }
    else{
        hideElement(em+"_req");
        hideElement(em);
        input.style.border = "";
        return true;
    }
}

function resetForm(e){
    console.log("Inside reset");
    form.reset();
    document.getElementById("error_firstName_req").style.display = "none";
    document.getElementById("error_lastName_req").style.display = "none";
    document.getElementById("error_emailId_req").style.display = "none";
    document.getElementById("error_streetAddress1_req").style.display = "none";
    document.getElementById("error_phoneNumber_req").style.display = "none";
    document.getElementById("error_city_req").style.display = "none";
    document.getElementById("error_state_req").style.display = "none";
    document.getElementById("error_zipcode_req").style.display = "none";
    document.getElementById("error_comments_req").style.display = "none";
    document.getElementById("error_order_req").style.display = "none";
    document.getElementById("error_thoughts_req").style.display = "none";
    document.getElementById("error_source_req").style.display = "none";

    document.getElementById("error_firstName").style.display = "none";
    document.getElementById("error_lastName").style.display = "none";
    document.getElementById("error_emailId").style.display = "none";
    document.getElementById("error_streetAddress1").style.display = "none";
    document.getElementById("error_phoneNumber").style.display = "none";
    document.getElementById("error_city").style.display = "none";
    document.getElementById("error_state").style.display = "none";
    document.getElementById("error_zipcode").style.display = "none";

    document.getElementById("firstName").style.border = "";
    document.getElementById("lastName").style.border = "";
    document.getElementById('emailId').style.border = "";
    document.getElementById("streetAddress1").style.border = "";
    document.getElementById("phoneNumber").style.border = "";
    document.getElementById("city").style.border = "";
    document.getElementById("state").style.border = "";
    document.getElementById("zipcode").style.border = "";
    document.getElementById("comments").style.border = "";
    document.getElementById("order").style.border = "";
    document.getElementById("thoughts").style.border = "";
    
}

var order = document.querySelector('#order');
order.addEventListener('change', addElement);

function addElement(ele){
    console.log("Element selected");
    console.log(ele.target.value);
    var val = ele.target.value;
    
    var dc = document.querySelector('#dynamic_check');
    var ch = document.querySelector('.child');
    ch.remove();
    ch = document.createElement('div');
    ch.className = 'child';
    dc.appendChild(ch);
    
    
    
    switch(val){
        case "hot_coffee":
            var check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'hot_coffee';
            check.value = 'Large Chocolate';
            var label = document.createElement('label');
            label.htmlFor = 'hot_coffee';
            label.innerHTML = 'Large Chocolate'
            ch.appendChild(label);
            ch.appendChild(check);
 
 
        break;
        case "pizza":
            check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'pizza';
            check.value = 'Large barbeque Chicken';
            label = document.createElement('label');
            label.htmlFor = 'pizza';
            label.innerHTML = 'Large barbeque Chicken'
            ch.appendChild(label);
            ch.appendChild(check);
            
        break;
        case "burger":
            check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'burger';
            check.value = 'Big Whopper';
            label = document.createElement('label');
            label.htmlFor = 'burger';
            label.innerHTML = 'Big Whopper'
            ch.appendChild(label);
            ch.appendChild(check);
            
        break;
        case "burger":
            check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'burger';
            check.value = 'Big Whopper';
            label = document.createElement('label');
            label.htmlFor = 'burger';
            label.innerHTML = 'Big Whopper'
            ch.appendChild(label);
            ch.appendChild(check);
            
        break;
        case "cold_drink":
            check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'cold_drink';
            check.value = 'Pepsi';
            label = document.createElement('label');
            label.htmlFor = 'cold_drink';
            label.innerHTML = 'Pepsi'
            ch.appendChild(label);
            ch.appendChild(check);
            
        break;
 
        case "sandwich":
            check = document.createElement('input');
            check.type = "radio";
            check.name = "dynamic_checkbox";
            check.setAttribute("onchange","check(this)");
            console.log("Inside switch");
            check.id = 'sandwich';
            check.value = 'Chicken sandwich';
            label = document.createElement('label');
            label.htmlFor = 'sandwich';
            label.innerHTML = 'Chicken sandwich'
            ch.appendChild(label);
            ch.appendChild(check);
        break;
 
        
    }
 }

 function check(element){
    console.log("inside onchange function");
    if(element.checked){
        isChecked = true;
        document.querySelector('#text_field').style.display = "block";
        thought = document.querySelector("#thoughts");
        // validAdditional = isValid(thought);
    }
    else{
        isChecked = false;
        document.querySelector('#text_field').style.display = "none";
    }
    
}





   function validateForm(){

     validName = validateFirstName();
     validEmail = validateLastName();
     validPhone = validatePhoneNumber();
     validAddress1 = validateAddress1();
     validComments = validateComments();
     validCity = validateCity();
     validState = validateState();
     validZip = validateZipcode();

        var order = document.querySelector('#order');
        console.log(order);
        console.log(order.value);
        console.log(order.id);
        var validOrder = false;
        validOrder = isValid(order);

        if(validOrder){
            if (document.getElementsByName('dynamic_checkbox')[0]){
                var checkboxe = document.getElementsByName('dynamic_checkbox')[0];
                if (checkboxe.checked){
                    document.getElementById('error_dynamic_check_req').style.display = 'none';
                 thought = document.querySelector("#thoughts");
                 validAdditional = isValid(thought);
                }
                else{
                    document.getElementById('error_dynamic_check_req').style.display = 'block';
                    validAdditional = false;
                }
               }
              
        }

        var checkboxes = document.getElementsByName('source');
        var count = 0;
        for (var checkbox of checkboxes)
        {
            if (checkbox.checked) {
                count++;
                console.log(checkbox.value);
            }
        }
        if (count === 0){
            document.getElementById("error_source"+"_req").style.display = "block";
            validSource = false;
        }
         else{
            document.getElementById("error_source"+"_req").style.display = "none";
            validSource = true;
        }
        console.log("valid Additional "+validAdditional);
        console.log("validname " + validName);
        console.log("validphone " +validPhone);
        console.log("validEmail " + validEmail);
        console.log("valid address " + validAddress1);
        console.log("validsource " +validSource);
        console.log("validcity " +validCity);
        console.log("valid state" +validState);
        console.log("valid zip " + validZip);
        console.log("valid comments " + validComments);
        console.log("valid order " +validOrder);
        console.log("valid additional" +validAdditional);
        if(validName && validPhone && validEmail && validAddress1 && validSource && validCity && validState && validZip && validComments && validOrder && validAdditional){
            submitbutton.disabled = false;
            return true;
        }
        else{
            return true;
        }
   }

   function submitted(e){
        e.preventDefault();
        if (validateForm()){
        var table = document.querySelector('#myTable');
        if(table.rows.length === 2){
            table.rows[1].remove();
        }
        
        table.hidden = false;
        console.log(isChecked +"checked");
        var firstName_value = document.querySelector('#firstName').value;
        var lastName_Value = document.querySelector('#lastName').value;
        var emailId_value = document.querySelector('#emailId').value;
        var phoneNumber_value = document.querySelector('#phoneNumber').value;
        var streetAddress1_value = document.querySelector('#streetAddress1').value;
        var streetAddress2_value = document.querySelector('#streetAddress2').value;
        var city_value = document.querySelector('#city').value;
        var state_value = document.querySelector('#state').value;
        var zipcode_value = document.querySelector('#zipcode').value;
        var comments_value = document.querySelector('#comments').value;
        var checkboxes = document.getElementsByName('source');
        var str = "";
        for (var checkbox of checkboxes)
        {
            if (checkbox.checked) {
                console.log(checkbox.value);
                str = str + " " + checkbox.value;// document.body.append(checkbox.value + ' ');
            }
        }
        console.log(firstName_value+" Firstname");

        
        var row = table.insertRow();  
        
        var cell = row.insertCell();
        cell.innerHTML = firstName_value;
        cell = row.insertCell();
        cell.innerHTML = lastName_Value;
        cell = row.insertCell();
        cell.innerHTML = emailId_value;
        cell = row.insertCell();
        cell.innerHTML = phoneNumber_value;
        cell = row.insertCell();
        cell.innerHTML = streetAddress1_value;
        cell = row.insertCell();
        cell.innerHTML = streetAddress2_value;
        cell = row.insertCell();
        cell.innerHTML = city_value;
        cell = row.insertCell();
        cell.innerHTML = state_value;
        cell = row.insertCell();
        cell.innerHTML = zipcode_value;
        


        if (isChecked){
            console.log(validAdditional);
            if (validAdditional){
                table.rows[0].cells[9].hidden = false;
                table.rows[0].cells[10].hidden = false;
                var dynamic_checkbox =  document.getElementsByName('dynamic_checkbox')[0].value;
                console.log(dynamic_checkbox);
                var thoughts = document.querySelector('#thoughts').value;
                cell = row.insertCell();
                cell.innerHTML = dynamic_checkbox;

                cell = row.insertCell();
                cell.innerHTML = thoughts;
        
        //alert("Submitted extra");
            }
            else{
                //error message for additional field
            }
        }
        cell = row.insertCell();
        cell.innerHTML = str;
        cell = row.insertCell();
        cell.innerHTML = comments_value;

        clearFields();
        
        }

}

function clearFields(){
    document.getElementById('myForm').reset();
}
module.exports = () => {
    return {
        registrationValidation: (form, validateEmail) => {
            const { firstname, lastname, email, password, confirm_password} = form;
            let form_error_array = [];

            if(firstname == ""){
                form_error_array.push("First name is required");
            }
            if(lastname == ""){
                form_error_array.push("Last name is required");
            }
            if(email == ""){
                form_error_array.push("Email is required");
            }
            else if(!validateEmail(email)){
                form_error_array.push("Please enter a valid email");
            }
            if(password == ""){
                form_error_array.push("Password name is required");
            }
            if(confirm_password == ""){
                form_error_array.push("Confirm password is required");
            }
            if(password != confirm_password){
                form_error_array.push("Password is not match, Try again!");
            }
            return form_error_array;
        },

        loginValidation: (form, validateEmail) => {
            const { email, password } = form;
            let form_error_array = [];

            if(email == ""){
                form_error_array.push("Email is required");
            }
            else if(!validateEmail(email)){
                form_error_array.push("Please enter a valid email!");
            }
            if(password == ""){
                form_error_array.push("Password is required");
            }
            return form_error_array;
        }
    }
}
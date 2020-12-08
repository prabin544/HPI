
export default {
    //fucntion takes in the user object with email and passworkd
    login : user =>{
        console.log(user);
        return fetch('/user/login',{
            method : "post",
            //convert to json
            body : JSON.stringify(user),
            //set up header for backend to know what's happening
            headers : {
                'Content-Type' : 'application/json'
            }
            //promise will return a response
        }).then(res => {
            //check for unauthrrized response
            if(res.status !== 401)
            //return parsed data
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {email : "",password : ""}};
        })
    },

    
    register : user =>{
        console.log(user);
        return fetch('/user/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    
    
    //logout function does not take in anything
    logout : ()=>{
        return fetch('/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    
    //fucntion used to set state to let app know user has been authenicated
    //sinks front and backend together
    isAuthenticated : ()=>{
        return fetch('/user/authenticated')
                .then(res=>{
                    //if response is not 401
                    if(res.status !== 401)
                        //return the response and get the data
                        return res.json().then(data => data);
                    else
                        //if 401, create a object with empty strings
                        return { isAuthenticated : false, user : {email : "",password : ""}};
                });
    }

}
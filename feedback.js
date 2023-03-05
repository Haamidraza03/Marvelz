function check()
{
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Query = document.getElementById('query').value;

    let user={
        name:Name,
        email:Email,
        query:Query
    }

    if(Name.length>1 && Email.length>10 && Query.length>1)
    {
        fetch('https://hackathon-marvelz-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Thank You For Your FeedBack.');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('query').value="";
            window.location.href='./feedback.html'
        }) 
    }
    else if(Name.length==0 && Email.length==0 && Query.length==0)
    {
        alert('Please fill all Details.')
    }
    else if(Name.length<=1)
    {
        alert('Please give a valid Name.')
    }
    else if(Email.length<10)
    {
        alert('Please Give a Valid Email Id.')
    }
    else if(Query.length<=1)
    {
        alert('Your message is too short.')
    }
}
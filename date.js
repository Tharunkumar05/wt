function myDateTime(){
    const date = new Date();
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    return date.toLocaleString('en-US',options);
};

module.exports= myDateTime;

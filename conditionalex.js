if(10>20){
    console.log("I am inside if block");
}
else{
    console.log("I am inside else block");
    }
    let browsername="Chrome"
    if(browsername.includes("Chrome")){
        console.log("Chrome Started")
    }
    else if(browsername.includes("firefox")){
        console.log("firefox Started")
    }
    else if(browsername.includes("edge")){
        console.log("edge Started")
    }
    else{
        console.log("other browser notsupported")
    }
    let date=new Date().getDay()
    console.log(date);
    switch(date){
        case 0:
            console.log("Sunday");
            break;
            case 1:
                console.log("Monday");
                break;
                case 2:
                    console.log("Tuesday");
                    break;
                    case 3:
                        console.log("Wednesday");
                        break;
                        case 4:
                            console.log("Thrusday");
                            break;
                            case 5:
                                console.log("Friday");
                                break;
                                case 6:
                                    console.log("Saturday");
                                    break;
                    default:
                        console.log("Sorry!!")
                        break;

    }
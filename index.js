function distanceFromHqInBlocks(destination){
  if(destination > 42){
    return destination - 42;
  }
  else {
    return 42 - destination;
  }
  return Math.abs(destination - 42)
}

function distanceFromHqInFeet(destination){
    if(destination > 42){
        return (destination -42) * 264
    }
    else{
        return(42 - destination) * 264
    }
    return Math.abs(distanceFromHqInBlocks(destination) * 264)
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return(start - destination) * 264
    }else{
        return (destination - start) * 264
    }
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination){
    const distance = start > destination ? (start - destination) * 264 : (destination - start) * 264
    if (distance <= 400){
        return 0;
    } else if(distance > 400 && distance < 2000){
        return .02 * (distance-400);
    }else if(distance > 2500){
        return 'cannot travel that far'
    }else if(distance > 2000){
        return 25;
    }
}
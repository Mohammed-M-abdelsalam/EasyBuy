export function counterDown(targetTime){
    if(!targetTime) return { hours: 0, minutes: 0, seconds: 0 };

    const now = new Date();
    const distance = targetTime - now;
    if (distance < 0) {
        console.log("Countdown finished");
        return { hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds
    };
}

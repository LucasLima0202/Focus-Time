export function TimeToSeconds(time: string){
    const [
        hours = '0',
        minutes = '0',
        seconds= '0'
    ] = time.split(":");

    const HoursInSeconds = Number(hours) * 3600;     
    const MinutesInSeconds = Number(minutes) * 60; 
    return     HoursInSeconds + MinutesInSeconds + Number(seconds)
}
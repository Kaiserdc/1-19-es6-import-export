import moment from "moment";

export const calculateSumOfNumbers = (sum, curr) => {
    return sum += curr
}


export const getFormattedTime = (date) =>{
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
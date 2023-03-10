
/* toma un argumento timestamp para obtener la creaction date 
luego lo compara con la fecha actual y devuelve la diferencia en horas */
export const formatDate = (timestamp) => {
    const creationDate = new Date(timestamp * 1000).getTime()
    const currentDate = new Date().getTime()
    console.log(currentDate);

    return calculateTimeDifference(creationDate, currentDate)
  }


/* toma un dos agumentos date1, date2 y devuelve la diferencia en horas */
export const calculateTimeDifference = (date1, date2) => {
    const hourDifference = (date1 - date2) / 1000 / (3600)

    return Math.abs(Math.round(hourDifference))
  }
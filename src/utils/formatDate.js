
export const formatDate = (timestamp) => {
    const creationDate = new Date(timestamp * 1000).getTime()
    const currentDate = new Date().getTime()
    const hourDifference = calculateTimeDifference(creationDate, currentDate)

    return hourDifference
  }

  const calculateTimeDifference = (date1, date2) => {
    const hourDifference = (date1 - date2) / 1000 / (3600)

    return Math.abs(Math.round(hourDifference))
  }
const BASE_URL = 'https://www.reddit.com'

export const getPosts = async (subRedditUrl = '') => {
    const requesUrl = `${BASE_URL}${subRedditUrl}.json` 
    const response = await fetch(requesUrl, {
        method: 'GET'
    })
    const json = await response.json()
    return json.data.children.map( obj => obj.data )
}


export const getSubReddits = async () => {
  const requesUrl = `${BASE_URL}/subreddits.json`
  const response = await fetch(requesUrl, {
    mothod: 'GET'
  })
  const json = await response.json()
  return json.data.children.map( obj => obj.data )
} 

export const getCommentsReddit = async ({ postId, subReddit }) => {
  const requesUrl = `${BASE_URL}/r/${subReddit}/comments/${postId}/.json`
  const response = await fetch(requesUrl, {
    method: 'GET'
  })
  const json = await response.json()
  const { data } = json[1]

  return data.children.map(({ data }) => data)
}

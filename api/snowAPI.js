import config from '../config';

const baseUrl = config.baseUrl

const getSnowOverview = async () => {
  let response = await fetch(`${baseUrl}status/overview`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'token': config.secret
    }
  })
  return response
}

const getMtInfo = async (mtName) => {
  let response = await fetch(`${baseUrl}status/getinfo`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'token': config.secret
    },
    body: JSON.stringify({
      mt: mtName
    })
  })
  return response
}

const getForecast = async (mtName) => {
  let response = await fetch(`${baseUrl}weather/forecast`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'token': config.secret
    },
    body: JSON.stringify({
      mt: mtName
    })
  })
  return response
}
const api = {
  getSnowOverview: getSnowOverview,
  getMtInfo: getMtInfo,
  getForecast: getForecast
}


module.exports = api
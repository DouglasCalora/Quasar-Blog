import api from './api'

const remote = async (apiName, id) => {
  if (typeof apiName !== 'string' || !apiName || !api[apiName]) {
    return null
  }

  let response = {}

  try {
    response = await api[apiName](id)
  } catch (error) {
    throw error
  }

  if (response.statusText !== 'OK' || !response.data) {
    throw new Error('Something went wrong :x')
  }

  return response.data
}

export {
  remote
}

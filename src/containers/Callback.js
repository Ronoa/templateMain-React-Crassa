import React from 'react'
import Cookies from 'js-cookie'
import constants from 'utils/Constants'

const Callback = ({ location: { search } }) => {
  React.useEffect(() => {
    const { accessToken, iduser, urlRedirect, refreshToken } = search.substring(1).split('&').map(param => {
      const [ key, value ] = param.split('=')

      return { [key]: value }
    }).reduce((prev, next) => ({ ...prev, ...next }))

    const { hostname } = window.location

    Cookies.set('accessToken', accessToken, { hostname })
    Cookies.set('iduser', iduser, { hostname })
    Cookies.set('refreshToken', refreshToken, { hostname })

    if(typeof window !== 'undefined' && urlRedirect) window.location.href = urlRedirect
  }, [ search ])

  return (
    <div style={{
      alignItems    : 'center',
      background    : '#f0f2f5',
      color         : 'rgba(0,0,0,.1)',
      display       : 'flex',
      fontSize      : '50px',
      height        : '100vh',
      justifyContent: 'center',
      textAlign     : 'center'
    }}>
      <img alt='gif-loader' height={150} src={constants.loadingGif} />
    </div>
  )
}

export default React.memo(Callback)

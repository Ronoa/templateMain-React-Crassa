import React from 'react'
import constants from 'utils/Constants'

const Loading = () => (
  <div
    style={{
      alignItems    : 'center',
      bottom        : 0,
      display       : 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      left          : 0,
      position      : 'absolute',
      right         : 0,
      top           : 0
    }}>
    <img alt='gif-loader' height={150} src={constants.loadingGif} />
  </div>
)

export default React.memo(Loading)

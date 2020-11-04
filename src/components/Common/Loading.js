import React from 'react'

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
    <img alt='krowdy-loader' height={150} src={'https://cdn.krowdy.com/images/loader.gif'} />
  </div>
)

export default React.memo(Loading)

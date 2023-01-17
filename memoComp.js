import React from 'react'

function memoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default react.memo(memoComp)

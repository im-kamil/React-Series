import React, { PureComponent } from 'react'

 class pureComp extends PureComponent {
  render() {
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}

export default pureComp

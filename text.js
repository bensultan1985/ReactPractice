import React from 'react';

export class Text extends React.Component {
	state = {
		statement: 'hello world'
	}
    
    render() {
      return (
        <div>
         <h3>{ this.state.statement }</h3>
        </div>
      )
	}
}

module.export(Text)
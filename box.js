import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Text from './text';

export class Box extends React.Component {
	state = {
		title: 'Post One',
		body: 'This is my post'
	}
    
    render() {
      return (
        <div class="bluebox">
            <Text />
        </div>
      )
	}
}

ReactDOM.render(<Box/>, document.getElementById('app'))

export default Box;
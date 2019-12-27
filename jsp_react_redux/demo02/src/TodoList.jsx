import React, { Component } from 'react'
import { connect } from 'react-redux'

// class TodoList extends Component {
// 	constructor(props) {
// 		super(props)
// 	}
// 	render() {
// 		return (
// 			<>
// 				<div>
// 					<input
// 						type='text'
// 						value={this.props.inputValue}
// 						onChange={this.props.changeValue}
// 					/>
// 					<button onClick={this.props.addList}>提交</button>
// 				</div>
// 				<ul>
// 					{this.props.list.map((todo, index) => {
// 						return <li key={index}>{todo}</li>
// 					})}
// 				</ul>
// 			</>
// 		)
// 	}
// }

const TodoList = props => {
  const { inputValue, changeValue, addList, list } = props
	return (
		<>
			<div>
				<input
					type='text'
					value={inputValue}
					onChange={changeValue}
				/>
				<button onClick={addList}>提交</button>
			</div>
			<ul>
				{list.map((todo, index) => {
					return <li key={index}>{todo}</li>
				})}
			</ul>
		</>
	)
}

const mapStateToProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeValue: e => {
			console.log(e.target.value)
			const action = {
				type: 'CHANGE',
				inputValue: e.target.value
			}
			dispatch(action)
		},
		addList: () => {
			const action = {
				type: 'ADD'
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

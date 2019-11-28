import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import './todoList.css'

const TodoListUI = (props) => (
	<div className='container'>
		<div className='input-wrapper'>
			{/* 受控组件需要有store 的订阅 */}
			<Input
				placeholder='Write Something'
				onChange={props.changeValue}
				value={props.inputValue}
				// ref={ref}
			/>
			<Button type='primary' onClick={props.addItem}>
				增加
			</Button>
		</div>
		<div className='todoList-wrapper'>
			<List
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (
					<List.Item data-index={index} onClick={props.remove}>
						{item}
					</List.Item>
				)}
			/>
		</div>
	</div>
)

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="input-wrapper">
//           {/* 受控组件需要有store 的订阅 */}
//           <Input placeholder='Write Something'
//             onChange={this.props.changeValue}
//             value={this.props.inputValue}
//             // ref={this.ref}
//           />
//           <Button type="primary" onClick={this.props.addItem}>增加</Button>
//         </div>
//         <div className="todoList-wrapper">
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               data-index={index}
//               onClick={this.props.remove}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI

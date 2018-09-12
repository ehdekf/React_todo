import React from 'react';
import './TodoListTemplate.css';

// ({form , children}) 비구조화 할당 state 라이프사이클 API를 사용하지않을때 함수형 컴포넌트를 만든다.
const TodoListTemplate = ({form, children}) => {
	return (
		<div>
			<main className="todo-list-template">
				<div className="title">
					오늘의 할일
				</div>
				<section className="form-wrapper">
					{form}
				</section>
				<section className="todos-wrapper">
					{ children }
				</section>
			</main>
		</div>
	);
};
export default TodoListTemplate
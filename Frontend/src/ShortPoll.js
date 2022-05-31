import React, { useEffect, useState } from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';

const ShortPoll = () => {
	const [message, setMessage] = useState('');

	const [messages, setMessages] = useState([]);

	const base_url = 'http://localhost:8000/short';

	

	useEffect(() => {
		setInterval(() => {
			fetch(base_url)
				.then((response) => response.json())
				.then((data) => {
					setMessages(data.data);
				})
				.catch((err) => console.log(err));
		}, 5000);
	}, []);

	const onHandleSubmit = (e) => {
		e.preventDefault();
		
		fetch(base_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		});

		setMessage('');
	};
	return (
		<Row>
			<Col className='mx-auto my-5' md={6}>
				<Form onSubmit={onHandleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Messages </Form.Label>
						<Form.Control
							value={message}
							type='text'
							placeholder='Enter Your Message'
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Col>

			<ListGroup>
				{messages &&
					messages.map((mess, index) => {
						return (
							<ListGroup.Item key={index}>
								<div>
								{mess}
								</div>
							</ListGroup.Item>
						);
					})}
			</ListGroup>
		</Row>
	);
};

export default ShortPoll;

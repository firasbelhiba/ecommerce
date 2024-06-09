import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/product.css';

const Category = ({ category }) => {
	return (
		<Card className='mt-3 p-0'>
			<Link to={`/search/${category.type}`}>
				<Card.Img
					loading='lazy'
					className='product-image'
					src={category.image}
					variant='top'
					alt={category.name}
				/>
			</Link>

			<Card.Body>
				<Link
					to={`/search/${category.type    }`}
					style={{ color: 'dimgray', textDecoration: 'none' }}>
					<Card.Title className='product-title' as='p'>
						<strong>{category.name}</strong>
					</Card.Title>
				</Link>

			</Card.Body>
		</Card>
	);
};

export default Category;

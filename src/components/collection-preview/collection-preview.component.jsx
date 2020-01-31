import React from 'react';
import CollectionItem from '../collection-item/collection-item.components'
import './collection-preview.styles.scss';

// functional component

const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title'>
            <a href={`/${routeName}`}>{title.toUpperCase()}</a> </h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
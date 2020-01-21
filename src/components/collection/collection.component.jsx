import React from 'react';

import CollectionItem from '../collection-item/collection-item.components';

import './collection.styles.scss';

const Collection = ({title, items}) => (
    <div className='collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default Collection;
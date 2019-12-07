import React from 'react';
import './add-item.css';

const AddItem = ({onAddItemAppLevel}) => {

  return (
      <div className="item-add">
          <button type="button"
                  className="btn btn-outline-primary"
                  onClick={onAddItemAppLevel}
                    >
              Add List Item</button>
      </div>

  )
};

export default AddItem;
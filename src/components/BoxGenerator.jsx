import React, {useState} from 'react';
import BoxGeneratorForm from './BoxGeneratorForm';
import BoxGeneratorDisplay from './BoxGeneratorDisplay';

export default () => {
    // a list of colors representing the boxes to be displayed
    const [boxes, addNewBox] = useState([]);

    // to add a new box to the list of boxes
    const addBox = (newBox) => {
        addNewBox([...boxes, newBox]);
    }

    return(
        <div>
            <BoxGeneratorForm onNewBox={addBox} />
            <BoxGeneratorDisplay boxes={boxes} />
        </div>
    );
}
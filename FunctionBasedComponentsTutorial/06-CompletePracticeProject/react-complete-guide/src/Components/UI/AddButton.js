import React from 'react';
import styles from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default AddButton;
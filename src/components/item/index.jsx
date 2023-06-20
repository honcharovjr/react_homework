import React, {useState} from 'react';
import styles from "./styles.module.css";

const Item = ({ item, onComplete, onDelete, }) => {
  console.log(item.completed);

  

  return (
    <div className={styles.item}>
      <input type="checkbox" onClick={() => onComplete(item.id)} />
      <p className={item.completed ? styles.completed : null}>{item.title}</p>
      <input type='text' placeholder="Description"></input>
      <button onClick={() => onDelete(item.id)}>&times;</button>
      
    </div>
  );
};

export default Item;
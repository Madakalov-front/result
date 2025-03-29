import React, { memo } from 'react'
import styles from '../style/style.module.css';

export const InputValueHeader = memo( ({title}) => {
	return (
		<h1 className={styles['page-heading']}>{title}</h1>
	)
})

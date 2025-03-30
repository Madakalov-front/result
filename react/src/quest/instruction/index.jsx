import React, { useRef, useState } from "react";
import styles from "./style/style.module.css";
import data from "./shared/data/data.json";
import clsx from "clsx";

export const Instruction = () => {
	const GET_STEPS = data;

	const refList = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleStep = (e) => {
		setActiveIndex(e.target.textContent - 1);
	};

	const handleNextStep = () => {
		if (GET_STEPS.length - 1 === activeIndex) {
			setActiveIndex(0);
			return;
		}
		setActiveIndex((prev) => prev + 1);
	};

	const handlePrevStep = () => {
		setActiveIndex((prev) => prev - 1);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{GET_STEPS[activeIndex].content}
					</div>
					<ul ref={refList} className={styles["steps-list"]}>
						{GET_STEPS && GET_STEPS.length
							? GET_STEPS.map((item, idx) => (
									<li
										key={item.id}
										className={clsx(
											styles["steps-item"],
											activeIndex === idx && styles.active,
											activeIndex >= idx && styles.done
										)}
									>
										<button
											className={styles["steps-item-button"]}
											onClick={handleStep}
										>
											{idx + 1}
										</button>
										{item.title}
									</li>
							  ))
							: null}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={handlePrevStep}
							disabled={0 === activeIndex}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNextStep}>
							{GET_STEPS.length - 1 === activeIndex
								? "Начать сначала"
								: "Далее"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

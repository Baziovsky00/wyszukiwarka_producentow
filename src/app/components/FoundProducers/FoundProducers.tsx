'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from "motion/react"
import { FaCirclePlus } from "react-icons/fa6";

const FoundProducers = () => {
    const producers = [
        {
            img: '3.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque consectetur velit ea ratione quidem amet aliquid sed eligendi modi.',
            name: 'Klara Kowalska Ruczaj Sp. z o.o.',
        },
        {
            img: '4.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque consectetur velit ea ratione quidem amet aliquid sed eligendi modi.',
            name: 'Klara Kowalska Ruczaj Sp. z o.o.',
        },
        {
            img: '5.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque consectetur velit ea ratione quidem amet aliquid sed eligendi modi.',
            name: 'Klara Kowalska Ruczaj Sp. z o.o.',
        },
        {
            img: '6.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque consectetur velit ea ratione quidem amet aliquid sed eligendi modi.',
            name: 'Klara Kowalska Ruczaj Sp. z o.o.',
        },
        {
            img: '7.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque consectetur velit ea ratione quidem amet aliquid sed eligendi modi.',
            name: 'Klara Kowalska Ruczaj Sp. z o.o.',
        }

    ]

    return (
        <div className={styles.page}>
            <div className={styles.producers}>
                {
                    producers.map((producer, i) => (
                        <motion.div className={styles.producerBlock}
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i == 0 || i == 1 || i == 2 ?  0.3 * i : 0.3 }}>
                            <div className={styles.divToMove}>
                                <Image src={`/images/producers/${producer.img}`} width={210} height={210} alt={`Producent ${producer.name}`} />
                                <p>{producer.text}</p>
                                <div className={styles.bottom}>
                                    <h2>{producer.name}</h2>
                                    <FaCirclePlus />
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div >
        </div >
    );
};

export default FoundProducers;
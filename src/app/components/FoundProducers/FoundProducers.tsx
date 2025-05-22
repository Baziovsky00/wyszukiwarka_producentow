'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from "motion/react"
import { FaCirclePlus } from "react-icons/fa6";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const SearchContent = () => {
    const [producers, setProducers] = useState<any[]>([])
    const searchParams = useSearchParams();
    const [notFound, setNotFound] = useState(false)

    const regions = searchParams.getAll("regions")
    const requirements = searchParams.getAll("requirements")
    const scales = searchParams.getAll("scales")

    const getProducers = async () => {
        const response = await fetch('/api/searchProducers', {
            method: 'POST',
            body: JSON.stringify({ regions: regions, requirements: requirements, scales: scales })
        })
        const data = await response.json()
        if(data.length === 0) {
            setNotFound(true)
        }
        setProducers(data)
    }

    useEffect(() => {
        getProducers()
    }, [])

    return (
        <div className={styles.page}>
            {
                producers.length > 0 &&
                    <div className={styles.producers}>
                        {
                            producers.map((producer, i) => (
                                <motion.div className={styles.producerBlock}
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: i == 0 || i == 1 || i == 2 ? 0.3 * i : 0.3 }}>
                                    <div className={styles.divToMove}>
                                        <Image src={`/images/producers/${producer.nazwa}.jpg`} width={210} height={210} alt={`Producent ${producer.nazwa}`} />
                                        <p>{producer.opis}</p>
                                        <div className={styles.bottom}>
                                            <h2>{producer.nazwa}</h2>
                                            <Link href={`mailto:${producer.email}`}><FaCirclePlus /></Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div >
            }
            {
                notFound && <p className={styles.notFound}>Nie znaleziono takich producentów</p>
            }
            {
                !notFound && producers.length === 0 && <div style={{marginBottom: '800px'}}/>
            }
        </div >
    );
};

const FoundProducers = () => {
    return (
        <Suspense fallback={<div>Ładowanie...</div>}>
            <SearchContent />
        </Suspense>
    );
};

export default FoundProducers;
import React from 'react';
import styles from './LatesNews.module.scss';

const LatestNews: React.FC = () => {
    return (
        <>  <div className={styles.header}>
            <h3>Latest News </h3>
        </div>
           <div className={styles.wrapper}>
           <div className={styles.container}>
                <div className={styles.latesnews__container}>
                    <div className={styles.latesnews__container_bg}>
                    </div>

                    <div className={styles.latesnews__container_date}>
                        <span className={styles.latesnews__container_datenumber}>18</span>
                        <span>NOV</span>
                    </div>
                    <div className={styles.latesnews__container_inner}>
                        <div className={styles.latesnews__container_info}>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/vector (1).png" alt="tag" /></div><div> Food</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/user_3 1.png" alt="user" /> </div><div>By Admin</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/ChatCentered 1.png" alt="comment" /></div><div>65 Comments</div></div>
                        </div>
                        <div className={styles.latesnews__container_text}>
                            <span>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</span>
                        </div>
                        <div className={styles.latesnews__container_anchore}>
                            <a href="#">Read More <img src="/right.png" alt="left arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.latesnews__container}>
                    <div className={styles.latesnews__container_bg}>
                    </div>

                    <div className={styles.latesnews__container_date}>
                        <span className={styles.latesnews__container_datenumber}>18</span>
                        <span>NOV</span>
                    </div>
                    <div className={styles.latesnews__container_inner}>
                        <div className={styles.latesnews__container_info}>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/vector (1).png" alt="tag" /></div><div> Food</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/user_3 1.png" alt="user" /> </div><div>By Admin</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/ChatCentered 1.png" alt="comment" /></div><div>65 Comments</div></div>
                        </div>
                        <div className={styles.latesnews__container_text}>
                            <span>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</span>
                        </div>
                        <div className={styles.latesnews__container_anchore}>
                            <a href="#">Read More <img src="/right.png" alt="left arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.latesnews__container}>
                    <div className={styles.latesnews__container_bg}>
                    </div>

                    <div className={styles.latesnews__container_date}>
                        <span className={styles.latesnews__container_datenumber}>18</span>
                        <span>NOV</span>
                    </div>
                    <div className={styles.latesnews__container_inner}>
                        <div className={styles.latesnews__container_info}>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/vector (1).png" alt="tag" /></div><div> Food</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/user_3 1.png" alt="user" /> </div><div>By Admin</div></div>
                            <div className={styles.latesnews__container_infoadjust}><div><img src="/ChatCentered 1.png" alt="comment" /></div><div>65 Comments</div></div>
                        </div>
                        <div className={styles.latesnews__container_text}>
                            <span>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</span>
                        </div>
                        <div className={styles.latesnews__container_anchore}>
                            <a href="#">Read More <img src="/right.png" alt="left arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default LatestNews;

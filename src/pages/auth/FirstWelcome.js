import React, { useState } from 'react'
import { motion } from 'framer-motion'; // Импорт framer-motion

import first_1 from 'assets/images/first_1.png';
import first_2 from 'assets/images/first_2.png';
import first_4 from 'assets/images/first_4.png';

import video_1 from 'assets/video/video_1.mp4';
import video_2 from 'assets/video/video_2.mp4';
import video_3 from 'assets/video/video_3.mp4';
import video_4 from 'assets/video/video_4.mp4';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import { useNavigate } from 'react-router-dom';

function FirstWelcome() {
    const navigate = useNavigate();
    const [acitveTab, setAcitveTab] = useState(3);

    function redirect() {
        localStorage.setItem('isFirst', false)
        navigate('/auth/welcome')
    }

    const animationVariants = {
        initial: { opacity: 0 }, // Начальное состояние
        animate: { opacity: 1 }, // Конечное состояние
        exit: { opacity: 0 }, // Уход с экрана
    };

    return (
        <>
            <div className="first-welcome">

                {acitveTab === 1 &&
                    <motion.div
                        className="first-welcome-block first-welcome-1"
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <video autoPlay muted loop className="background-video">
                            <source src={video_1} type="video/mp4" />
                        </video>

                        <div className="first-welcome-title">
                            Удалённое <br />
                            открытие счета
                        </div>

                        <button className="first-welcome-btn" onClick={() => setAcitveTab(2)}>
                            Далее
                            <ArrowRightIcon />
                        </button>

                        <div className="background-image third">
                            <img src={first_2} alt="" />
                        </div>
                    </motion.div>
                }
                {acitveTab === 2 &&
                    <motion.div
                        className="first-welcome-block first-welcome-2"
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}>
                        <video autoPlay muted loop className="background-video">
                            <source src={video_2} type="video/mp4" />
                        </video>

                        <div className="background-image second">
                            <img src={first_1} alt="" />
                        </div>

                        <div className="first-welcome-title">
                            Онлайн <br />
                            бухгалтерия
                        </div>

                        <div className="d-flex gap-10">
                            <button className="first-welcome-btn second" onClick={() => setAcitveTab(1)}>
                                <ArrowLeftIcon />
                            </button>
                            <button className="first-welcome-btn" onClick={() => setAcitveTab(3)}>
                                Далее
                                <ArrowRightIcon />
                            </button>
                        </div>


                    </motion.div>
                }
                {acitveTab === 3 &&
                    <motion.div
                        className="first-welcome-block first-welcome-3"
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}>
                        <video autoPlay muted loop className="background-video">
                            <source src={video_3} type="video/mp4" />
                        </video>

                        <div className="first-welcome-title">
                            Банковские карты <br />
                            с кешбеком
                        </div>

                        <button className="first-welcome-btn" onClick={() => setAcitveTab(4)}>
                            Далее
                            <ArrowRightIcon />
                        </button>
                    </motion.div>
                }
                {acitveTab === 4 &&
                    <motion.div
                        className="first-welcome-block first-welcome-4"
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}>
                        <video autoPlay muted loop className="background-video">
                            <source src={video_4} type="video/mp4" />
                        </video>

                        <div className="background-image fourth">
                            <img src={first_4} alt="" />
                        </div>

                        <div className="first-welcome-title">
                            ИИ для ваших финансов <br />
                            в нашем приложении
                        </div>

                        <div className="d-flex gap-10">
                            <button className="first-welcome-btn second" onClick={() => setAcitveTab(3)}>
                                <ArrowLeftIcon />
                            </button>
                            <button className="first-welcome-btn" onClick={() => redirect()}>
                                Далее
                                <ArrowRightIcon />
                            </button>
                        </div>

                    </motion.div>
                }
            </div>

        </>
    )
}

export default FirstWelcome
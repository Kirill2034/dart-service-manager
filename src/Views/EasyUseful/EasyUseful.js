import React from 'react';
import classes from '../EasyUseful/EasyUseful.module.css';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import book from '../../img/book.png';
import man from '../../img/man.png';
import secondman from '../../img/secondman.png';

function EasyUseful(props) {
    return (
        <div className={classes.EasyUseful}>
            <Title/>
            <div className={classes.ContainerWraper}>
                <Container
                    src={book}
                />
                <Container
                    src={man}
                />
                <Container
                    src={secondman}
                />
            </div>
            <Button
                text={"Get started"}
                color={"#fff"}
                bgc={"#1de9b6"}
                wdh={150}
                height={55}
            />
        </div>
    )
}
export default EasyUseful;
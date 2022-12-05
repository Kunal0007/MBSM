import React, { useEffect, useState, useRef } from "react";
import SampleImg from "../../assets/images/sampleimg.jpg";
const classes = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const PrakashanBooks = () => {
    return (
        <div className="magzineMain">
            <div className="heading">
                <h1>Prakashan Books</h1>
            </div>
            <div className="prakashans">
                {classes.map((item, index) => {
                    return (
                        <div key={index} className="prakashan_img">
                            <img alt="prakashan" src={SampleImg} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PrakashanBooks;

import React from 'react';
import {Link} from "react-router-dom";
// import Chart from 'chart.js/auto';
// import { Doughnut } from 'react-chartjs-2';

function Images(props) {
    return (
        <img className="offer-image"
             src={props.links}
             alt={"pic"}
        />
    );
}
const OfferListElement = (props) => {
    let data = {
        datasets: [{
            data: [10, 20, 30]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };
    return (
        <div className="pie">
            {/*<Doughnut data={data} />*/}
        </div>
    );
};

export default OfferListElement;
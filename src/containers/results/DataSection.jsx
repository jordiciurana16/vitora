// DataSection.js
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import BubbleChart from '../../utils/charts/BubbleChart';
import BarChart from '../../utils/charts/BarChart'; // Importem el BarChart component
import LineChart from '../../utils/charts/LineChart';
import chartData from '../../utils/charts/chartData.json';

function DataSection() {
    return (
        <div className='bg-data p-0 py-4'>
            <div className='ps-3'>
                <h2>Statistics</h2>
                <h6>Explore custom world stats</h6>
            </div>
            <div className='d-flex dataSection'>
                {chartData.map(chart => (
                    <Col key={chart.id} xs={5} className="px-3">
                        <Card>
                            <Card.Body>
                                <h5>{chart.title}</h5>
                                {/* Renderitza el BarChart si és de tipus 'bar' o 'stackedBar' */}
                                {chart.type === 'bar'&& <BarChart chartData={chart} />}
                                {chart.type === 'bubble' && <BubbleChart chartData={chart} />}
                                {chart.type === 'line' && <LineChart chartData={chart} />}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );
}

export default DataSection;

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import BubbleChart from '../../utils/charts/BubbleChart';
import BarChart from '../../utils/charts/BarChart';
import LineChart from '../../utils/charts/LineChart';
import ScatterChart from '../../utils/charts/ScatterChart';
import PolarAreaChart from '../../utils/charts/PolarAreaChart';
import ComboChart from '../../utils/charts/ComboChart'; // Importa el nou component
import chartData from '../../utils/charts/chartData.json';

const DataSection = () => (
  <div className='bg-data mx-3 my-4'>
    <div className='ps-3'>
      <h2>Statistics</h2>
      <h6>Explore custom world stats</h6>
    </div>
    <div className='d-flex dataSection'>
      {chartData.map(chart => (
        <Col key={chart.id} xs={5} className="px-3 my-3">
          <Card>
            <Card.Body className='card-body-chart'>
              {chart.type === 'bar' && <BarChart chartData={chart} />}
              {chart.type === 'bubble' && <BubbleChart chartData={chart} />}
              {chart.type === 'line' && <LineChart chartData={chart} />}
              {chart.type === 'scatter' && <ScatterChart chartData={chart} />}
              {chart.type === 'polarArea' && <PolarAreaChart chartData={chart} />}
              {chart.type === 'comboBarLine' && <ComboChart chartData={chart} />} {/* Afegim el nou component */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  </div>
);

export default DataSection;

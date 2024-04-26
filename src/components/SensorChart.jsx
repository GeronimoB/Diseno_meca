import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './Firebase'; // Asegúrate de actualizar la importación si cambió la ubicación
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../css/SensorChart.module.css';

function SensorChart() {
  const [motorData, setMotorData] = useState([]);

  useEffect(() => {
    const motor1Ref = ref(database, 'Motors/motor1');
    const motor2Ref = ref(database, 'Motors/motor2');
    
    const onMotorData = (snapshot1, snapshot2) => {
      const motor1Value = snapshot1.val();
      const motor2Value = snapshot2.val();
      const newData = { 
        time: new Date().toLocaleTimeString(),
        motor1: motor1Value,
        motor2: motor2Value
      };
      setMotorData((currentData) => [...currentData, newData]);
    };

    onValue(motor1Ref, (snapshot1) => {
      onValue(motor2Ref, (snapshot2) => {
        onMotorData(snapshot1, snapshot2);
      });
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={motorData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="motor1" stroke="#82ca9d" isAnimationActive={false} />
          <Line type="monotone" dataKey="motor2" stroke="#8884d8" isAnimationActive={false} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SensorChart;

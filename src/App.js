import React, { useState } from 'react';
import SensorChart from './components/SensorChart';
import Navbar from './components/navbar'
import { sendCommand } from './components/Firebase';
import styles from './css/App.module.css';

function App() {
  const [motor1Value, setMotor1Value] = useState(0);
  const [motor2Value, setMotor2Value] = useState(0);

  const handleSendCommand = () => {
    sendCommand(motor1Value, motor2Value);
  };

  return (
    <div className={styles.container}>
      <Navbar/>
      <h1 className={styles.title}>Datos en Tiempo Real del Sensor</h1>
      <SensorChart />
      <input className={styles.input} type="number" value={motor1Value} onChange={(e) => setMotor1Value(parseInt(e.target.value))} />
      <input className={styles.input} type="number" value={motor2Value} onChange={(e) => setMotor2Value(parseInt(e.target.value))} />
      <button className={styles.button} onClick={handleSendCommand}>Enviar Señales</button>
    </div>
  );
}

export default App;

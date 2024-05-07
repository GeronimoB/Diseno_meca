import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './Firebase';
import styles from '../css/Data.module.css'; // Asegúrate de crear este archivo de CSS para estilizar tu componente

function Data() {
  const [mpuData, setMpuData] = useState({});
  const [motorData, setMotorData] = useState({});
  const [pirData, setPirData] = useState('');

  useEffect(() => {
    const mpuRef = ref(database, 'MPU');
    const motorsRef = ref(database, 'Motors');
    const pirRef = ref(database, 'PIR');

    onValue(mpuRef, (snapshot) => {
      setMpuData(snapshot.val());
    });

    onValue(motorsRef, (snapshot) => {
      setMotorData(snapshot.val());
    });

    onValue(pirRef, (snapshot) => {
      setPirData(snapshot.val());
    });
  }, []);

  return (
    <div className={styles.dataContainer}>
      <div className='colum'>
        <h2>Datos del MPU</h2>
        <p>Aceleración en X: {mpuData['accelX']}</p>
        <p>Aceleración en Y: {mpuData['accelY']}</p>
        <p>Aceleración en Z: {mpuData['accelZ']}</p>
        <p>Inclinación: {mpuData['Inclinacion: ']}</p>
      </div>
      <div className='colum'>
        <h2>Datos de los Motores</h2>
        <p>Motor 1: {motorData.motor1}</p>
        <p>Motor 2: {motorData.motor2}</p>
      </div>
      <div className='colum'>
        <h2>Sensor PIR</h2>
        <p>{pirData}</p>
      </div>
    </div>
  );
}

export default Data;

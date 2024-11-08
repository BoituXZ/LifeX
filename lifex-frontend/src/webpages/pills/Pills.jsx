import React from 'react'
import Navigation from '../../components/Navigation'
import styles from './Pills.module.css'





const pillData = [
  {
    index: 1,
    medicineName: 'Aspirin',
    dosage: '500mg',
    frequency: 'Once a day',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    expiryDate: '2024-01-01',
    pharmacy: 'Pharmacy A',
    doctor: 'Dr. Smith'
  },
  {
    index: 2,
    medicineName: 'Ibuprofen',
    dosage: '200mg',
    frequency: 'Twice a day',
    startDate: '2023-02-01',
    endDate: '2023-11-30',
    expiryDate: '2024-02-01',
    pharmacy: 'Pharmacy B',
    doctor: 'Dr. Johnson'
  }
];
// Creating the table mapping function

// Array containing data for each pill

const pillRows = pillData.map((item) => {
  return (
    <tr key={item.index}>
      <td>{item.medicineName}</td>
      <td>{item.dosage}</td>
      <td>{item.frequency}</td>
      <td>{item.startDate}</td>
      <td>{item.endDate}</td>
      <td>{item.expiryDate}</td>
      <td>{item.pharmacy}</td>
      <td>{item.doctor}</td>
    </tr>
  );
});




const Pills = () => {
  return (
    <>
      <div className={styles.container}>
        <Navigation/>
        <div className={styles.Body}>
          <div className={styles.bodyHeader}>
            <h1>Your Pills</h1>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.pillTable}>
              <thead>
                <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Expiry Date</th>
                    <th>Pharmacy</th>
                    <th>Doctor</th>
                  </tr>
              </thead>
              <tbody>
                  {pillRows}
              </tbody>
            </table>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.addButton}>Add</button>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Pills;




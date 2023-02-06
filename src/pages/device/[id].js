import { useRouter } from "next/router";
import MainLayout from "@/Layout/main";
import { useState, useEffect } from 'react';
import { db } from "./../../firebase-config";
import { collection, getDocs } from "firebase/firestore";


const Device = () => {
  const router = useRouter();
  const { id } = router.query;

  const [records, setRecords] = useState([]);
  const devicesCollectionRef = collection(db, "devices", id, "data");

  let tableRows = records.map((record, index) => {
    record.time = new Date(record.timestamp.seconds*1000).toLocaleTimeString("en-US", {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})

    return (
      <tr className="table-row" key={index}>
        <td className="table-data">{index + 1}</td>
        <td className="table-data">{record.time}</td>
        <td className="table-data">{record.current} amp</td>
        <td className="table-data">{record.voltage} v</td>
      </tr>
    )
  })
  useEffect(() => {
    (async () => {
      const data = await getDocs(devicesCollectionRef);
      setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })()
  }, [id]);


  return (
    <MainLayout>
        
      <table className="table">
        <thead className="table-header">
          <tr className="table-header-row" >
          <th className="header__item">#</th>
          <th className="header__item">Time</th>
          <th className="header__item">Current</th>
          <th className="header__item">Voltage</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {tableRows}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default Device;

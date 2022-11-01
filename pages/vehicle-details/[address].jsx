import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { roughData } from "../../dummyData";
import styles from "../../styles/VehicleDetails.module.css";
import { Form } from "web3uikit";

const vehicledetails = () => {
  const router = useRouter();
  const { address } = router.query;

  //   useEffect(() => {
  //     if (!router.isReady) return;
  //   }, [router.query.address, router.isReady]);

  return (
    <div className={styles.main_section}>
      <div className={styles.top_section}>
        <div className={styles.vehicle_content}>
          <div className={styles.vehicle_img}>
            <Image
              src={roughData[0].imgSource}
              alt={roughData[0].imgAlt}
              width={150}
              height={150}
              //   objectFit="cover"
            />
          </div>

          <div className={styles.vehicle_details}>
            <h2>Carpool Details: </h2>
            <div>
              <span>CarPool Id: </span>
              <h6>{roughData[0].carpoolId}</h6>
            </div>

            <div>
              <span>Address: </span>
              <h6>{roughData[0].address}</h6>
            </div>

            <div>
              <span>Origin: </span>
              <h6>{roughData[0].origin}</h6>
            </div>

            <div>
              <span>Destination: </span>
              <h6>{roughData[0].destination}</h6>
            </div>

            <div>
              <span>No of Slots Available: </span>
              <h6>{roughData[0].numOfSlotsAvailable}</h6>
            </div>

            <div>
              <span>Price Per Slot: </span>
              <h6>{roughData[0].pricePerSlot}</h6>
            </div>

            <div>
              <span>Starting Time: </span>
              <h6>{roughData[0].startTime}</h6>
            </div>

            <div>
              <span>Booking State: </span>
              <h6>{roughData[0].carpoolingState}</h6>
            </div>
          </div>
        </div>
        {/* ===================== */}
        <div className={styles.vehicle_bookings}>
          <h2>Book your Carpool</h2>
          <Form
            // onSubmit=
            data={[
              {
                name: "Carpooling Id",
                type: "number",
                value: "",
                key: "cid",
                inputWidth: "100%",
              },
              {
                name: "Booking Id",
                type: "number",
                value: "",
                key: "bid",
                inputWidth: "100%",
              },
              {
                name: "Address of user",
                type: "text",
                value: "",
                key: "address",
                inputWidth: "100%",
              },
              {
                name: "Number of slots for booking",
                type: "number",
                value: "",
                key: "no",
                inputWidth: "100%",
              },
            ]}
            // title="Book your Carpool"
            id="Main Form"
          />
        </div>
      </div>

      <h1>Carpooler History:</h1>
      <div className={styles.center_section}>
        <div className={styles.left_table}>
          <h2>Confirmed Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Address of User</th>
                <th>No. Of Slots</th>
              </tr>
            </thead>
            <tbody>
              {roughData.map((item) => {
                return (
                  <tr>
                    <td>{item.bookingId}</td>
                    <td>{item.address}</td>
                    <td>{item.numOfSlotsAvailable}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.right_table}>
          <h2>Cancelled Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Address of User</th>
                <th>No. Of Slots</th>
              </tr>
            </thead>
            <tbody>
              {roughData.map((item) => {
                return (
                  <tr>
                    <td>{item.bookingId}</td>
                    <td>{item.address}</td>
                    <td>{item.numOfSlotsAvailable}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.bottom_table}>
          <h2>Completed Rides</h2>
          <table>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Address of User</th>
                <th>No. Of Slots</th>
              </tr>
            </thead>
            <tbody>
              {roughData.map((item) => {
                return (
                  <tr>
                    <td>{item.bookingId}</td>
                    <td>{item.address}</td>
                    <td>{item.numOfSlotsAvailable}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default vehicledetails;

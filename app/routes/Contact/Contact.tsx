import FieldMapComponent from "~/components/GoogleMap/FieldMapComponent";
import GoogleMap from "~/components/GoogleMap/MapComponent";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.item}>
            <h1 className={styles.header}>Administration location</h1>
            <p>Railway Rd, Stranorlar, Co. Donegal, F93A0E4</p>
            <GoogleMap />
          </div>
          <div className={styles.item}>
            <h1 className={styles.header}>Training location</h1>
            <p>36 Dromore Rd, Dromore, Co. Donegal</p>
            <FieldMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

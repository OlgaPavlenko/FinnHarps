const FieldMapComponent = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=36 Dromore Rd, Dromore, Co. Donegal&output=embed"
      ></iframe>
    </div>
  );
};

export default FieldMapComponent;

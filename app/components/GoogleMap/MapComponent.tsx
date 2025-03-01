const GoogleMap = () => {
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
        src="https://www.google.com/maps?q=Railway Rd, Stranorlar, Co. Donegal, F93 A0E4&output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

import React from 'react';

const SellerDashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#fff', 
      padding: '20px',
    },
    heading: {
      fontSize: '2rem',
      color: '#007bff', 
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#343a40', 
      textAlign: 'center',
      maxWidth: '600px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Seller Dashboard</h2>
      <p style={styles.paragraph}>Welcome to your dashboard! Manage your products and sales here.</p>
    </div>
  );
};

export default SellerDashboard;

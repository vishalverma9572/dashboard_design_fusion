import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>About Me</h1>
        <p className="profile-description">A passionate AI and ML enthusiast with a drive for innovation and continuous learning.</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h2>Personal Details</h2>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>Date of Birth:</th>
                <td>August 8, 2024</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>Jabalpur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="profile-card">
          <h2>Contact Information</h2>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>Contact Number:</th>
                <td>738-936-4099</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td><a href="mailto:22BCS116@iiitdmj.ac.in">22BCS116@iiitdmj.ac.in</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
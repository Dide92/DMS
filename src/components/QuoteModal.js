// import React, { useState } from 'react';

// const QuoteModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send a request to your server)
//     // You can access formData.name, formData.email, and formData.message here
//     // Don't forget to close the modal after submission
//     onClose();
//   };

//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Get a Quote</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QuoteModal;

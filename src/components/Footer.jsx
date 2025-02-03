import contactInfo from "../../data/footer-array";

function Footer() {
    
  
    return (
        <footer className="text-white py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h6 className="mb-2" style={{ fontSize: "0.875rem" }}>Contact Info</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: "0.875rem" }}>
                            {contactInfo.slice(0, 3).map((contact) => (
                                <li key={contact.id} className="mb-1">
                                    <strong>{contact.type}:</strong> {contact.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h6 className="my-2" style={{ fontSize: "0.875rem" }}>Working Hours</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: "0.875rem" }}>
                            {contactInfo[3].value.map((dayInfo, index) => (
                                <li key={index} className="mb-1">
                                    <strong>{dayInfo.day}:</strong> {dayInfo.hours}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h6 className="my-2" style={{ fontSize: "0.875rem" }}>Follow Us</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: "0.875rem" }}>
                            <li><a href="#" className="text-white"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#" className="text-white"><i className="fa-brands fa-square-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;
  
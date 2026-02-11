import React from "react";
import { Link } from 'react-router-dom';
import useContactForm, {
    CONTACT_FORM_ACTION,
    CONTACT_FORM_EMAIL_TO,
} from "../../hooks/useContactForm";

const sidebarLogo =
    "https://res.cloudinary.com/dndfzn6h3/image/upload/v1770786270/Peccoengglogo_fl4fby.png";

const Sidebar = ({ isSidebar, handleSidebar }) => {
    const {
        formRef,
        handleSubmit,
        isSubmitting,
        toastMessage,
        isToastVisible,
    } = useContactForm();

    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : "close-sidebar"}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleSidebar} />
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <span className="close-side-widget" onClick={handleSidebar}>X</span>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={sidebarLogo} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                                </div>
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form
                                        ref={formRef}
                                        action={CONTACT_FORM_ACTION}
                                        className="contact-form-validated"
                                        method="post"
                                        onSubmit={handleSubmit}
                                        noValidate="novalidate"
                                    >
                                        <input
                                            type="hidden"
                                            name="email_to"
                                            value={CONTACT_FORM_EMAIL_TO}
                                        />
                                        <input
                                            type="hidden"
                                            name="subject"
                                            value="Website Enquiry"
                                        />
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required="" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button type="submit" className="thm-btn form-inner__btn" disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting..." : "Submit Now"}
                                            </button>
                                        </div>
                                    </form>
                                    <div
                                        className={`contact-toast ${isToastVisible ? "is-visible" : ""}`}
                                        role="status"
                                        aria-live="polite"
                                    >
                                        {toastMessage}
                                    </div>
                                    <div className="result" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

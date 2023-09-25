import AppLayout from 'component/AppLayout';

const ContactUs = () => {
  return (
    <AppLayout className="common-layout2 contact-us-page">
      <section className="common-service">
        <div className="common-inner">
          <div className="common-service-title">
            <h6>Contact Us</h6>
          </div>
          <div className="contact-us-row">
            <div className="contact-us-text1">
              <p>
                Thank you for using VAIV Bio-discovery Service. <br/>
                We are here to help you with any questions, concerns, or feedback you may have regarding our service.
              </p>
            </div>
          </div>
          <div className="contact-us-row">
            <div className="contact-us-row2 contact-us-text2">
              <p>General Inquiries, Technical Support, Copyright Complaints, Business and Partnership</p>
            </div>
            <div className="contact-us-row2 contact-us-text1">
              <p>
                For general inquiries or feedback, technical support, copyright complaints about our service and business and partnership, <br/>
                feel free to email us at:
              </p>
            </div>
            <div className="contact-us-email">
              <p><i>📧</i> <a href="mailto:biz@vaiv.kr">biz@vaiv.kr</a></p>
            </div>
          </div>
          <div className="contact-us-row">
            <div className="contact-us-text1">
              <p>Thank you for your interest in VAIV Bio-discovery Service. We look forward to hearing from you!</p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ContactUs;
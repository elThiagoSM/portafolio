import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

const contactContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '100px',
    margin: '0 auto'
};

const formSectionStyle = {
    width: '40%',
    marginRight: '20px'
};

const formTitleStyle = {
    fontSize: '48px',
    margin: '20px'
};

const formFieldContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
};

const formLabelStyle = {
    width: '20%',
    textAlign: 'left',
    fontSize: '18px',
    margin: '10px 0'
};

const formInputStyle = {
    width: '80%',
    padding: '13px',
    borderRadius: '4px',
    border: '1px solid #ccc'
};

const formTextareaStyle = {
    width: '80%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px'
};

const submitButtonStyle = {
    width: '80%',
    padding: '13px',
    backgroundColor: '#0087FF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
};

const contactInfoStyle = {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '20px',
    textAlign: 'left'
};

const contactParagraphStyle = {
    fontSize: '18px',
    margin: '10px 0'
};

const contactIconContainerStyle = {
    display: 'flex',
    alignItems: 'center'
};

const contactIconStyle = {
    fontSize: '48px',
    margin: '0 20px 0 0',
    display: 'flex',
    alignItems: 'center'
};

const contactTextStyle = {
    fontSize: '18px'
};

const Contact = () => {
    return (
        <div style={contactContainerStyle}>
            <div style={formSectionStyle}>
                <h1 style={formTitleStyle}>Contáctame</h1>
                <form>
                    <div style={formFieldContainerStyle}>
                        <label style={formLabelStyle}>Nombre:</label>
                        <input type="text" placeholder="Nombre" style={formInputStyle} />
                    </div>
                    <div style={formFieldContainerStyle}>
                        <label style={formLabelStyle}>Email:</label>
                        <input type="email" placeholder="Email" style={formInputStyle} />
                    </div>
                    <div style={{ ...formFieldContainerStyle, alignItems: 'start' }}>
                        <label style={formLabelStyle}>Mensaje:</label>
                        <textarea placeholder="Mensaje" style={formTextareaStyle}></textarea>
                    </div>
                    <div style={formFieldContainerStyle}>
                        <div style={{ width: '20%' }}></div>
                        <button type="submit" style={submitButtonStyle}>Enviar</button>
                    </div>
                </form>
            </div>
            <div style={contactInfoStyle}>
                <p style={contactParagraphStyle}>¡Estamos dispuestos a aclarar todas tus dudas!</p>
                <p style={contactParagraphStyle}>Nos pondremos en contacto contigo enseguida, a través del e-mail que ingreses.</p>
                <p style={contactParagraphStyle}>¡Brindamos soluciones con la mejor experiencia!</p>

                <h1 style={{ fontSize: '36px', margin: '20px 0' }}>También puedes...</h1>

                <div style={contactIconContainerStyle}>
                    <p style={contactIconStyle}><FaWhatsapp /></p>
                    <p style={contactTextStyle}>+598 98 381 512</p>
                </div>

                <div style={contactIconContainerStyle}>
                    <p style={contactIconStyle}><MdMailOutline /></p>
                    <p style={contactTextStyle}>bgdesarrollo@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

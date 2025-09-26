import React, { useState } from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #222;
  padding: 32px 32px 24px 32px;
  min-width: 420px;
`;
const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
`;
const Summary = styled.div`
  color: #444;
  margin-bottom: 18px;
  font-size: 1.08rem;
`;
const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;
const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #222;
  text-decoration: none;
  font-size: 1.05rem;
  &:hover { color: #3578e5; }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #d0d0e0;
  padding: 10px 14px;
  font-size: 1rem;
  background: #f7f7fa;
  color: #222;
`;
const Textarea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #d0d0e0;
  padding: 10px 14px;
  font-size: 1rem;
  background: #f7f7fa;
  color: #222;
  min-height: 70px;
`;
const SendButton = styled.button`
  background: #3578e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.18s;
  &:hover { background: #245bb2; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;
const StatusMsg = styled.div`
  margin-top: 10px;
  font-size: 1.01rem;
  color: ${props => props.success ? '#28c940' : '#ff3b30'};
`;

const Contact = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, msg: 'Message sent! I will get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, msg: data.error || 'Failed to send. Try again later.' });
      }
    } catch {
      setStatus({ success: false, msg: 'Failed to send. Try again later.' });
    }
    setSending(false);
  };

  return (
    <WindowFrame
      title="Contact"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 480, height: 420 }}
    >
      <Content>
        <Heading>Get In Touch</Heading>
        <Summary>
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </Summary>
        <ContactList>
          <ContactItem href="mailto:sarthakluv@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> sarthakluv@gmail.com</ContactItem>
          <ContactItem href="https://github.com/1300Sarthak" target="_blank" rel="noopener noreferrer"><FaGithub /> github.com/1300Sarthak</ContactItem>
          <ContactItem href="https://linkedin.com/in/sarsethi" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/sarsethi</ContactItem>
        </ContactList>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <SendButton type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</SendButton>
          {status && <StatusMsg success={status.success}>{status.msg}</StatusMsg>}
        </Form>
      </Content>
    </WindowFrame>
  );
};

export default Contact;

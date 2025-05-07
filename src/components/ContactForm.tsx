"use client";

import { useState, FormEvent, useEffect } from 'react';
import styles from '../app/contact/page.module.css';

const ContactForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // S'assurer que le composant est monté côté client avant d'exécuter du code spécifique au navigateur
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'email' ? 'projectType' : id]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isMounted) return; // S'assurer que nous sommes côté client
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Validation simple
    if (!formData.name.trim()) {
      setSubmitError('Veuillez entrer votre nom.');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.phone.trim()) {
      setSubmitError('Veuillez entrer votre numéro de téléphone.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simuler une réponse réussie
      if (typeof window !== 'undefined') {
        console.log('Formulaire soumis avec succès:', formData);
      }
      setSubmitSuccess(true);
      
      // Réinitialiser le formulaire après 3 secondes
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            projectType: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }
    } catch (error) {
      if (typeof window !== 'undefined') {
        console.error('Erreur lors de la soumission du formulaire:', error);
      }
      setSubmitError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={`${styles.formGroup} animate-slideUp delay-100`}>
        <label htmlFor="name" className={styles.formLabel}>Nom</label>
        <input 
          type="text" 
          id="name" 
          className={styles.formInput} 
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      <div className={`${styles.formGroup} animate-slideUp delay-200`}>
        <label htmlFor="phone" className={styles.formLabel}>Téléphone</label>
        <input 
          type="tel" 
          id="phone" 
          className={styles.formInput} 
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      <div className={`${styles.formGroup} animate-slideUp delay-300`}>
        <label htmlFor="email" className={styles.formLabel}>Type de projet</label>
        <select 
          id="email" 
          className={styles.formSelect}
          value={formData.projectType}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="">Sélectionnez un type de projet</option>
          <option value="commercial">Toiture commerciale</option>
          <option value="residential">Toiture résidentielle</option>
          <option value="repair">Réparation</option>
        </select>
      </div>
      
      <div className={`${styles.formGroup} animate-slideUp delay-400`}>
        <label htmlFor="message" className={styles.formLabel}>Message</label>
        <textarea 
          id="message" 
          className={styles.formTextarea}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      {submitError && (
        <div className={`${styles.errorMessage} animate-fadeIn`}>
          {submitError}
        </div>
      )}
      
      {submitSuccess && (
        <div className={`${styles.successMessage} animate-fadeIn`}>
          Votre message a été envoyé avec succès! Nous vous contacterons bientôt.
        </div>
      )}
      
      <button 
        type="submit" 
        className={`${styles.submitButton} animate-slideUp delay-500 hover-lift`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
      </button>
    </form>
  );
};

export default ContactForm;

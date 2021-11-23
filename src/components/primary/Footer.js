import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import '../../styles/footer.css'

let Footer = () => {
    return (
        <div className="footer">
                <div className="about">
                    <h3>A NOTRE SUJET</h3>
                    <p>notre entreprise</p>
                    <p>nous contacter</p>
                    <p>faq</p>
                </div>
                <div className="socialList">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                </div>
                <div className="help">
                    <h3>AIDE</h3>
                    <p>suivre une commande</p>
                    <p>retourner un produit</p>
                    <p>confidentialité</p>
                </div>
        </div>
    )
}

export default Footer
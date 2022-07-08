import React from 'react'
import footer from './Asset/footer.jpg'
export default function Footer() {
    return (
        <div style={{ height: "20vh", textAlign: 'center', marginBottom: '20px', backgroundImage: `url(${footer})` }}>
            <h3>ABOUT</h3>
            <p>
                The JSON Formatter is created to help folks for debugging JSON data. As JSON data is often output without line breaks to save space, it can be extremely difficult to actually read and make sense of it without formatting. This tool hoped to solve the problem by formatting and beautifying the JSON data so that it will be easy to read and debug.
            </p>
        </div>
    )
}
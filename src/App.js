import React, { useState } from "react";
import ReactJson from "react-json-view";
import MySwitch from './MySwitch'
import background from './Asset/background.png'
import dark_background from './Asset/dark_background.png'
import Footer from "./Footer";
export default function App() {
  const [jsondata, setJsonData] = React.useState([]);
  const [checked, setChecked] = useState(false)

  const handleChange = (checked) => {
    setChecked(checked)
  }



  return (
    <>
      <div style={{
        padding: '3px 13px 13px 13px', backgroundImage: `url(${checked ? background : dark_background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }} >
        <h2 style={checked ? { textAlign: 'center', color: '#383838' } : { textAlign: 'center', color: 'black' }}>JSON Formatter</h2>
        <MySwitch handleChange={handleChange} checked={checked} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column'
          }}
        >
          <div>
            <p style={checked ? { color: 'grey' } : { color: 'black' }}>Enter input JSON here</p>
            <textarea type="textarea" style={checked ? { background: 'white', color: "black", padding: '5px', height: '120px', width: '70vw', border: '1px solid lightgrey', borderRadius: '5px' } : { background: 'black', color: "white", padding: '5px', height: '120px', width: '70vw', border: '1px solid lightgrey', borderRadius: '5px' }} defaultValue={jsondata} onChange={(e) => {
              setJsonData(JSON.parse(e.target.value.replace(/,\s*$/, "")))
              console.log(JSON.parse(e.target.value.replace(/,\s*$/, "")))
            }} placeholder="Enter JSON Here">
            </textarea>
          </div>
          <p style={checked ? { color: 'grey', textAlign: 'left' } : { color: 'black', textAlign: 'left' }}>Your prettier JSON</p>
          <div style={checked ? { padding: '5px', border: '1px solid lightgrey', borderRadius: '5px', marginTop: '14px', fontSize: '15px', width: '70vw', minHeight: '90vh', background: 'white' } : { padding: '5px', border: '1px solid lightgrey', borderRadius: '5px', marginTop: '14px', fontSize: '15px', width: '70vw', minHeight: '90vh', background: 'black' }}>
            <ReactJson
              src={jsondata}
              theme={checked ? 'bright:inverted' : 'colors'}
              icon-style={"square"}
              enableClipboard={true}
              collapsed={4}
              displayDataTypes={true}
              displayObjectSize={true}
              validationMessage="JSON is incorrect"
              defaultValue={[]}
            /></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

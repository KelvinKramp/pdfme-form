import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button} from '@mui/material';
import { Form } from '@pdfme/ui';
import { Template, BLANK_PDF, checkTemplate } from '@pdfme/generator';
import formABase64 from './files/formA.js'


function App() {

  console.log(formABase64)

  function loadPdfForm(input) {
    const domContainer = document.getElementById('container');
    const template: Template = {
      basePdf: formABase64,
      schemas: [
        {
          a: {
            type: 'text',
            position: { x: 20, y: 65 },
            width: 100,
            height: 5,
            alignment: "center",
          },
          b: {
            type: 'text',
            position: { x: 10, y: 10 },
            width: 10,
            height: 10,
          },
          c: {
            type: 'text',
            position: { x: 20, y: 20 },
            width: 10,
            height: 10,
          },
        },
      ],
    };

    // This is initial data.
    const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

    const form = new Form({ domContainer, template, inputs });
    console.log(template);
    console.log(inputs)
  }

  return (
    <div className="App" >
      <header className="App-header">
        <Button variant="text" onClick={() => loadPdfForm("")}>Start</Button>
        <div id='container' ></div>
      </header>
    </div >
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Subject from './components/subject';
//subjects State for return
function App() {
  const [ subjectsState, setSubjectsState ] = useState({
    subjects: [
      { id: 1, title: "Web App Development", year: 3, lecturer: "Rosanne Birney", description: "This module approaches web application development from an apps and services perspective, as opposed to the monolithic, server-side rendering model. Services will be formulated as REST APIs (Representational State Transfer Application Program Interface), while multiple service consumer forms will be considered, including Single Page Apps (SPA) and other services. The principles and patterns underpinning the design of both components (SPA and REST API ) will be examined as well as the fine-grained aspects of the underlying communication protocol." },
      { id: 2, title: "Digital Graphic Design", year: 3, lecturer: "Sinead O' Riordan", description: "This module introduces the student to vector-based illustration software. Students will produce high-quality artwork for both screen and print, and will gain an understanding of the limitations of printing methods for various print media. This module also introduces the student to industry-standard publishing applications for interactive PDF documents, digital magazines, and EPUBs."  },
      { id: 3, title: "NoSQL Databases", year: 3, lecturer: "T.J. McDonald", description: "This module will introduce the student to the principles and practice of designing database solutions for large volumes of either structured or unstructured data. The student will gain competence in determining the suitability of a schemaless database or a data warehouse. The student will be introduced to the concepts of data persistence, consistency and distribution in the NoSQL database context. They will gain experience in the design and implementation of a NoSQL database system for unstructured data. The module will also introduce them to the use of data warehouses for storage of large volumes of structured data." }
    ],
    showSubjects: false,
    btnBackgroundColor: 'green',
    btnText: 'Show subjects'
  });

  const subjectsStyle = {
    backgroundColor: subjectsState.btnBackgroundColor,
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const descriptionCardStyle = {
    color: 'black',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

//readmore State
  const [ readmoreState, setReadmoreState ] = useState({
    title: "",
    description: "",
    showDesc: false
  });

  const readMoreHandler = (subjectIndex) => {
    setReadmoreState({
      title: subjectsState.subjects[subjectIndex].title,
      description: subjectsState.subjects[subjectIndex].description,
      showDesc: true
    })
  } 


  const hideDescHandler = (subjectIndex) => {
      setReadmoreState({
        description: readmoreState.description,
        title: readmoreState.title,
        showDesc: false
      });
    } 

//description - readmore State
  let description = null;

  if (readmoreState.showDesc){
    description = (
      <div className="description">
        
        <h2>{readmoreState.title}</h2>
        <p>{readmoreState.description}</p>
        <span onClick={hideDescHandler} className="hide">Hide description</span>
      </div>
    );
  }
//show/hide button
  const toggleSubjectsHandler = () => {
    const doesShow = subjectsState.showSubjects;
    
    setSubjectsState({
       subjects: subjectsState.subjects,
      showSubjects: !doesShow,
      btnBackgroundColor: subjectsState.btnBackgroundColor === 'green' ? 'red' : 'green',
    btnText: subjectsState.btnText === 'Show subjects' ? 'Hide subjects' : 'Show subjects'
    });
    
  }

  
  //Hide card 
  const hideCardHandler = (subjectIndex) => {
    const subjects = [...subjectsState.subjects];
    subjects.splice(subjectIndex, 1);
    setSubjectsState({
      subjects: subjects,
      showSubjects: subjectsState.showSubjects,
      btnBackgroundColor: 'red',
      btnText: 'Hide subjects'
    });
  } 
// if statement for cards 
  let subjects=null; 

  if (subjectsState.showSubjects) {
    subjects = (
      <div>
        {subjectsState.subjects.map((subject, index) => {
          return <Subject 
            title={subject.title}
            year={subject.year}
            lecturer={subject.lecturer}
            key={subject.id}
            hide={() => hideCardHandler(index)}
            readmore={() => readMoreHandler(index)}
          >
          Read more about this subject...
          </Subject>
        })}
      </div>
    );
  }




  
  return (
    <div className="container">
      <h1>Hi, I'm a React App</h1>
      <button onClick={toggleSubjectsHandler} style={subjectsStyle}>{subjectsState.btnText}</button>
     <br />
     {subjects} 
     {description}
    </div>
  );
}

export default App;

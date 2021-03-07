import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './styles.css';

import bee from '../../assets/images/Phase3/abelha-emp.png';
import barriga from '../../assets/images/Phase3/barriga.png'; 
import boca from '../../assets/images/Phase3/boca.png';
import braco from '../../assets/images/Phase3/braço.png';
import bumbum from '../../assets/images/Phase3/bumbum.png'; 
import cabeca from '../../assets/images/Phase3/cabeça.png'; 
import peito from '../../assets/images/Phase3/peito.png'; 
import pepeca from '../../assets/images/Phase3/pepeca.png';  
import perna from '../../assets/images/Phase3/perna.png'; 
import { Link }  from 'react-router-dom'
import Nav from '../../components/Nav';

const itemsFromBackend = [
  { id: '0', content: "barriga", name: "pni", img: barriga },
  { id: '1', content: "boca", name: "pi", img: boca },
  { id: '2', content: "braço", name: "pni", img: braco },
  { id: '3', content: "bumbum", name: "pi", img: bumbum },
  { id: '4', content: "cabeça", name: "pni", img: cabeca },
  { id: '5', content: "peito", name: "pi", img: peito },
  { id: '6', content: "pepeca", name: "pi", img: pepeca },
  { id: '7', content: "perna", name: "pni", img: perna },
];

const columnsFromBackend = {
  ['0']: {
    name: "PARTE ÍNTIMA",
    id_name: "list_01",
    items: []
  },
  ['1']: {
    name: "PARTES DO CORPO",
    id_name: "list_03", 
    items: itemsFromBackend
  },
  ['2']: {
    name: "PARTE NÃO ÍNTIMA",
    id_name: "list_02",
    items: []
  }
};

function DragDrop(props) {
  const idFase = 3;
  const id =  props.match.params.id;
  const [columns, setColumns] = useState(columnsFromBackend);
  const [resultcolumn01, setResultcolumn01] = useState("");
  const [resultcolumn03, setResultcolumn03] = useState("");

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  const confirmItems = () => {
    const column01 = [columns[0].items][0];
    const column02 = [columns[1].items][0];
    const column03 = [columns[2].items][0];
    let result01 = true;
    let result02 = true;
    let result03 = true;

    if (column01 != "" && column02 == "" && column03 != "") {
      for (let i = 0; i < column01.length; i++) {
        if (column01[i].name === "pni") {
          result01 = false;
          break;
        }
        continue;
      }
      for (let j = 0; j < column03.length; j++) {
        if (column03[j].name === "pi") {
          result03 = false;
          break;
        }
        continue;
      }
    } else {
      result01 = false;
      result02 = false;
      result03 = false;
    }
    
    if (result02 === true) {
      if (result01 === true) {
        setResultcolumn01(true);
      } else {
        setResultcolumn01(false);
      }
      if (result03 === true) {
        setResultcolumn03(true);
      } else {
        setResultcolumn03(false);
      }
    } else {
      setResultcolumn01(false);
      setResultcolumn03(false);
    }
  }

  return (
    <>
      <Nav id="nav-fase3">
        <h1>FASE 3</h1>
      </Nav>
      <div className="confirm">
        <div className="status">
          <div className="column_01">
            {resultcolumn01 === true ? <i id="like" className="fas fa-thumbs-up"></i> : resultcolumn01 === false ? <i id="deslike" className="fas fa-thumbs-down"></i> : ""} 
          </div>
          <button onClick={confirmItems}>Conferir</button>
          <div className="column_03">
            {resultcolumn03 === true ? <i id="like" className="fas fa-thumbs-up"></i> : resultcolumn03 === false ? <i id="deslike" className="fas fa-thumbs-down"></i> : ""}
          </div>
        </div>
        <div className="next_level">
          {resultcolumn01 === true && resultcolumn03 === true ? <Link to={`/concluido/${id}`}><button className="fas fa-long-arrow-alt-right"></button></Link> : ""}
        </div>
      </div>
      <div className="container_game">
        <div className="bee">
          <p>Hora de praticar !!!<br/>Arraste os cards que <br/> estão na coluna do meio, <br/> e mova para o lugar <br/> apropriado. </p>
          <img src={bee} />
        </div>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          <div className="section_1">
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div className="list_box" id={column.id_name} key={columnId}>
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div 
                            {...provided.droppableProps} 
                            ref={provided.innerRef} 
                            className="list" 
                            style={{background: snapshot.isDraggingOver ? "#d4d4d48c" : "#d4d4d449"}}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        className="card_body"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          backgroundColor: snapshot.isDragging ? "#df4747" : "#e35454bb",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <div className="img_body">
                                          <img src={item.img} />
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default DragDrop;
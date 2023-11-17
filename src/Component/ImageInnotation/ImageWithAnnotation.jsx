import ai1 from "../../Images/ai1.jpg"
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Text, Arrow } from 'react-konva';

const ImageWithAnnotation = () => {
  const [lines, setLines] = useState([]);
  const [textAnnotations, setTextAnnotations] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = ai1; // Replace with your image URL
    img.onload = () => {
      setImage(img);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.className === 'Image') {
      const pos = e.target.getStage().getPointerPosition();
      if (selectedAnnotation === 'text') {
        setTextAnnotations([
          ...textAnnotations,
          { text, x: pos.x, y: pos.y, id: Math.random() },
        ]);
        setText('');
      }
    }
  };

  const handleAnnotationClick = (id) => {
    setSelectedAnnotation(id);
  };

  const handleStageClick = () => {
    setSelectedAnnotation(null);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onClick={handleStageClick}
    >
      <Layer>
        <Image
          className="Image"
          x={0}
          y={0}
          width={window.innerWidth}
          height={window.innerHeight}
          image={image}
        />
        {lines.map((line, i) => (
          <Arrow key={i} points={line.points} stroke="black" tension={0.5} />
        ))}
      </Layer>
      <Layer>
        {textAnnotations.map((annotation) => (
          <Text
            key={annotation.id}
            x={annotation.x}
            y={annotation.y}
            text={annotation.text}
            fill={selectedAnnotation === annotation.id ? 'red' : 'black'}
            onClick={() => handleAnnotationClick(annotation.id)}
            draggable
          />
        ))}
      </Layer>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      />
    </Stage>
  );
};

export default ImageWithAnnotation;

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import HorizontalMenu from './HorizontalMenu';
import GridView from './GridView';
import TileView from './TileView';
import DetailedView from './DetailedView';
import { Container, Button } from '@mui/material';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'tile'

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'tile' : 'grid');
  };

  return (
    <Router>
      <div>
        <HorizontalMenu />
        <Container style={{ marginTop: '20px' }}>
          <HamburgerMenu />
          <Button onClick={toggleViewMode} variant="contained" color="primary">
            Toggle to {viewMode === 'grid' ? 'Tile' : 'Grid'} View
          </Button>
          <Routes>
            <Route
              path="/"
              element={
                viewMode === 'grid' ? (
                  <GridView />
                ) : (
                  <TileView onTileClick={handleTileClick} />
                )
              }
            />
          </Routes>
          {selectedStudent && (
            <DetailedView student={selectedStudent} onClose={handleCloseDetails} />
          )}
        </Container>
      </div>
    </Router>
  );
}

export default App;

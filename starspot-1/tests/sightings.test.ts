import { render, screen, fireEvent } from '@testing-library/react';
import SightingCard from '../components/SightingCard';
import { Sighting } from '../lib/types'; // Assuming you have a types file

describe('SightingCard', () => {
  const mockSighting: Sighting = {
    id: '1',
    celebrityName: 'John Doe',
    location: 'Hollywood',
    timestamp: new Date().toISOString(),
  };

  test('renders sighting details', () => {
    render(<SightingCard sighting={mockSighting} />);
    
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Hollywood/i)).toBeInTheDocument();
  });

  test('displays the correct timestamp', () => {
    render(<SightingCard sighting={mockSighting} />);
    
    expect(screen.getByText(new RegExp(mockSighting.timestamp, 'i'))).toBeInTheDocument();
  });
});

import { createMocks } from 'node-mocks-http';
import route from '../app/api/sightings/route';

describe('/api/sightings', () => {
  test('GET returns a list of sightings', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await route(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBeDefined(); // Adjust based on your response structure
  });

  test('POST creates a new sighting', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        celebrityName: 'Jane Doe',
        location: 'New York',
      },
    });

    await route(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(res._getData()).toHaveProperty('id'); // Adjust based on your response structure
  });
});
import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import UserList from './UserList';
import App from './App';

global.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock('axios');

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
    },
  },
];

describe('API Checkpoint — UserList & Axios Integration', () => {
  let container = null;
  let root = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
    jest.clearAllMocks();
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
    container = null;
  });

  test('Fetches from jsonplaceholder API with axios.get in useEffect and renders users', async () => {
    axios.get.mockResolvedValueOnce({ data: mockUsers });

    await act(async () => {
      root.render(<UserList />);
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(container.textContent).toContain('Leanne Graham');
    expect(container.textContent).toContain('Ervin Howell');
    expect(container.textContent).toContain('@Bret');
    expect(container.textContent).toContain('Sincere@april.biz');
    expect(container.textContent).toContain('Romaguera-Crona');
  });

  test('Renders search input and allows filtering users', async () => {
    axios.get.mockResolvedValueOnce({ data: mockUsers });

    await act(async () => {
      root.render(<UserList />);
    });

    const searchInput = container.querySelector('.search-input');
    expect(searchInput).not.toBeNull();

    await act(async () => {
      searchInput.value = 'Ervin';
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      searchInput.dispatchEvent(new Event('change', { bubbles: true }));
    });

    expect(container.textContent).toContain('Ervin Howell');
  });

  test('Renders error UI when axios request fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Connection Error'));

    await act(async () => {
      root.render(<UserList />);
    });

    expect(container.textContent).toContain('Failed to load user directory');
    expect(container.textContent).toContain('Network Connection Error');
  });

  test('App renders header branding and UserList container', async () => {
    axios.get.mockResolvedValueOnce({ data: mockUsers });

    await act(async () => {
      root.render(<App />);
    });

    expect(container.textContent).toContain('UserSphere Directory');
    expect(container.textContent).toContain('GoMyCode — API Checkpoint');
  });
});

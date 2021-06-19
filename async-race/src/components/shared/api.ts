export type CarObj = {
  'name': string,
  'color': string,
  'id': number,
};

export type WinnerObj = {
  'id': number,
  'wins': number,
  'time': number
};

export type EngineObj = {
  'velocity': number,
  'distance': number
};

export type DriveObj = {
  'success': boolean
};

const url = 'http://localhost:3000';

// Garage methods===================================================================================

export async function getCars(page: number, limit = 7): Promise<Response> {
  const path = '/garage';
  const params = `?_limit=${limit}&_page=${page}`;
  const response = await fetch(url + path + params);

  return response;
}

export async function getCar(id: number): Promise<CarObj> {
  const path = `/garage/:${id}`;
  const response = await fetch(url + path);

  return response.json();
}

export async function createCar(carName: string, carColor: string): Promise<CarObj> {
  const path = '/garage';
  const reqHeaders = { 'Content-Type': 'application/json' };
  const reqBody = { name: carName, color: carColor };
  const response = await fetch(url + path, {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify(reqBody),
  });

  return response.json();
}

export async function deteleCar(id: number): Promise<void> {
  const path = `/garage/:${id}`;
  const response = await fetch(url + path, { method: 'DELETE' });

  return response.json();
}

export async function updateCar(id: number, carName: string, carColor: string): Promise<CarObj> {
  const path = `/garage/:${id}`;
  const reqHeaders = { 'Content-Type': 'application/json' };
  const reqBody = { name: carName, color: carColor };
  const response = await fetch(url + path, {
    method: 'PUT',
    headers: reqHeaders,
    body: JSON.stringify(reqBody),
  });

  return response.json();
}

export async function getCarsCount(limit = 7): Promise<string | null> {
  const path = '/garage';
  const params = `?_limit=${limit}`;
  const response = await fetch(url + path + params);

  return response.headers.get('X-Total-Count');
}

// Winners methods==================================================================================

export async function getWinners(
  page: number, limit = 7, sort: string, order: string,
): Promise<Response> {
  const path = '/winners';
  const params = `?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`;

  const response = await fetch(url + path + params);

  return response;
}

export async function getWinner(id: string): Promise<WinnerObj> {
  const path = `/winners/:${id}`;
  const response = await fetch(url + path);

  return response.json();
}

export async function createWinner(
  carID: number, carWins: number, carTime: number,
): Promise<WinnerObj> {
  const path = '/winners';
  const reqHeaders = { 'Content-Type': 'application/json' };
  const reqBody = { id: carID, wins: carWins, time: carTime };
  const response = await fetch(url + path, {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify(reqBody),
  });

  return response.json();
}

export async function deleteWinner(id: number): Promise<void> {
  const path = `/winners/:${id}`;
  const response = await fetch(url + path, { method: 'DELETE' });

  return response.json();
}

export async function updateWinner(
  id: number, carWins: number, carTime: number,
): Promise<Response> {
  const path = `/winners/:${id}`;
  const reqHeaders = { 'Content-Type': 'application/json' };
  const reqBody = { name: carWins, color: carTime };
  const response = await fetch(url + path, {
    method: 'PUT',
    headers: reqHeaders,
    body: JSON.stringify(reqBody),
  });

  return response;
}

export async function getWinnersCount(limit = 7): Promise<string | null> {
  const path = '/winners';
  const params = `?_limit=${limit}`;
  const response = await fetch(url + path + params);

  return response.headers.get('X-Total-Count');
}

// Car methods======================================================================================

export async function carSwitchEngine(id: number, status: string): Promise<EngineObj> {
  const path = `/engine/:${id}?status=${status}`;
  const response = await fetch(url + path);

  return response.json();
}

export async function carSwitchDrive(id: number, status: string): Promise<DriveObj> {
  const path = `/engine/:${id}?status=${status}`;
  const response = fetch(url + path);

  return (await response).json();
}
import Component from '../shared/component';
import Main from '../page/main';
import Button from '../shared/button';
import CarMgmt from '../car-mgmt/car-mgmt';
import Car from '../car/car';
import {
  CarObj,
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
} from '../shared/api';
import generateCars from '../generate-cars/generate-cars';
import './garage.scss';

class Garage {
  private readonly mainElement: HTMLElement;

  private readonly pageGarage: HTMLElement;

  private readonly pageHeading: HTMLElement;

  private readonly carMgMt: HTMLElement;

  private readonly garageWrapper: HTMLElement;

  private readonly carAmount: HTMLElement;

  private readonly btnWrapper: HTMLElement;

  private readonly btnPrev: HTMLElement;

  private readonly btnNext: HTMLElement;

  private readonly pageNumElement: HTMLElement;

  private page = 1;

  private pagesAmount = 1;

  private selectedCar = -1;

  constructor() {
    this.mainElement = new Main().render();
    this.pageGarage = new Component('div', ['page__garage']).render();
    this.pageHeading = new Component('h2', ['page__garage__heading']).render();
    this.pageHeading.innerText = 'Garage';

    this.carMgMt = new CarMgmt().render();
    this.garageWrapper = new Component('div', ['garage__wrapper']).render();
    this.carAmount = new Component('span', ['garage__amount']).render();
    this.carAmount.innerText = 'Cars: 6';

    this.btnWrapper = new Component('div', ['garage__btn__wrapper']).render();
    this.btnPrev = new Button('garage__btn__prev', 'Prev page').render();
    this.btnNext = new Button('garage__btn__next', 'Next page').render();
    this.pageNumElement = new Component('span', ['garage__page-num']).render();

    this.btnWrapper.addEventListener('click', (e) => {
      if (e.target === this.btnPrev) {
        this.getCarsFromServer(this.page -= 1);
      }

      if (e.target === this.btnNext) {
        this.getCarsFromServer(this.page += 1);
      }
    });

    this.carMgMt.addEventListener('submit', (e) => {
      const createForm = this.carMgMt.querySelector('.car-mgmt__create__form');
      const createInputName = this.carMgMt.querySelector('.car-mgmt__create__input-name');
      const createInputColor = this.carMgMt.querySelector('.car-mgmt__create__input-color');

      const updateForm = this.carMgMt.querySelector('.car-mgmt__update__form');
      const updateInputName = this.carMgMt.querySelector('.car-mgmt__update__input-name');
      const updateInputColor = this.carMgMt.querySelector('.car-mgmt__update__input-color');

      if (e.target === createForm) {
        e.preventDefault();
        this.addCarToServer(
          (createInputName as HTMLInputElement).value,
          (createInputColor as HTMLInputElement).value,
        );
        (createForm as HTMLFormElement).reset();
      }

      if (e.target === updateForm) {
        e.preventDefault();
        this.updateCarOnServer(
          this.selectedCar,
          (updateInputName as HTMLInputElement).value,
          (updateInputColor as HTMLInputElement).value,
        );
        (updateForm as HTMLFormElement).reset();
        this.selectedCar = -1;
      }
    });

    this.carMgMt.addEventListener('click', (e) => {
      const btnGenerate = this.carMgMt.querySelector('.car-mgmt__btn__generate');

      if (e.target === btnGenerate) {
        const cars = generateCars(100);

        cars.forEach((car, index) => {
          createCar(car.name, car.color)
            .then(() => {
              if (index === cars.length - 1) this.getCarsFromServer(this.page);
            });
        });
      }
    });
  }

  // Gat all cars from server
  getCarsFromServer(page: number): void {
    this.garageWrapper.innerHTML = '';

    getCars(page)
      .then((response) => {
        const carsCount = response.headers.get('X-Total-Count');
        this.carAmount.innerText = `Cars: ${carsCount}`;

        if (carsCount) {
          this.pagesAmount = Math.ceil(parseInt(carsCount, 10) / 7);

          if (this.pagesAmount === this.page) {
            this.btnNext.classList.add('garage__btn__next_inactive');
          } else this.btnNext.classList.remove('garage__btn__next_inactive');

          if (this.page === 1) {
            this.btnPrev.classList.add('garage__btn__prev_inactive');
          } else this.btnPrev.classList.remove('garage__btn__prev_inactive');
        }

        return response.json();
      })
      .then((cars) => cars.forEach((car: CarObj) => {
        const carElem = new Car(car.name, car.color, car.id).render();
        carElem.addEventListener('click', (e) => {
          if ((e.target as HTMLElement).classList.contains('btn__remove')) {
            this.deleteCarFromServer(parseInt(carElem.id, 10));
          }

          if ((e.target as HTMLElement).classList.contains('btn__select')) {
            getCar(parseInt(carElem.id, 10))
              .then((carInfo) => {
                this.selectedCar = parseInt(carElem.id, 10);
                const updateInputName = this.carMgMt.querySelector('.car-mgmt__update__input-name');
                const updateInputColor = this.carMgMt.querySelector('.car-mgmt__update__input-color');
                (updateInputName as HTMLInputElement).value = carInfo.name;
                (updateInputColor as HTMLInputElement).value = carInfo.color;
              });
          }
        });
        this.garageWrapper.appendChild(carElem);
      }));

    this.page = page;
    this.pageNumElement.innerText = `Page: ${this.page}`;
  }

  // Get specified car from server
  getCarFromServer(id: number): void {
    getCar(id)
      .then((car) => car);
  }

  // Add new car to server's database
  addCarToServer(carName: string, carColor: string): void {
    createCar(carName, carColor)
      .then((car) => {
        this.getCarsFromServer(this.page);
        console.log(car);
      });
  }

  // Delete specified car from server
  deleteCarFromServer(id: number): void {
    deleteCar(id)
      .then(() => {
        this.getCarsFromServer(this.page);
        console.log('Car deleted!');
      });
  }

  // Update specified car in server's database
  updateCarOnServer(id: number, carName: string, carColor: string): void {
    updateCar(id, carName, carColor)
      .then((car) => {
        this.getCarsFromServer(this.page);
        console.log(car);
      });
  }

  render():HTMLElement {
    this.getCarsFromServer(this.page);

    [
      this.pageHeading,
      this.carMgMt,
      this.carAmount,
      this.garageWrapper,
    ].forEach((elem) => this.pageGarage.appendChild(elem));

    [
      this.btnPrev,
      this.pageNumElement,
      this.btnNext,
    ].forEach((btn) => this.btnWrapper.appendChild(btn));

    this.pageGarage.appendChild(this.btnWrapper);
    this.mainElement.appendChild(this.pageGarage);

    return this.mainElement;
  }
}

export default Garage;

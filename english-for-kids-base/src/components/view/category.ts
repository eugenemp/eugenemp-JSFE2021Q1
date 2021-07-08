import Component from './view-component';
import './category.scss';

export default class Category {
  private readonly wrapperElement: HTMLElement;

  constructor() {
    this.wrapperElement = new Component('div', 'category').render();
  }

  render(): HTMLElement {
    return this.wrapperElement;
  }
}
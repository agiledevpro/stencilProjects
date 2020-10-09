//import { Component, State, Prop, Element, h } from '@stencil/core';
import { Component, Prop, Event, Element, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'user-component',
  styleUrl: 'user-component.css',

})
export class UserComponent {

  @Prop() value: string;

  @Event({
    bubbles: true
  }) userNameEntered: EventEmitter;

  @Element() el: HTMLElement;

  useNameCompletedHandler() {
    const textarea = this.el.querySelector('textarea')
    this.userNameEntered.emit(textarea.value);

  }

  render() {
    return <div>
      <textarea id="textarea">{this.value}</textarea>
    <button onClick={() => this.useNameCompletedHandler()}>Save</button>
    </div>
  }
}

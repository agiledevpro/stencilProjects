import { Component, Prop, Listen, h, Watch } from '@stencil/core';

@Component({
  tag:'parent-component',
  styleUrl:'parent-component.css',
  shadow:true
})

export class ParentComponent {
  @Prop() value: string = "Enter text here";
  @Prop() name : string = "";
  @Prop() oldValue : string = "";
  @Prop() list : Array<object> = [];

  @Listen('userNameEntered')
  useNameCompletedHandler(event: any) {
    this.name = event.detail;
    this.list.push(<li>{this.name}</li>)

  }

  @Watch('name')
  watchHandler(newValue: string, oldValue : string) {
    this.name = newValue
    this.oldValue = oldValue;
    this.componentShouldUpdate()
  }

  componentShouldUpdate() {
    if (this.oldValue !== this.name) {
      return true
    }
    return false
  }

  render() {
    return (<div>
      <user-component value={this.value}></user-component>
      <list-component name={this.name} list={this.list}></list-component>
      </div>);
  }
}
